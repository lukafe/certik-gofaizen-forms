import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Partnership() {
  const { id, eyebrow, title, intro, columns } = site.partnership;
  return (
    <section id={id} className="bg-ink-deep py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="mt-5 text-fg-muted">{intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {columns.map((col) => (
            <div key={col.name} className="card p-8">
              <Logo src={col.logo} alt={col.name} height={26} className="!opacity-100" />
              <h3 className="mt-6 text-xl font-semibold text-fg">
                {col.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
