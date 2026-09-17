import { clients } from "@/config/clients";
import { site } from "@/content/site";
import { CaseStudies } from "./CaseStudies";
import { Logo } from "./Logo";

/**
 * Single infinite logo row, as on certik.com's LP, with the case-study
 * card carousel right below it. The track holds the logo set twice and
 * the keyframes translate by -50%, so the loop is seamless. Pause on
 * hover and reduced-motion handling live in globals.css.
 */
export function LogoMarquee() {
  const track = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-ink py-14">
      <p className="eyebrow mb-8 text-center">{site.clientsStrip.eyebrow}</p>
      <div className="marquee-mask overflow-hidden">
        <div
          className="marquee-track flex w-max items-center gap-14 py-4 pr-14 animate-marquee"
          style={{ "--marquee-duration": "90s" } as React.CSSProperties}
        >
          {track.map((logo, i) => (
            <Logo
              key={`${logo.name}-${i}`}
              src={logo.file}
              alt={logo.name}
              height={26}
              aria-hidden={i >= clients.length || undefined}
            />
          ))}
        </div>
      </div>
      <CaseStudies />
    </section>
  );
}
