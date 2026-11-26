import type { Metadata } from "next";
import Link from "next/link";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import JsonLd from "@/components/JsonLd";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TrackedContactLink from "@/components/TrackedContactLink";
import { faqPageNode, graph, serviceNode, webPageNode } from "@/lib/schema/builders";
import { BUSINESS, SCHEMA_IDS, SOCIAL_PROFILES } from "@/lib/schema/site";
import {
  AUDIENCE_AS_OF,
  creatorAudience,
  creators,
  formatAudience,
  formatAudienceFloor,
  networkAudience,
  platformLabels,
  type Creator,
} from "./creators-data";
import {
  ArrowIcon,
  ArrowUpRightIcon,
  CheckIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  nicheIcons,
  platformIcons,
} from "./icons";
import CardFx from "./CardFx";
import "./creator-partners.css";

const PATH = "/creator-partners/";
const INSTAGRAM_DM = "https://ig.me/m/rockonesolutions";
const INSTAGRAM_PROFILE = SOCIAL_PROFILES.find((p) => p.name === "Instagram")!.url;
const LINKEDIN_PROFILE = SOCIAL_PROFILES.find((p) => p.name === "LinkedIn")!.url;
const GSTIN = "29PAVPS8370D1ZI";

export const metadata: Metadata = {
  title: "Creator Partnerships | Websites for Creators | Rock One Solutions",
  description:
    "Rock One Solutions builds personalised, ad-ready websites for Instagram and YouTube creators with no development or management fee. You own your domain.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Creator Partnerships | Rock One Solutions",
    description:
      "Personalised, ad-ready websites for creators. No development fee, and the domain is yours.",
    url: PATH,
    type: "website",
  },
};

const heroPoints = ["No development fee", "You own your domain", "Ad-ready", "Personalised to your brand"];

const niches = [
  {
    key: "gaming",
    name: "Gaming",
    line: "Gameplay, guides, setups and the games you are playing right now, in one place.",
  },
  {
    key: "comedy",
    name: "Memes & comedy",
    line: "Your best bits, series and running jokes, collected where fans can binge them.",
  },
  {
    key: "cooking",
    name: "Cooking & recipes",
    line: "Recipes people can search and save, each linked to the video it came from.",
  },
  {
    key: "pets",
    name: "Pets & animals",
    line: "Stories, care tips and the moments your followers love, organised by pet.",
  },
  {
    key: "ai",
    name: "AI & virtual influencers",
    line: "A home base for your character: the story, new releases and collaborations.",
  },
  {
    key: "movies",
    name: "Movies & entertainment",
    line: "Reviews, lists and reactions that people find on Google, not only in your feed.",
  },
];

const inclusions = [
  {
    title: "Personalised design",
    body: "Shaped around your name, colours and content. Not a template with your logo dropped in.",
  },
  {
    title: "Mobile-friendly and fast",
    body: "Your audience arrives from a phone, so the site is built for the phone first.",
  },
  {
    title: "Ad-ready",
    body: "Includes the pages AdSense looks for: About, Contact, Privacy Policy and Disclaimer.",
  },
  {
    title: "Google search setup",
    body: "Page titles, descriptions and a sitemap, so search can find and list your pages.",
  },
  {
    title: "Easy to update",
    body: "Add new posts and videos as you make them, without waiting on a developer.",
  },
  {
    title: "Links back to your socials",
    body: "Every page sends visitors back to your Instagram, YouTube and the rest.",
  },
];

const steps = [
  { name: "Align", body: "A quick DM or call so we understand your page, your audience and what you post." },
  {
    name: "Shape",
    body: "We plan the pages, the domain and where ads will sit. You buy the domain directly from the provider.",
  },
  { name: "Build", body: "We build the website and share a preview, so you can give feedback before launch." },
  { name: "Launch", body: "The site goes live with search setup done, and we help you apply for AdSense." },
  { name: "Grow", body: "Share the link with your audience. We stay on for ongoing support." },
];

const terms = [
  { label: "Website development", value: "₹0", note: "No development charges." },
  { label: "Website management", value: "₹0", note: "No management or maintenance charges." },
  {
    label: "Domain registration",
    value: "≈ ₹1,000",
    note: "Paid by you, directly to the domain provider. It never goes through our account.",
  },
  { label: "Domain ownership", value: "Yours", note: "Registered in your name from day one." },
  {
    label: "AdSense approval",
    value: "Google decides",
    note: "We build the site to meet Google's requirements and help you apply.",
  },
];

const faqs = [
  {
    q: "Do I need a big following?",
    a: "No. What matters is an audience that keeps coming back to you. We will look at your page together and tell you honestly whether a website makes sense right now.",
  },
  {
    q: "Do I have to write the content?",
    a: "No long writing needed. We plan the pages with you and shape them around what you already make: your videos, posts and ideas. You approve everything before it goes live.",
  },
  {
    q: "How much will I earn from ads?",
    a: "We cannot promise a figure, and anyone who does is guessing. Ad income depends on your traffic, your niche, where your audience is, and Google's own approval. We build the site to meet AdSense requirements and help you apply.",
  },
  {
    q: "Is it really free?",
    a: "There is no development fee and no website management fee. The only cost is the domain, about ₹1,000, which you pay directly to the domain provider. It never goes through our account, and the domain is yours.",
  },
  {
    q: "How do I start?",
    a: "Send us a DM on Instagram at @rockonesolutions, or fill in the Start a Project form. We will have a quick chat about your page and take it from there.",
  },
];

const schema = graph(
  webPageNode({
    path: PATH,
    name: metadata.title as string,
    description: metadata.description ?? undefined,
    mainEntityId: SCHEMA_IDS.service(PATH),
  }),
  serviceNode({
    path: PATH,
    name: "Creator Partnerships",
    description: metadata.description as string,
    serviceType: "Creator website development",
  }),
  faqPageNode(
    PATH,
    faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
  )
);

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

/** Creators with a Rock One website first, then by audience size. */
const orderedCreators = [...creators].sort(
  (a, b) =>
    Number(Boolean(b.website)) - Number(Boolean(a.website)) ||
    creatorAudience(b) - creatorAudience(a)
);

/** The three largest audiences, shown around the hero phone. */
const featuredCreators = [...creators]
  .sort((a, b) => creatorAudience(b) - creatorAudience(a))
  .slice(0, 3);

function CreatorCard({ creator, index }: { creator: Creator; index: number }) {
  const total = creatorAudience(creator);
  const channelsWithNumbers = creator.channels.filter((channel) => channel.audience);
  const linkedChannels = creator.channels.filter((channel) => channel.url);

  return (
    <div className="cp-creator-cell" data-reveal="up">
      <article className="cp-creator cp-fx" data-fx-card style={{ ["--cp-tone" as string]: index }}>
        <header className="cp-creator-head">
          <span className="cp-creator-mark" aria-hidden="true">
            {initials(creator.name)}
          </span>
          <div>
            <h3>{creator.name}</h3>
            <p>
              {creator.realName ? `${creator.realName} · ` : ""}
              {creator.niche}
            </p>
          </div>
          {creator.website ? <span className="cp-creator-flag">Website by Rock One</span> : null}
        </header>

        {total > 0 ? (
          <div className="cp-creator-reach">
            <strong>{channelsWithNumbers.length > 1 ? formatAudienceFloor(total) : formatAudience(total)}</strong>
            <span>{channelsWithNumbers.length > 1 ? "combined audience" : "audience"}</span>
          </div>
        ) : null}

        {channelsWithNumbers.length > 0 ? (
          <ul className="cp-creator-channels" aria-label={`${creator.name} audience by platform`}>
            {channelsWithNumbers.map((channel) => {
              const Icon = platformIcons[channel.platform];
              return (
                <li key={channel.platform}>
                  <span className="cp-channel-name">
                    <Icon />
                    {platformLabels[channel.platform]}
                  </span>
                  <b>{formatAudience(channel.audience!)}</b>
                </li>
              );
            })}
          </ul>
        ) : creator.website ? (
          <a
            className="cp-creator-preview"
            href={creator.website.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${creator.website.label}`}
          >
            <span className="cp-preview-bar">
              <i />
              <i />
              <i />
              <b>{creator.website.label}</b>
            </span>
            <span className="cp-preview-body">
              <span className="cp-preview-title">{creator.name}</span>
              <span className="cp-preview-lines">
                <i />
                <i />
              </span>
              <span className="cp-preview-tiles">
                <i />
                <i />
                <i />
              </span>
            </span>
            <span className="cp-preview-live">Live site</span>
          </a>
        ) : null}

        <footer className="cp-creator-links">
          {creator.website ? (
            <a className="cp-site-link" href={creator.website.url} target="_blank" rel="noopener noreferrer">
              <GlobeIcon />
              <span>{creator.website.label}</span>
              <ArrowUpRightIcon className="cp-site-link-arrow" />
            </a>
          ) : null}
          {linkedChannels.length > 0 ? (
            <div className="cp-social-row">
              {linkedChannels.map((channel) => {
                const Icon = platformIcons[channel.platform];
                return (
                  <a
                    key={channel.platform}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${creator.name} on ${platformLabels[channel.platform]}`}
                    title={channel.handle}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          ) : null}
        </footer>
      </article>
    </div>
  );
}

export default function CreatorPartnersPage() {
  const reach = networkAudience();
  const creatorsWithSites = creators.filter((creator) => creator.website).length;

  return (
    <>
      <JsonLd data={schema} />
      <ScrollAnimator />
      <SiteHeader tone="dark" />

      <main className="cp-main">
        {/* 1 — Hero */}
        <section className="cp-hero" aria-labelledby="cp-hero-title">
          <HeroBackgroundScene />
          <span className="cp-hero-glow" aria-hidden="true" />

          <div className="cp-hero-grid">
            <div className="cp-hero-copy">
              <span className="cp-hero-eyebrow">
                <i aria-hidden="true" />
                Creator Partnerships
              </span>
              <h1 id="cp-hero-title">
                Your audience deserves a home <em>beyond Instagram.</em>
              </h1>
              <p>
                Personalised websites for creators. No development fee, and you can earn
                through ads.
              </p>
              <div className="cp-hero-actions">
                <a className="cp-btn cp-btn-light" href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                  Message us on Instagram
                </a>
                <Link className="cp-btn cp-btn-outline" href="/contact">
                  Start a Project <ArrowIcon />
                </Link>
              </div>
              <div className="cp-hero-proof">
                <span className="cp-avatar-stack" aria-hidden="true">
                  {orderedCreators.map((creator) => (
                    <i key={creator.name}>{initials(creator.name)}</i>
                  ))}
                </span>
                <span>
                  <b>{creators.length} gaming creators</b> already with us
                </span>
              </div>
            </div>

            <div className="cp-hero-visual" aria-hidden="true">
              <span className="cp-orbit cp-orbit-1" />
              <span className="cp-orbit cp-orbit-2" />

              <div className="cp-phone">
                <div className="cp-phone-screen">
                  <div className="cp-phone-top">
                    <b>yourname.com</b>
                    <span />
                  </div>
                  <div className="cp-phone-cover">
                    <span className="cp-phone-play" />
                    <small>New video</small>
                    <strong>Your latest upload, front and centre.</strong>
                  </div>
                  <div className="cp-phone-ad">
                    <span>Ad</span>
                    <i />
                  </div>
                  <div className="cp-phone-tiles">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              {featuredCreators.map((creator, index) => (
                <div className={`cp-chip cp-chip-${index + 1}`} key={creator.name}>
                  <i>{initials(creator.name)}</i>
                  <span>
                    <b>{creator.name}</b>
                    <small>{formatAudienceFloor(creatorAudience(creator))} audience</small>
                  </span>
                </div>
              ))}

              <div className="cp-chip cp-chip-reach">
                <strong>{formatAudienceFloor(networkAudience())}</strong>
                <small>combined audience</small>
              </div>
            </div>
          </div>

          <ul className="cp-hero-points">
            {heroPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Network figures */}
        <section className="cp-figures" aria-label="Creator network at a glance">
          <div className="cp-figures-inner">
            <div>
              <strong>{formatAudienceFloor(reach)}</strong>
              <span>combined audience across our creators</span>
            </div>
            <div>
              <strong>{creators.length}</strong>
              <span>creators in the network</span>
            </div>
            <div>
              <strong>{creatorsWithSites}</strong>
              <span>creator websites live</span>
            </div>
            <div>
              <strong>₹0</strong>
              <span>development fee</span>
            </div>
          </div>
        </section>

        {/* 2 — Creators we work with */}
        <section className="cp-section cp-creators" aria-labelledby="cp-creators-title">
          <div className="cp-section-head">
            <div>
              <span className="cp-label">(Creators we work with)</span>
              <h2 id="cp-creators-title">Real creators, already with us.</h2>
            </div>
            <p>
              Gaming creators across Instagram, Facebook and YouTube. Visit the sites we have
              built, or follow the creators on their channels.
            </p>
          </div>

          <CardFx className="cp-creator-grid">
            {orderedCreators.map((creator, index) => (
              <CreatorCard creator={creator} index={index} key={creator.name} />
            ))}

            <div className="cp-creator-cell" data-reveal="up">
              <div className="cp-invite cp-fx" data-fx-card>
                <span className="cp-invite-plus" aria-hidden="true">+</span>
                <span className="cp-invite-kicker">Your channel could be next</span>
                <p>
                  Making content on Instagram or YouTube? Tell us about your page and we will
                  show you what your website could look like.
                </p>
                <a className="cp-btn cp-btn-dark" href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                  Message us on Instagram
                </a>
              </div>
            </div>
          </CardFx>

          <p className="cp-footnote">Audience figures as of {AUDIENCE_AS_OF}.</p>
        </section>

        {/* 3 — Who we build for */}
        <section className="cp-section cp-niches" aria-labelledby="cp-niches-title">
          <div className="cp-section-head">
            <div>
              <span className="cp-label">(Who we build for)</span>
              <h2 id="cp-niches-title">Whatever you post, it can live on your own site.</h2>
            </div>
          </div>

          <ol className="cp-niche-list">
            {niches.map((niche, index) => (
              <li key={niche.key} data-reveal="up">
                <span className="cp-niche-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="cp-niche-icon">{nicheIcons[niche.key]}</span>
                <h3>{niche.name}</h3>
                <p>{niche.line}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 4 — What you get */}
        <section className="cp-section cp-included" aria-labelledby="cp-included-title">
          <div className="cp-section-head is-dark">
            <div>
              <span className="cp-label">(What you get)</span>
              <h2 id="cp-included-title">Everything a creator site needs to start earning.</h2>
            </div>
          </div>

          <div className="cp-included-grid">
            {inclusions.map((item) => (
              <article key={item.title} data-reveal="up">
                <span className="cp-included-tick">
                  <CheckIcon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5 — How it works */}
        <section className="cp-section cp-steps" aria-labelledby="cp-steps-title">
          <div className="cp-section-head">
            <div>
              <span className="cp-label">(How it works)</span>
              <h2 id="cp-steps-title">From first message to live site, in five steps.</h2>
            </div>
          </div>

          <ol className="cp-step-track">
            {steps.map((step, index) => (
              <li key={step.name} data-reveal="up">
                <span className="cp-step-dot">{index + 1}</span>
                <h3>{step.name}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 6 — How we do business */}
        <section className="cp-section cp-terms" aria-labelledby="cp-terms-title">
          <div className="cp-terms-intro">
            <span className="cp-label">(How we do business)</span>
            <h2 id="cp-terms-title">Clear money. Clear ownership.</h2>
            <p>
              Here is every cost involved, and who it goes to. Nothing is added later.
            </p>
            <div className="cp-company-line">
              <strong>{BUSINESS.name}</strong>
              <span>Registered agency in HSR Layout, Bengaluru</span>
              <span>GSTIN {GSTIN}</span>
            </div>
          </div>

          <dl className="cp-ledger" data-reveal="up">
            {terms.map((term) => (
              <div key={term.label}>
                <dt>{term.label}</dt>
                <dd>
                  <strong>{term.value}</strong>
                  <span>{term.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 7 — For brands */}
        <section className="cp-brands" aria-labelledby="cp-brands-title">
          <div className="cp-brands-inner" data-reveal="up">
            <div>
              <span className="cp-label">(For brands)</span>
              <h2 id="cp-brands-title">Looking to work with creators?</h2>
              <p>
                We connect brands with creators in our network for sponsored content and
                website placements, with a combined audience of {formatAudienceFloor(reach)}.
              </p>
            </div>
            <Link className="cp-btn cp-btn-light" href="/contact">
              Discuss a brand partnership <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* 8 — FAQ */}
        <section className="cp-section cp-faq" aria-labelledby="cp-faq-title">
          <div className="about-faq-head">
            <span className="cp-label">(FAQ)</span>
            <h2 id="cp-faq-title">The questions creators ask us first.</h2>
            <p>Something else on your mind? Send us a DM and ask.</p>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq, index) => (
              <details className="about-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="about-faq-mark" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 9 — Contact */}
        <section className="cp-contact" aria-labelledby="cp-contact-title">
          <div className="cp-contact-inner">
            <div className="cp-contact-copy">
              <span className="cp-label">(Let&rsquo;s talk)</span>
              <h2 id="cp-contact-title">Ready for a site of your own?</h2>
              <p>Pick whichever is easiest. A DM on Instagram is usually the quickest.</p>
            </div>
            <div className="cp-contact-grid">
              <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
                <span>Instagram</span>
                <strong>@rockonesolutions</strong>
              </a>
              <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                <span>LinkedIn</span>
                <strong>Rock One Solutions</strong>
              </a>
              <TrackedContactLink href={`mailto:${BUSINESS.email}`}>
                <MailIcon />
                <span>Email</span>
                <strong>{BUSINESS.email}</strong>
              </TrackedContactLink>
              <TrackedContactLink href="tel:+918197731627">
                <PhoneIcon />
                <span>Phone</span>
                <strong>{BUSINESS.telephone}</strong>
              </TrackedContactLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
