"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  contactChannels,
  defaultReferralPartner,
  licensingStatuses,
  servicesOfInterest,
  timelines,
} from "@/config/form";
import { site } from "@/content/site";

type FieldErrors = Record<string, string>;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function IntakeForm() {
  const copy = site.form;

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [contactChannel, setContactChannel] = useState<string>("");
  const [contactHandle, setContactHandle] = useState("");
  const [country, setCountry] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [licensingStatus, setLicensingStatus] = useState<string>("");
  const [jurisdictions, setJurisdictions] = useState("");
  const [techStack, setTechStack] = useState("");
  const [timeline, setTimeline] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [referralPartner, setReferralPartner] = useState(defaultReferralPartner);
  const [utm, setUtm] = useState<Record<string, string>>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  // Hidden fields: ?ref= override + UTM params, read client-side on mount.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setReferralPartner(ref);
    const collected: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) collected[key] = value;
    }
    if (Object.keys(collected).length) setUtm(collected);
  }, []);

  const showHandleField = useMemo(
    () => contactChannel !== "" && contactChannel !== "Email",
    [contactChannel]
  );

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          company,
          role,
          email,
          contactChannel,
          contactHandle,
          country,
          services,
          licensingStatus,
          jurisdictions,
          techStack,
          timeline: timeline || undefined,
          additionalInfo,
          consent,
          referralPartner,
          utm: Object.keys(utm).length ? utm : undefined,
          submittedAt: new Date().toISOString(),
          website: honeypot,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }

      // Keep data in the form on error.
      setStatus("idle");
      if (json.fieldErrors) setErrors(json.fieldErrors);
      setFormError(json.error || copy.errorGeneric);
    } catch {
      setStatus("idle");
      setFormError(copy.errorGeneric);
    }
  }

  const err = (key: string) =>
    errors[key] ? (
      <p className="mt-1 text-xs text-red-400">{errors[key]}</p>
    ) : null;

  if (status === "success") {
    return (
      <section id={copy.id} className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="card border-accent/40 p-10 text-center">
            <div
              aria-hidden
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-ink-deep"
            >
              ✓
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-fg">
              {copy.successTitle}
            </h2>
            <p className="mt-3 text-fg-muted">{copy.successBody}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={copy.id} className="bg-ink py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-4">{copy.title}</h2>
          <p className="mt-5 text-fg-muted">{copy.subtitle}</p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="card mt-12 grid gap-6 p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="field-label">
                Full name <span className="text-accent">*</span>
              </label>
              <input
                id="fullName"
                className="field-input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                autoComplete="name"
              />
              {err("fullName")}
            </div>
            <div>
              <label htmlFor="company" className="field-label">
                Company / project <span className="text-accent">*</span>
              </label>
              <input
                id="company"
                className="field-input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                autoComplete="organization"
              />
              {err("company")}
            </div>
            <div>
              <label htmlFor="role" className="field-label">
                Role
              </label>
              <input
                id="role"
                className="field-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                autoComplete="organization-title"
              />
            </div>
            <div>
              <label htmlFor="email" className="field-label">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="field-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              {err("email")}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contactChannel" className="field-label">
                Preferred contact channel <span className="text-accent">*</span>
              </label>
              <select
                id="contactChannel"
                className="field-input"
                value={contactChannel}
                onChange={(e) => setContactChannel(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select…
                </option>
                {contactChannels.map((channel) => (
                  <option key={channel} value={channel}>
                    {channel}
                  </option>
                ))}
              </select>
              {err("contactChannel")}
            </div>
            {showHandleField && (
              <div>
                <label htmlFor="contactHandle" className="field-label">
                  {contactChannel === "Phone"
                    ? "Phone number"
                    : `${contactChannel} handle`}
                </label>
                <input
                  id="contactHandle"
                  className="field-input"
                  value={contactHandle}
                  onChange={(e) => setContactHandle(e.target.value)}
                  placeholder={
                    contactChannel === "Telegram" ? "@handle" : undefined
                  }
                />
              </div>
            )}
            <div className={showHandleField ? "sm:col-span-2" : ""}>
              <label htmlFor="country" className="field-label">
                Country where the company is based{" "}
                <span className="text-accent">*</span>
              </label>
              <input
                id="country"
                className="field-input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                autoComplete="country-name"
              />
              {err("country")}
            </div>
          </div>

          <fieldset>
            <legend className="field-label">
              Service(s) of interest <span className="text-accent">*</span>
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {servicesOfInterest.map((service) => {
                const selected = services.includes(service);
                return (
                  <label
                    key={service}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                      selected
                        ? "border-accent/60 bg-accent-soft text-fg"
                        : "border-line-strong text-fg-muted hover:border-fg-faint"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="accent-[var(--color-accent)]"
                      checked={selected}
                      onChange={() => toggleService(service)}
                    />
                    {service}
                  </label>
                );
              })}
            </div>
            {err("services")}
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="licensingStatus" className="field-label">
                Licensing status <span className="text-accent">*</span>
              </label>
              <select
                id="licensingStatus"
                className="field-input"
                value={licensingStatus}
                onChange={(e) => setLicensingStatus(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select…
                </option>
                {licensingStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {err("licensingStatus")}
            </div>
            <div>
              <label htmlFor="jurisdictions" className="field-label">
                Jurisdiction(s) of the license
                <span className="ml-1 text-xs font-normal text-fg-faint">
                  existing or targeted
                </span>
              </label>
              <input
                id="jurisdictions"
                className="field-input"
                value={jurisdictions}
                onChange={(e) => setJurisdictions(e.target.value)}
                placeholder="e.g. UAE (VARA), EU (MiCA)"
              />
            </div>
            <div>
              <label htmlFor="techStack" className="field-label">
                Blockchain(s) / tech stack
              </label>
              <input
                id="techStack"
                className="field-input"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="e.g. Ethereum, Solana, Rust"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="field-label">
                Expected timeline
              </label>
              <select
                id="timeline"
                className="field-input"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
              >
                <option value="">Select…</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="field-label">
              Additional information
            </label>
            <textarea
              id="additionalInfo"
              rows={4}
              className="field-input resize-y"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>

          {/* Honeypot — visually hidden, never filled by humans */}
          <div className="absolute -left-[9999px] top-auto" aria-hidden>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm text-fg-muted">
            <input
              type="checkbox"
              className="mt-0.5 accent-[var(--color-accent)]"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <span>
              {copy.consentLabel} <span className="text-accent">*</span>
            </span>
          </label>
          {err("consent")}

          {formError && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "submitting" ? copy.submittingLabel : copy.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
