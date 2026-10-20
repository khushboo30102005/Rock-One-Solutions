import { defineType, defineField } from "sanity";

export default defineType({
  name: "googleReview",
  title: "Google Review",
  type: "document",
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Date (Newest)",
      name: "dateDesc",
      by: [{ field: "reviewDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "reviewerName",
      subtitle: "company",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed reviewer",
        subtitle: subtitle ? `${subtitle}` : undefined,
      };
    },
  },
  fields: [
    defineField({
      name: "reviewerName",
      title: "Reviewer Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "reviewerRole",
      title: "Reviewer Role",
      type: "string",
    }),
    defineField({
      name: "fullReview",
      title: "Full Review",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortReview",
      title: "Short Review",
      description: "A shorter version for tight layouts. Falls back to full review if empty.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (r) => r.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: "reviewDate",
      title: "Review Date",
      description: "Display date like 'September 2026'.",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "googleReviewUrl",
      title: "Google Review URL",
      type: "url",
    }),
    defineField({
      name: "verifiedOnGoogle",
      title: "Verified on Google",
      type: "boolean",
      initialValue: true,
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
