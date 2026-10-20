import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "clientName",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "associatedProject",
      title: "Associated Project",
      type: "reference",
      to: [{ type: "workProject" }],
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroContent",
      title: "Hero Content",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "liveDemoUrl",
      title: "Live Demo URL",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 100,
    }),
    defineField({
      name: "published",
      title: "Published / Visible",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
