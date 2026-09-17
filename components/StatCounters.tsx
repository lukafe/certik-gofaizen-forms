"use client";

import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/config/stats";

/** Counts up from 0 when scrolled into view, like certik.com's stat strip. */
function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (v: number) =>
      v.toLocaleString("en-US", {
        minimumFractionDigits: stat.decimals ?? 0,
        maximumFractionDigits: stat.decimals ?? 0,
      });

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduced) {
        setDisplay(format(stat.value));
        return;
      }
      const duration = 1800;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setDisplay(format(stat.value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

export function StatCounters() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dd className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            <Counter stat={stat} />
          </dd>
          <dt className="mt-2 text-sm text-fg-muted">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
