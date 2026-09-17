import { clientRows } from "@/config/clients";
import { site } from "@/content/site";
import { Logo } from "./Logo";

function Row({
  logos,
  reverse,
}: {
  logos: { name: string; file: string }[];
  reverse?: boolean;
}) {
  // The track holds the logo set twice; the keyframes translate by -50%,
  // so the loop is seamless. Pausing on hover is handled in globals.css.
  const track = [...logos, ...logos];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`marquee-track flex w-max items-center gap-14 py-4 pr-14 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((logo, i) => (
          <Logo
            key={`${logo.name}-${i}`}
            src={logo.file}
            alt={logo.name}
            height={26}
            aria-hidden={i >= logos.length || undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const [rowOne, rowTwo] = clientRows;
  return (
    <section className="border-y border-line bg-ink py-12">
      <p className="eyebrow mb-8 text-center">{site.clientsStrip.eyebrow}</p>
      <Row logos={rowOne} />
      <Row logos={rowTwo} reverse />
    </section>
  );
}
