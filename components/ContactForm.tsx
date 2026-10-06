"use client";

import { useState, type FormEvent } from "react";
import { serviceCategories } from "@/app/services/services-data";
import { trackLead } from "@/lib/analytics";
import { industryNames } from "./industry-names";

/**
 * Shared lead form. Used compact on the homepage and full on /contact.
 *
 * Submits to Web3Forms, which needs no backend — set NEXT_PUBLIC_WEB3FORMS_KEY
 * in .env.local and in the Vercel project settings. Without the key the form
 * renders disabled rather than silently swallowing leads.
 */

const ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4dd30a91-5d11-4450-b0b7-4e7bba4778bb";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  variant = "compact"
}: {
  variant?: "compact" | "full";
}) {
  const accessKey = WEB3FORMS_ACCESS_KEY;
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessKey || status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", accessKey);
    data.append("subject", "New enquiry from rockonesolutions.com");
    data.append("from_name", "Rock One Solutions Website");

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: data
      });
      const result = await response.json();

      if (response.ok && result.success) {
        trackLead();
        setStatus("success");
        setMessage("Thanks — we have your details and will reply within one working day.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          typeof result.message === "string"
            ? result.message
            : "Something went wrong. Please email Info@rockonesolutions.com instead."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Please email Info@rockonesolutions.com instead."
      );
    }
  }

  const disabled = !accessKey || status === "submitting";

  return (
    <form
      className={`contact-form${variant === "full" ? " is-full" : ""}`}
      onSubmit={handleSubmit}
      noValidate={false}
    >
      {/* Honeypot — bots fill this, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        className="contact-form-botcheck"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="contact-form-row">
        <input
          aria-label="First name"
          name="First name"
          placeholder="First name"
          autoComplete="given-name"
          required
        />
        <input
          aria-label="Last name"
          name="Last name"
          placeholder="Last name"
          autoComplete="family-name"
          required
        />
      </div>

      <input
        aria-label="Email"
        name="Email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input
        aria-label="Phone number"
        name="Phone"
        type="tel"
        placeholder="Phone number"
        autoComplete="tel"
        required
      />

      <select aria-label="Industry" name="Industry" defaultValue="" required>
        <option value="" disabled>
          Select industry
        </option>
        {industryNames.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
        <option value="Other">Other</option>
      </select>

      <select aria-label="Service needed" name="Service" defaultValue="" required>
        <option value="" disabled>
          Select service
        </option>
        {serviceCategories.map((category) => (
          <optgroup label={category.name} key={category.slug}>
            {category.services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </optgroup>
        ))}
        <option value="Not sure yet">Not sure yet — help me choose</option>
      </select>

      {variant === "full" ? (
        <textarea
          aria-label="Project details"
          name="Message"
          placeholder="Tell us about the project — goal, timeline, and budget range if you have one."
          rows={5}
        />
      ) : null}

      <button type="submit" disabled={disabled}>
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      <p
        className={`contact-form-status is-${accessKey ? status : "error"}`}
        role="status"
        aria-live="polite"
      >
        {!accessKey
          ? "Form delivery is not configured yet. Please email Info@rockonesolutions.com."
          : message}
      </p>
    </form>
  );
}
