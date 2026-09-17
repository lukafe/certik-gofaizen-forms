import { site } from "@/content/site";
import { InteractiveGrid } from "./InteractiveGrid";

/** "Talk to an expert"-style CTA band, pointing at the intake form. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-deep">
      <InteractiveGrid />
      <div className="relative mx-auto flex max-w-site flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
        <h2 className="section-title">{site.ctaBand.title}</h2>
        <p className="max-w-xl text-fg-muted">{site.ctaBand.subtitle}</p>
        <a href={site.ctaBand.cta.href} className="btn-primary">
          {site.ctaBand.cta.label}
        </a>
      </div>
    </section>
  );
}
