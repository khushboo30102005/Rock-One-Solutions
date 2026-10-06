import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./privacy-policy.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Rock One Solutions",
  description:
    "Privacy policy for Rock One Solutions, covering website enquiries, analytics, communication, and contact form data.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  openGraph: {
    url: "https://rockonesolutions.com/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="privacy-main">
        <section className="privacy-hero" aria-labelledby="privacy-title">
          <span>Privacy Policy</span>
          <h1 id="privacy-title">How Rock One Solutions handles your information.</h1>
          <p>
            This page explains what we collect when you use our website, contact us,
            or submit a project enquiry.
          </p>
        </section>

        <section className="privacy-content">
          <article>
            <h2>Information we collect</h2>
            <p>
              When you submit a form, call, email, or message us, we may collect your
              name, company details, phone number, email address, project requirement,
              and any information you choose to share.
            </p>
          </article>

          <article>
            <h2>How we use it</h2>
            <p>
              We use your information to respond to enquiries, scope projects, provide
              support, improve our services, and communicate about work you have asked
              us to review or deliver.
            </p>
          </article>

          <article>
            <h2>Analytics and tracking</h2>
            <p>
              We use analytics tools such as Google Analytics and Microsoft Clarity to
              understand how visitors use the site. These tools help us improve page
              performance, content clarity, and conversion flow.
            </p>
          </article>

          <article>
            <h2>Sharing and retention</h2>
            <p>
              We do not sell your personal information. We may share limited data with
              trusted service providers only when needed to run the website, process
              enquiries, deliver work, or comply with applicable requirements.
            </p>
          </article>

          <article>
            <h2>Your choices</h2>
            <p>
              You can ask us to review, correct, or delete information you have shared
              with us, subject to records we may need to keep for business, legal, or
              accounting reasons.
            </p>
          </article>

          <article>
            <h2>Contact</h2>
            <p>
              For privacy questions, email{" "}
              <Link href="mailto:Info@rockonesolutions.com">
                Info@rockonesolutions.com
              </Link>
              .
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
