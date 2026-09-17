/**
 * Renders a monochrome logo image at a consistent height, as on
 * certik.com's client band. Placeholder SVGs already render white text;
 * official dark-background assets can drop in with no code change.
 * Plain <img> (not next/image) because the local SVGs vary in aspect
 * ratio and need no optimization pipeline.
 */
export function Logo({
  src,
  alt,
  height = 24,
  className = "",
  "aria-hidden": ariaHidden,
}: {
  src: string;
  alt: string;
  height?: number;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={ariaHidden ? "" : alt}
      aria-hidden={ariaHidden}
      style={{ height, width: "auto" }}
      className={`select-none opacity-70 transition-opacity duration-200 hover:opacity-100 ${className}`}
      loading="lazy"
      draggable={false}
    />
  );
}

export function CertikGsLockup({ height = 26 }: { height?: number }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Logo src="/logos/certik.svg" alt="CertiK" height={height} className="!opacity-100" />
      <span className="text-fg-faint" aria-hidden>
        ×
      </span>
      <Logo src="/logos/gs.svg" alt="Gofaizen & Sherle" height={height} className="!opacity-100" />
    </span>
  );
}
