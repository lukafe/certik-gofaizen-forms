import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-deep/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6">
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

        <nav className="hidden items-center gap-8 md:flex">
          {site.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.header.cta.href} className="btn-primary !px-5 !py-2">
          {site.header.cta.label}
        </a>
      </div>
    </header>
  );
}
