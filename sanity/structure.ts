import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .schemaType("blogPost")
        .child(S.documentTypeList("blogPost").title("Blog Posts")),
      S.listItem()
        .title("Work Projects")
        .schemaType("workProject")
        .child(S.documentTypeList("workProject").title("Work Projects")),
      S.listItem()
        .title("Case Studies")
        .schemaType("caseStudy")
        .child(S.documentTypeList("caseStudy").title("Case Studies")),
      S.listItem()
        .title("Google Reviews")
        .schemaType("googleReview")
        .child(S.documentTypeList("googleReview").title("Google Reviews")),
      S.listItem()
        .title("Client Logos")
        .schemaType("clientLogo")
        .child(S.documentTypeList("clientLogo").title("Client Logos")),
    ]);
