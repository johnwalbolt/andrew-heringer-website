"use client";

import { useState } from "react";
import { SOCIAL, WEB3FORMS_ACCESS_KEY } from "./site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    if (!String(data.get("subject") || "").trim()) {
      data.set("subject", "New message from andrewheringer.com");
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  // On success, replace the whole form with a clear confirmation so it can't be missed.
  if (status === "success") {
    return (
      <div className="contact__success" role="status" aria-live="polite">
        <p className="contact__success-title">Message sent</p>
        <p className="contact__success-text">
          Thanks for reaching out — Andrew will get back to you soon.
        </p>
        <button type="button" className="btn" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      {/* Honeypot spam trap — hidden from people, tempting to bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div className="field">
        <label htmlFor="email">Email (required)</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="What's this about?" />
      </div>
      <div className="field">
        <label htmlFor="message">Message (required)</label>
        <textarea id="message" name="message" required placeholder="Say hello…" />
      </div>
      <button
        type="submit"
        className="btn contact__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>

      {status === "error" && (
        <p className="form-note">
          Something went wrong sending your message. Please try again, or reach out on{" "}
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Instagram
          </a>
          .
        </p>
      )}
    </form>
  );
}
