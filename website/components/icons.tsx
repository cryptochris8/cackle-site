import type { SVGProps } from "react";
import type { IconName } from "@/lib/site";

type P = SVGProps<SVGSVGElement>;

const stroke = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

const fill = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...p,
});

export function IconArrow(p: P) {
  return (
    <svg {...stroke(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconSpark(p: P) {
  return (
    <svg {...stroke(p)}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    </svg>
  );
}

export function IconCamera(p: P) {
  return (
    <svg {...stroke(p)}>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h1.7l1-1.6A1 1 0 0 1 10 5h4a1 1 0 0 1 .85.4l1 1.6h1.65A1.5 1.5 0 0 1 19 8.5v8A1.5 1.5 0 0 1 17.5 18h-12A1.5 1.5 0 0 1 4 16.5v-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconWand(p: P) {
  return (
    <svg {...stroke(p)}>
      <path d="M5 19l9-9M14 6l1.2-2.4L16.4 6l2.4 1.2L16.4 8.4 15.2 11 14 8.4 11.6 7.2 14 6Z" />
      <path d="M6.5 13.5l1.5 1.5" />
    </svg>
  );
}

export function IconShare(p: P) {
  return (
    <svg {...stroke(p)}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.4" />
      <circle cx="17.5" cy="18" r="2.4" />
      <path d="M8.1 10.9l7.3-3.8M8.1 13.1l7.3 3.8" />
    </svg>
  );
}

export function IconApple(p: P) {
  return (
    <svg {...fill(p)}>
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7 1.9-1 2.6-2c.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.2ZM14.3 6.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5 1 .1 1.9-.5 2.5-1.1Z" />
    </svg>
  );
}

export const StepIcon: Record<IconName, (p: P) => JSX.Element> = {
  camera: IconCamera,
  wand: IconWand,
  share: IconShare,
  spark: IconSpark,
  arrow: IconArrow,
};

/* ── Social marks ── */

export function IconTikTok(p: P) {
  return (
    <svg {...fill(p)}>
      <path d="M16 3c.3 2.1 1.6 3.7 3.7 4v2.4c-1.3.1-2.6-.3-3.7-1v5.9A5.6 5.6 0 1 1 10.4 8.7c.3 0 .6 0 .9.1v2.5a3.1 3.1 0 1 0 2.1 2.9V3H16z" />
    </svg>
  );
}

export function IconInstagram(p: P) {
  return (
    <svg {...stroke(p)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconYouTube(p: P) {
  return (
    <svg {...fill(p)}>
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z" />
    </svg>
  );
}

export function IconX(p: P) {
  return (
    <svg {...fill(p)}>
      <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L7 21H4l7.5-8.6L3.5 3H10l4.5 5.5L17.5 3Zm-1.1 16h1.7L7.7 4.8H5.9L16.4 19Z" />
    </svg>
  );
}

export const SocialIcon = {
  tiktok: IconTikTok,
  instagram: IconInstagram,
  youtube: IconYouTube,
  x: IconX,
};
