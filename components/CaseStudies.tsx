import { caseStudies } from "@/config/case-studies";
import { Logo } from "./Logo";

/**
 * Case-study card carousel, as on certik.com's homepage: short blurb on
 * top, company logo at the bottom of each card. Auto-scrolls with the
 * shared marquee keyframes (slower), pauses on hover, static under
 * reduced motion.
 */
export function CaseStudies() {
  const track = [...caseStudies, ...caseStudies];
  return (
    <div className="marquee-mask mt-12 overflow-hidden">
      <div
        className="marquee-track flex w-max gap-6 pr-6 animate-marquee"
        style={{ "--marquee-duration": "120s" } as React.CSSProperties}
      >
        {track.map((cs, i) => (
          <article
            key={`${cs.company}-${i}`}
            aria-hidden={i >= caseStudies.length || undefined}
            className="card flex w-[320px] shrink-0 flex-col justify-between p-7 sm:w-[400px]"
          >
            <p className="text-sm leading-relaxed text-fg-muted">{cs.text}</p>
            <div className="mt-6">
              <Logo src={cs.logo} alt={cs.company} height={24} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
