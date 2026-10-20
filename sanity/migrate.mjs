#!/usr/bin/env node
/**
 * Sanity Migration Script — Rock One Solutions
 *
 * Imports all existing local content into Sanity CMS.
 * Uses deterministic IDs so it can be run multiple times without duplicates.
 *
 * Pre-requisite: run `node sanity/extract-data.mjs` first to generate migration-data.json
 *
 * Usage:
 *   node sanity/extract-data.mjs
 *   SANITY_PROJECT_ID=xxx SANITY_DATASET=production SANITY_API_TOKEN=yyy node sanity/migrate.mjs
 */

import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  console.error("Missing SANITY_PROJECT_ID or SANITY_API_TOKEN environment variables.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const ROOT = resolve(process.cwd());
const PUBLIC = join(ROOT, "public");
const DATA_PATH = join(ROOT, "sanity/migration-data.json");

if (!existsSync(DATA_PATH)) {
  console.error("migration-data.json not found. Run first: node sanity/extract-data.mjs");
  process.exit(1);
}

const migrationData = JSON.parse(readFileSync(DATA_PATH, "utf-8"));

// ─── Helpers ───────────────────────────────────────────────────────────────

function deterministicId(type, slug) {
  return `${type}-${slug.replace(/[^a-zA-Z0-9-]/g, "-")}`;
}

async function uploadImage(filePath, filename) {
  const absPath = join(PUBLIC, filePath);
  if (!existsSync(absPath)) {
    console.warn(`  [SKIP] Image not found: ${absPath}`);
    return null;
  }
  try {
    const buffer = readFileSync(absPath);
    const asset = await client.assets.upload("image", buffer, { filename });
    console.log(`  [IMG] Uploaded: ${filename}`);
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (err) {
    console.warn(`  [WARN] Failed to upload ${filename}:`, err.message);
    return null;
  }
}

/** Convert local BlogBlock[] to Sanity Portable Text */
function blogBlocksToPortableText(blocks) {
  const result = [];
  let blockIndex = 0;

  for (const block of blocks) {
    const key = `block-${blockIndex++}`;

    switch (block.type) {
      case "h2":
        result.push({
          _type: "block", _key: key, style: "h2", markDefs: [],
          children: [{ _type: "span", _key: `${key}-s0`, text: block.text, marks: [] }],
        });
        break;

      case "quote":
        result.push({
          _type: "block", _key: key, style: "blockquote", markDefs: [],
          children: [{ _type: "span", _key: `${key}-s0`, text: block.text, marks: [] }],
        });
        break;

      case "ul":
        for (let i = 0; i < block.items.length; i++) {
          const itemKey = `${key}-li${i}`;
          result.push({
            _type: "block", _key: itemKey, style: "normal",
            listItem: "bullet", level: 1, markDefs: [],
            children: [{ _type: "span", _key: `${itemKey}-s0`, text: block.items[i], marks: [] }],
          });
        }
        break;

      case "rich": {
        const markDefs = [];
        const children = [];
        let spanIndex = 0;
        for (const part of block.parts) {
          const spanKey = `${key}-s${spanIndex++}`;
          if (part.href) {
            const markKey = `link-${spanIndex}`;
            markDefs.push({ _type: "link", _key: markKey, href: part.href });
            children.push({ _type: "span", _key: spanKey, text: part.text, marks: [markKey] });
          } else {
            children.push({ _type: "span", _key: spanKey, text: part.text, marks: [] });
          }
        }
        result.push({ _type: "block", _key: key, style: "normal", markDefs, children });
        break;
      }

      case "p":
      default:
        result.push({
          _type: "block", _key: key, style: "normal", markDefs: [],
          children: [{ _type: "span", _key: `${key}-s0`, text: block.text, marks: [] }],
        });
        break;
    }
  }

  return result;
}

// ─── Blog Posts ────────────────────────────────────────────────────────────

async function migrateBlogPosts() {
  console.log("\n=== Migrating Blog Posts ===");
  const { blogPosts } = migrationData;

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];
    const docId = deterministicId("blogPost", post.slug);
    console.log(`  [${i + 1}/${blogPosts.length}] ${post.title}`);

    let heroImageRef = null;
    if (post.heroImage?.src) {
      heroImageRef = await uploadImage(post.heroImage.src, `blog-hero-${post.slug}.png`);
      if (heroImageRef) {
        heroImageRef.alt = post.heroImage.alt || "";
        heroImageRef.caption = post.heroImage.caption || "";
      }
    }

    let socialImageRef = null;
    if (post.socialImage) {
      socialImageRef = await uploadImage(post.socialImage, `blog-social-${post.slug}.jpg`);
    }

    const doc = {
      _id: docId,
      _type: "blogPost",
      title: post.title,
      cardTitle: post.cardTitle || undefined,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      category: post.category,
      author: post.author,
      publishedDate: post.date,
      updatedDate: post.updatedDate || undefined,
      readTime: post.readTime,
      heroImage: heroImageRef || undefined,
      socialImage: socialImageRef || undefined,
      body: blogBlocksToPortableText(post.body),
      faqs: post.faqs
        ? post.faqs.map((faq, fi) => ({
            _type: "faq", _key: `faq-${fi}`,
            question: faq.question, answer: faq.answer,
          }))
        : undefined,
      displayOrder: i + 1,
      published: true,
    };

    await client.createOrReplace(doc);
    console.log(`    -> Created/updated: ${docId}`);
  }
}

// ─── Work Projects ─────────────────────────────────────────────────────────

async function migrateWorkProjects() {
  console.log("\n=== Migrating Work Projects ===");
  const { workProjects, websiteLaunches, crmProjectScreens } = migrationData;

  for (let i = 0; i < workProjects.length; i++) {
    const project = workProjects[i];
    const docId = deterministicId("workProject", project.slug);
    console.log(`  [${i + 1}/${workProjects.length}] ${project.title}`);

    let coverImageRef = null;
    if (project.image) {
      coverImageRef = await uploadImage(project.image, `work-cover-${project.slug}.png`);
      if (coverImageRef) coverImageRef.alt = project.imageAlt || "";
    }

    const gallery = [];
    if (project.slug === "auto-parts-crm" && crmProjectScreens) {
      for (const screen of crmProjectScreens) {
        const imgRef = await uploadImage(screen.src, `work-screen-${screen.id}.png`);
        if (imgRef) {
          gallery.push({
            ...imgRef, _key: `screen-${screen.id}`,
            alt: screen.alt, caption: screen.description || "",
            label: screen.label, title: screen.title,
            description: screen.description,
            width: screen.width, height: screen.height,
          });
        }
      }
    }

    const doc = {
      _id: docId, _type: "workProject",
      clientName: project.client, projectTitle: project.title,
      slug: { _type: "slug", current: project.slug },
      summary: project.summary, description: project.description,
      projectCategory: "crm", servicesDelivered: project.services,
      coverImage: coverImageRef || undefined, imageMode: "screenshot",
      screenshotGallery: gallery.length > 0 ? gallery : undefined,
      projectHref: project.projectHref, caseStudyHref: project.caseStudyHref,
      liveHref: project.liveHref || undefined,
      ctaLabel: "View project", external: false,
      displayOrder: i + 1, published: true,
    };

    await client.createOrReplace(doc);
    console.log(`    -> Created/updated: ${docId}`);
  }

  for (let i = 0; i < websiteLaunches.length; i++) {
    const project = websiteLaunches[i];
    const docId = deterministicId("workProject", `website-${project.slug}`);
    console.log(`  [Website ${i + 1}/${websiteLaunches.length}] ${project.title}`);

    let coverImageRef = null;
    if (project.image) {
      coverImageRef = await uploadImage(project.image, `work-website-${project.slug}.png`);
      if (coverImageRef) coverImageRef.alt = project.imageAlt || "";
    }

    const doc = {
      _id: docId, _type: "workProject",
      clientName: project.client, projectTitle: project.title,
      slug: { _type: "slug", current: `website-${project.slug}` },
      summary: project.summary, description: project.summary,
      projectCategory: "website", servicesDelivered: project.services,
      coverImage: coverImageRef || undefined, imageMode: project.imageMode,
      projectHref: project.href, ctaLabel: project.cta,
      external: project.external || false,
      displayOrder: workProjects.length + i + 1, published: true,
    };

    await client.createOrReplace(doc);
    console.log(`    -> Created/updated: ${docId}`);
  }
}

// ─── Google Reviews ────────────────────────────────────────────────────────

async function migrateGoogleReviews() {
  console.log("\n=== Migrating Google Reviews ===");

  const reviews = [
    {
      slug: "info-mee-car-rentals", reviewerName: "Info Mee Car Rentals",
      company: "Mee Car Rentals",
      fullReview: "Our Mee Car Rentals site needed to be quick and easy on mobile. Rock One Solutions delivered that. Clear pages, fast load, and a form customers actually use. Happy with the work.",
      rating: 5, reviewDate: "September 2026",
    },
    {
      slug: "drivex-auto-parts", reviewerName: "DriveX Auto Parts",
      company: "DriveX Auto Parts",
      fullReview: "Rock One Solutions developed the DriveX Auto Parts website. It is clear, easy to use, and works well for our used-engine and transmission business. Good communication and a site we are happy to send customers to.",
      rating: 5, reviewDate: "September 2026",
    },
    {
      slug: "mee-autoparts", reviewerName: "MEE Autoparts",
      company: "MEE Auto Parts",
      fullReview: "Rock One Solutions built our CRM at MEE Auto Parts.\n\nThis was our first time working with an Indian software company and it went well. They understood what we needed, delivered on time, and the system is easy for the team to use.\n\nLeads, orders, and documents are now in one place. It is fast on desktop and on the phone. We would use them again.\n\nMEE Auto Parts",
      rating: 5, reviewDate: "September 2026",
    },
    {
      slug: "ayan-das", reviewerName: "Ayan Das",
      company: "Intracia Technologies", reviewerRole: "CEO",
      fullReview: "Rock One Solutions handles our IT support and website updates, and the arrangement works well for us.\n\nWe did not want a full-time developer for regular site changes and small technical issues. Their remote team picks up the work, completes it, and keeps us updated. Website updates, fixes, and day-to-day IT support are handled without us chasing anyone.\n\nResponse is quick, the work is clean, and they already understand our setup, so we do not start from zero every time. Happy to continue with them and would recommend them for ongoing website and IT support.\n\nAyan Das\n\nCEO, Intracia Technologies",
      rating: 5, reviewDate: "September 2026",
    },
  ];

  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    const docId = deterministicId("googleReview", review.slug);
    console.log(`  [${i + 1}/${reviews.length}] ${review.reviewerName}`);

    const doc = {
      _id: docId, _type: "googleReview",
      reviewerName: review.reviewerName,
      company: review.company || undefined,
      reviewerRole: review.reviewerRole || undefined,
      fullReview: review.fullReview,
      rating: review.rating, reviewDate: review.reviewDate,
      verifiedOnGoogle: true, displayOrder: i + 1, published: true,
    };

    await client.createOrReplace(doc);
    console.log(`    -> Created/updated: ${docId}`);
  }
}

// ─── Client Logos ──────────────────────────────────────────────────────────

async function migrateClientLogos() {
  console.log("\n=== Migrating Client Logos ===");

  const logos = [
    { name: "MeeAutoParts", src: "/client-logos/mee-auto-parts.png", slug: "mee-auto-parts" },
    { name: "SSP group", src: "/client-logos/ssp-group.png", slug: "ssp-group" },
    { name: "American Freight Hub", src: "/client-logos/american-freight-hub.png", slug: "american-freight-hub", tone: "dark" },
    { name: "Ferme Foods", src: "/client-logos/ferme-foods.png", slug: "ferme-foods" },
    { name: "Mee Car Rentals", src: "/client-logos/mee-car-rentals.png", slug: "mee-car-rentals" },
    { name: "DriveX Auto Parts", src: "/client-logos/drivex-auto-parts.png", slug: "drivex-auto-parts" },
    { name: "Intracia Technologies", src: "/client-logos/intracia-technologies-client.png", slug: "intracia-technologies" },
    { name: "Pacific Express Trucking", src: "/client-logos/pacific-express-trucking.png", slug: "pacific-express-trucking", fit: "mark" },
    { name: "Subhash Chandra Jyotish", src: "/client-logos/subhash-chandra-jyotish-mark.png", slug: "subhash-chandra-jyotish", fit: "mark" },
  ];

  for (let i = 0; i < logos.length; i++) {
    const logo = logos[i];
    const docId = deterministicId("clientLogo", logo.slug);
    console.log(`  [${i + 1}/${logos.length}] ${logo.name}`);

    let logoRef = await uploadImage(logo.src, `logo-${logo.slug}.png`);
    if (logoRef) logoRef.alt = `${logo.name} logo`;

    const doc = {
      _id: docId, _type: "clientLogo",
      clientName: logo.name, logo: logoRef || undefined,
      logoBackground: logo.tone === "dark" ? "dark" : "transparent",
      fit: logo.fit === "mark" ? "mark" : "default",
      displayOrder: i + 1, published: true,
    };

    await client.createOrReplace(doc);
    console.log(`    -> Created/updated: ${docId}`);
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log("Rock One Solutions — Sanity CMS Migration");
  console.log(`Project: ${projectId} | Dataset: ${dataset}`);
  console.log("=".repeat(50));

  const unmigrated = [];

  try { await migrateBlogPosts(); }
  catch (err) { console.error("Blog migration failed:", err.message); unmigrated.push("Blog Posts"); }

  try { await migrateWorkProjects(); }
  catch (err) { console.error("Work projects migration failed:", err.message); unmigrated.push("Work Projects"); }

  try { await migrateGoogleReviews(); }
  catch (err) { console.error("Google reviews migration failed:", err.message); unmigrated.push("Google Reviews"); }

  try { await migrateClientLogos(); }
  catch (err) { console.error("Client logos migration failed:", err.message); unmigrated.push("Client Logos"); }

  console.log("\n" + "=".repeat(50));
  if (unmigrated.length > 0) {
    console.log("PARTIALLY COMPLETE. Failed sections:", unmigrated.join(", "));
    console.log("Re-run the script to retry failed sections (idempotent).");
  } else {
    console.log("MIGRATION COMPLETE. All content imported successfully.");
  }
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
