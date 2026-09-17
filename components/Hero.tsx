import { site } from "@/content/site";
import { CertikGsLockup } from "./Logo";
import { StatCounters } from "./StatCounters";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-deep">
      {/* Subtle radial glow behind the headline, like certik.com's hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(120,150,255,0.10) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-site px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <div className="animate-fade-up">
          <CertikGsLockup height={28} />
        </div>

        <div
          className="mt-6 inline-flex items-center gap-2 rounded-pill border border-line-strong bg-white/5 px-4 py-1.5 text-xs font-medium text-fg-muted animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {site.hero.pill}
        </div>

        <p
          className="eyebrow mt-8 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {site.hero.eyebrow}
        </p>

        <h1
          className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {site.hero.headline}
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-fg-muted sm:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {site.hero.subheadline}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a href={site.hero.primaryCta.href} className="btn-primary">
            {site.hero.primaryCta.label}
          </a>
          <a href={site.hero.secondaryCta.href} className="btn-secondary">
            {site.hero.secondaryCta.label}
          </a>
        </div>

        <div className="mt-20">
          <StatCounters />
        </div>
      </div>
    </section>
  );
}
