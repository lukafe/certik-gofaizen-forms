"use client";

import { useEffect, useRef, useState } from "react";
import { contacts, type Contact } from "@/config/contacts";
import { site } from "@/content/site";

/**
 * Photo with placeholder fallback. The onError handler alone isn't
 * enough: for a missing file the error event fires before React
 * hydrates, so we also verify naturalWidth after mount.
 */
function ContactPhoto({ person }: { person: Contact }) {
  const [src, setSrc] = useState(person.photo);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setSrc(person.fallbackPhoto);
    }
  }, [person.fallbackPhoto]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={`Photo of ${person.name}`}
      onError={() => setSrc(person.fallbackPhoto)}
      className="h-20 w-20 rounded-full border border-line-strong object-cover"
    />
  );
}

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
              <ContactPhoto person={person} />
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
                  <a
                    href={`https://t.me/${person.telegram.replace(/^@/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    <span aria-hidden>◈</span> Telegram: {person.telegram}
                  </a>
                )}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    <span aria-hidden>in</span> LinkedIn ↗
                  </a>
                )}
              </div>

              <a
                href={person.bookCall}
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
