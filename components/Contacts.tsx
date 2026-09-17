"use client";

import { useState } from "react";
import { bookCallUrl, contacts } from "@/config/contacts";
import { site } from "@/content/site";

export function Contacts() {
  const copy = site.contacts;
  const [copied, setCopied] = useState<string | null>(null);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — ignore.
    }
  };

  return (
    <section id={copy.id} className="bg-ink-deep py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-4">{copy.title}</h2>
          <p className="mt-5 text-fg-muted">{copy.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {contacts.map((person) => (
            <div key={person.name} className="card flex flex-col p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.photo}
                alt={`Photo of ${person.name}`}
                className="h-20 w-20 rounded-full border border-line-strong object-cover"
              />
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {person.name}
              </h3>
              <p className="text-sm text-fg-muted">
                {person.title}, {person.company}
              </p>

              <div className="mt-5 flex flex-1 flex-col gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => copyEmail(person.email)}
                  className="inline-flex w-fit items-center gap-2 text-fg-muted transition-colors duration-150 hover:text-fg"
                  title="Copy email to clipboard"
                >
                  <span aria-hidden>✉</span> {person.email}
                  <span className="text-xs text-accent">
                    {copied === person.email ? copy.copiedLabel : ""}
                  </span>
                </button>
                {person.telegram && (
                  <p className="text-fg-muted">
                    <span aria-hidden>◈</span> Telegram / WhatsApp:{" "}
                    {person.telegram}
                  </p>
                )}
                {person.linkedin && (
                  <p className="text-fg-muted">
                    <span aria-hidden>in</span> LinkedIn: {person.linkedin}
                  </p>
                )}
              </div>

              <a
                href={bookCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 w-full"
              >
                {copy.bookCallLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
