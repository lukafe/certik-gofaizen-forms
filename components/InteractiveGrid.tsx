"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive data-grid backdrop, inspired by certik.com's hero: a faint
 * grid of squares where cells near the cursor light up and fade out, a
 * slow accent light-beam sweeping across, and occasional random sparkles
 * so the surface feels alive on touch devices too.
 *
 * Canvas-based for performance; pointer events stay on the page (the
 * canvas listens to window mousemove). Honors prefers-reduced-motion by
 * rendering a static grid with no animation.
 */
export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const CELL = 48;
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let cells = new Float32Array(0);
    let raf = 0;
    let running = true;
    const start = performance.now();

    const drawGridLines = () => {
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= cols; x++) {
        ctx.moveTo(x * CELL + 0.5, 0);
        ctx.lineTo(x * CELL + 0.5, h);
      }
      for (let y = 0; y <= rows; y++) {
        ctx.moveTo(0, y * CELL + 0.5);
        ctx.lineTo(w, y * CELL + 0.5);
      }
      ctx.stroke();
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      cells = new Float32Array(cols * rows);
      if (reduced) {
        ctx.clearRect(0, 0, w, h);
        drawGridLines();
      }
    };

    const ignite = (col: number, row: number, strength: number) => {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const c = col + dx;
          const r = row + dy;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          const falloff = dx === 0 && dy === 0 ? 1 : 0.35;
          const i = r * cols + c;
          cells[i] = Math.min(1, Math.max(cells[i], strength * falloff));
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      ignite(Math.floor(x / CELL), Math.floor(y / CELL), 1);
    };

    let sparkleTimer = 0;

    const frame = (now: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      drawGridLines();

      // Occasional random sparkle keeps the surface alive without a mouse
      if (now - sparkleTimer > 900) {
        sparkleTimer = now;
        ignite(
          Math.floor(Math.random() * cols),
          Math.floor(Math.random() * rows),
          0.55
        );
      }

      // Lit cells: cool glow fill with a brighter edge, decaying each frame
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const v = cells[i];
          if (v < 0.01) continue;
          cells[i] = v * 0.955;
          const x = c * CELL;
          const y = r * CELL;
          ctx.fillStyle = `rgba(140,160,255,${(0.09 * v).toFixed(3)})`;
          ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2);
          ctx.strokeStyle = `rgba(190,205,255,${(0.28 * v).toFixed(3)})`;
          ctx.strokeRect(x + 0.5, y + 0.5, CELL, CELL);
        }
      }

      // Slow accent beam sweeping across, like the light line on certik.com
      const t = ((now - start) % 26000) / 26000;
      const bx = t * (w + 400) - 200;
      const grad = ctx.createLinearGradient(bx - 60, 0, bx + 60, 0);
      grad.addColorStop(0, "rgba(227,255,47,0)");
      grad.addColorStop(0.5, "rgba(227,255,47,0.05)");
      grad.addColorStop(1, "rgba(227,255,47,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(bx - 60, 0, 120, h);
      ctx.fillStyle = "rgba(227,255,47,0.14)";
      ctx.fillRect(bx, 0, 1.5, h);

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(frame);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
      }}
    />
  );
}
