import { trustBadges } from "@/config/badges";
import { products } from "@/config/benefits";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const copy = site.footer;
  return (
    <footer className="border-t border-line bg-ink-deep">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-4">
              <Logo src="/logos/certik.svg" alt="CertiK" height={24} className="!opacity-100" />
              <span className="h-6 w-px bg-line-strong" aria-hidden />
              <Logo
                src="/logos/gs.svg"
                alt="Gofaizen & Sherle"
                height={22}
                className="!opacity-100"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <span key={badge.title} className="text-xs text-fg-faint">
                  {badge.title}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              {copy.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <nav aria-label={copy.productLinksTitle}>
            <p className="text-sm font-semibold text-fg">
              {copy.productLinksTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label={copy.companyTitle}>
            <p className="text-sm font-semibold text-fg">{copy.companyTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {copy.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-xs leading-relaxed text-fg-faint">
            {copy.disclaimer}
          </p>
          <p className="mt-3 text-xs text-fg-faint">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
