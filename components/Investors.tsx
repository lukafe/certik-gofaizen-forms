import { investors } from "@/config/investors";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Investors() {
  return (
    <section className="border-y border-line bg-ink-deep py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <p className="eyebrow text-center">{site.investors.eyebrow}</p>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {investors.map((investor) => (
            <Logo
              key={investor.name}
              src={investor.file}
              alt={investor.name}
              height={22}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
