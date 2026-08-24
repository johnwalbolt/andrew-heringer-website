"use client";

import { useState } from "react";
import { SOCIAL, WEB3FORMS_ACCESS_KEY } from "./site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
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
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

      {status === "success" && (
        <p className="form-note">
          Thanks — your message has been sent. Andrew will get back to you soon.
        </p>
      )}
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
