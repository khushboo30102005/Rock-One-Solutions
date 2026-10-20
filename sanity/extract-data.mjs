#!/usr/bin/env node
/**
 * Extracts local content data into JSON for the migration script.
 * Run this once: node sanity/extract-data.mjs
 * It creates sanity/migration-data.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, join } from "path";

const ROOT = resolve(process.cwd());

function extractBlogPosts() {
  const source = readFileSync(join(ROOT, "app/blog/blog-data.tsx"), "utf-8");

  // Extract the blogPosts array using regex to find it
  const match = source.match(/export\s+const\s+blogPosts[^=]*=\s*(\[[\s\S]*?\n\];)/);
  if (!match) throw new Error("Could not find blogPosts array");

  // Clean the array string for JSON eval
  let arrStr = match[1];

  // Eval as JS (the array is valid JS once extracted)
  const fn = new Function(`return ${arrStr}`);
  return fn();
}

function extractWorkData() {
  const source = readFileSync(join(ROOT, "app/work/work-data.ts"), "utf-8");

  // Extract workProjects
  const wpMatch = source.match(/export\s+const\s+workProjects[^=]*=\s*(\[[\s\S]*?\n\];)/);
  if (!wpMatch) throw new Error("Could not find workProjects array");
  const workProjects = new Function(`return ${wpMatch[1]}`)();

  // Extract websiteLaunches
  const wlMatch = source.match(/export\s+const\s+websiteLaunches[^=]*=\s*(\[[\s\S]*?\n\];)/);
  if (!wlMatch) throw new Error("Could not find websiteLaunches array");
  const websiteLaunches = new Function(`return ${wlMatch[1]}`)();

  // Extract crmProjectScreens
  const csMatch = source.match(/export\s+const\s+crmProjectScreens[^=]*=\s*(\[[\s\S]*?\n\];)/);
  if (!csMatch) throw new Error("Could not find crmProjectScreens array");
  const crmProjectScreens = new Function(`return ${csMatch[1]}`)();

  return { workProjects, websiteLaunches, crmProjectScreens };
}

const blogPosts = extractBlogPosts();
const workData = extractWorkData();

const data = {
  blogPosts,
  ...workData,
};

const outPath = join(ROOT, "sanity/migration-data.json");
writeFileSync(outPath, JSON.stringify(data, null, 2));
console.log(`Extracted ${blogPosts.length} blog posts, ${workData.workProjects.length} work projects, ${workData.websiteLaunches.length} website launches, ${workData.crmProjectScreens.length} CRM screens`);
console.log(`Written to: ${outPath}`);
