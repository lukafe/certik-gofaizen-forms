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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={
                benefit.highlighted
                  ? "card relative border-accent/40 bg-accent-soft p-8 md:col-span-2 lg:col-span-1 lg:row-span-1"
                  : "card p-8"
              }
            >
              {benefit.highlighted && (
                <span className="absolute right-6 top-6 rounded-pill bg-accent px-3 py-1 text-xs font-bold text-ink-deep">
                  Partner offer
                </span>
              )}
              <h3
                className={`pr-24 text-lg font-semibold ${
                  benefit.highlighted ? "text-accent" : "text-fg"
                }`}
              >
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product strip */}
        <div id={site.services.id} className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{site.services.eyebrow}</p>
            <h2 className="section-title mt-4">{site.services.title}</h2>
            <p className="mt-5 text-fg-muted">{site.services.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
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
