import { trustBadges } from "@/config/badges";

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className="text-fg-muted"
    >
      <path
        d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <section className="bg-ink py-14">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <div
            key={badge.title}
            className="card flex items-center gap-4 px-5 py-4"
          >
            <ShieldIcon />
            <div>
              <p className="text-sm font-semibold text-fg">{badge.title}</p>
              {badge.subtitle && (
                <p className="text-xs text-fg-muted">{badge.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
