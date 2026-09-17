import { benefits, products } from "@/config/benefits";
import { site } from "@/content/site";

export function Benefits() {
  return (
    <section id={site.offer.id} className="bg-ink py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{site.offer.eyebrow}</p>
          <h2 className="section-title mt-4">{site.offer.title}</h2>
          <p className="mt-5 text-fg-muted">{site.offer.subtitle}</p>
        </div>

        {/* Symmetric layout: highlighted discount card full-width on top,
            remaining benefits in an equal row below. */}
        <div className="mt-14 grid gap-6">
          {benefits
            .filter((b) => b.highlighted)
            .map((benefit) => (
              <div
                key={benefit.title}
                className="card relative border-accent/40 bg-accent-soft p-8 text-center sm:p-10"
              >
                <span className="mx-auto mb-4 inline-block rounded-pill bg-accent px-3 py-1 text-xs font-bold text-ink-deep">
                  Partner offer
                </span>
                <h3 className="text-2xl font-semibold text-accent">
                  {benefit.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-fg-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          {/* Centered flex-wrap keeps the grid symmetric for any card
              count (e.g. 5 cards render as a 3 + 2 centered layout). */}
          <div className="flex flex-wrap justify-center gap-6">
            {benefits
              .filter((b) => !b.highlighted)
              .map((benefit) => (
                <div
                  key={benefit.title}
                  className="card w-full p-8 text-center sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <h3 className="text-lg font-semibold text-fg">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Product strip */}
        <div id={site.services.id} className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{site.services.eyebrow}</p>
            <h2 className="section-title mt-4">{site.services.title}</h2>
            <p className="mt-5 text-fg-muted">{site.services.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                {...(product.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card group flex flex-col p-6"
              >
                <h3 className="text-sm font-semibold text-fg">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-fg-muted">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-fg-muted transition-colors duration-200 group-hover:text-fg">
                  Learn more
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
