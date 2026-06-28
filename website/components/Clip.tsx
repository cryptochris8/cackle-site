"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A looping demo clip with a pause control (WCAG 2.2.2) that respects
 * prefers-reduced-motion (WCAG 2.3.3): it does NOT autoplay when the user has
 * reduced motion on, and any clip can be paused/played by clicking it.
 */
export function Clip({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      setPlaying(false);
    } else {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause demo video" : "Play demo video"}
      className="group/clip relative block w-full"
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={ref} className={className} src={src} muted loop playsInline preload="metadata" />
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-forest-950/70 text-cream backdrop-blur transition ${
          playing ? "opacity-0 group-hover/clip:opacity-100" : "opacity-100"
        }`}
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </span>
    </button>
  );
}
