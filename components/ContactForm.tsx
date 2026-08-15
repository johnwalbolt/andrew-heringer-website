"use client";

import { useState } from "react";
import { SOCIAL, CONTACT_EMAIL } from "./site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Website inquiry");
    const message = String(data.get("message") || "");
    // Opens the visitor's mail client addressed to Andrew.
    const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn contact__submit">
        Submit
      </button>
      {sent && (
        <p className="form-note">
          Thanks — your message is ready in your email app. You can also reach out on{" "}
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
            Instagram
          </a>
          .
        </p>
      )}
    </form>
  );
}
