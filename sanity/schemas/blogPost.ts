import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Publish Date (Newest)",
      name: "publishDateDesc",
      by: [{ field: "publishedDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "cardTitle",
      title: "Card Title",
      description: "Optional shorter title for compact cards. The article H1 and SEO title stay unchanged.",
      type: "string",
      validation: (r) => r.max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(400),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Rock One Solutions",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "updatedDate",
      title: "Updated Date",
      description: "Set only for meaningful content updates.",
      type: "date",
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      initialValue: "5 min read",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socialImage",
      title: "Social Image (OG)",
      description: "Separate image for Open Graph / social sharing.",
      type: "image",
    }),
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (r) =>
                      r.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                  },
                ],
              },
            ],
          },
          lists: [{ title: "Bullet", value: "bullet" }],
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          title: "FAQ",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: "question" },
          },
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      description: "Override for the page title tag. Defaults to blog title if empty.",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      description: "Override for meta description. Defaults to excerpt if empty.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      description: "Override canonical URL. Leave empty for default.",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      description: "Lower numbers appear first. Posts with the same order sort by publish date.",
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
