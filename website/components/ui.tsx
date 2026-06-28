import Link from "next/link";
import type { ReactNode } from "react";
import { Sparkle } from "@/components/Sparkle";

/** Brand wordmark — "Cackle" in the display face with a teal-glow accent dot. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-tight ${className}`}>
      Cackle<span className="text-peak-teal">.</span>
    </span>
  );
}

/** Primary / secondary call-to-action that handles internal, external, and placeholder links. */
export function CTA({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
}) {
  const cls = `btn ${variant === "gold" ? "btn-gold" : "btn-ghost"} ${className}`;
  // Not-yet-configured links ("#") render as an inert, muted button.
  if (!href || href === "#") {
    return (
      <span aria-disabled="true" className={`${cls} pointer-events-none opacity-60`}>
        {children}
      </span>
    );
  }
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Small uppercase eyebrow + gradient heading + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className={`eyebrow ${center ? "justify-center" : ""}`}>
          <Sparkle size={13} />
          {eyebrow}
        </span>
      )}
      <h2 className="heading-gradient heading-glow mt-4 text-balance text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-balance leading-relaxed text-cream/70">{intro}</p>
      )}
    </div>
  );
}

/** A small rounded label chip (status, platform, tag). */
export function Pill({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "gold" | "muted";
}) {
  const tones = {
    teal: "border-peak-teal/30 bg-peak-teal/10 text-peak-teal",
    gold: "border-gold/30 bg-gold/10 text-gold-soft",
    muted: "border-white/15 bg-white/5 text-cream/70",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
