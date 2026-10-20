import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "workProject",
  title: "Work Project",
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
      title: "projectTitle",
      subtitle: "clientName",
      media: "coverImage",
    },
  },
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "projectTitle", maxLength: 120 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "projectCategory",
      title: "Project Category",
      type: "string",
      options: {
        list: [
          { title: "CRM Development", value: "crm" },
          { title: "Website Development", value: "website" },
          { title: "Software Development", value: "software" },
          { title: "Remote Team", value: "remote-team" },
        ],
      },
    }),
    defineField({
      name: "servicesDelivered",
      title: "Services Delivered",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "clientLogo",
      title: "Client Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "imageMode",
      title: "Image Mode",
      type: "string",
      options: {
        list: [
          { title: "Screenshot", value: "screenshot" },
          { title: "Brand", value: "brand" },
        ],
      },
      initialValue: "screenshot",
    }),
    defineField({
      name: "screenshotGallery",
      title: "Screenshot Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "width", title: "Width", type: "number" }),
            defineField({ name: "height", title: "Height", type: "number" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "projectHref",
      title: "Internal Project URL",
      description: "Path like /work/auto-parts-crm",
      type: "string",
    }),
    defineField({
      name: "caseStudyHref",
      title: "Case Study URL",
      description: "Path like /case-studies/auto-parts-crm",
      type: "string",
    }),
    defineField({
      name: "liveHref",
      title: "Live Website / Demo URL",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      initialValue: "View project",
    }),
    defineField({
      name: "external",
      title: "External Link",
      description: "Opens link in a new tab",
      type: "boolean",
      initialValue: false,
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
