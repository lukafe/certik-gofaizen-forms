import { testimonials } from "@/config/testimonials";
import { site } from "@/content/site";
import { Logo } from "./Logo";

/**
 * Auto-scrolling testimonial cards, in the style of certik.com's
 * "Trusted by Thousands of Web3 Projects" carousel. Reuses the marquee
 * keyframes (slower), pauses on hover, static under reduced motion.
 */
export function Testimonials() {
  const track = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-ink py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{site.testimonials.eyebrow}</p>
          <h2 className="section-title mt-4">{site.testimonials.title}</h2>
        </div>
      </div>

      <div className="marquee-mask mt-14 overflow-hidden">
        <div
          className="marquee-track flex w-max gap-6 pr-6"
          style={{ animation: "marquee 80s linear infinite" }}
        >
          {track.map((t, i) => (
            <figure
              key={`${t.company}-${i}`}
              aria-hidden={i >= testimonials.length || undefined}
              className="card flex w-[320px] shrink-0 flex-col p-7 sm:w-[380px]"
            >
              {t.logo ? (
                <Logo src={t.logo} alt={t.company} height={20} />
              ) : (
                <p className="text-sm font-semibold text-fg">{t.company}</p>
              )}
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-fg-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-fg">{t.name}</p>
                <p className="text-xs text-fg-muted">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
