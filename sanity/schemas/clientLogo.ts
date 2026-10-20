import { defineType, defineField } from "sanity";

export default defineType({
  name: "clientLogo",
  title: "Client Logo",
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
      title: "clientName",
      media: "logo",
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
      name: "logo",
      title: "Logo",
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
      validation: (r) => r.required(),
    }),
    defineField({
      name: "clientWebsiteUrl",
      title: "Client Website URL",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https"] }),
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
      name: "logoBackground",
      title: "Logo Background Preference",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Dark", value: "dark" },
          { title: "Transparent", value: "transparent" },
        ],
      },
      initialValue: "transparent",
    }),
    defineField({
      name: "fit",
      title: "Fit Mode",
      description: "'mark' for square/icon logos that need smaller sizing.",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Mark (smaller)", value: "mark" },
        ],
      },
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
