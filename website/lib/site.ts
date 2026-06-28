// ────────────────────────────────────────────────────────────────────────────
// Cackle — single source of truth for site content.
// Edit copy, links, moods, and clips here; pages read from this.
// ────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Cackle",
  tagline: "Funny photo clips in one tap.",
  url: "https://cackleapp.com",
  description:
    "Turn any photo into a funny, shareable video clip in one tap. Pick a mood — or let Genius read your photo and roast it for you. Then send it.",
  story:
    "Cackle turns your photos into funny little video clips you can send to friends — pick a mood, get a clip, share the laugh.",
  founder: "Chris Campbell",
  location: "Built by AppalachAI Studios",
};

// ─── External links — fill these in with the real URLs ───
// Anything left as "#" renders as a button that doesn't navigate yet.
export const links = {
  appStore: "#", // TODO: App Store / TestFlight public link once live
  tiktok: "https://www.tiktok.com/@cackleapp",
  instagram: "https://www.instagram.com/cackleapp",
  youtube: "#", // TODO
  x: "https://x.com/cackleapp",
  email: "hello@cackleapp.com", // TODO: confirm address
};

export const nav = [
  { label: "How it works", href: "/#how" },
  { label: "Moods", href: "/#moods" },
  { label: "Genius", href: "/#genius" },
  { label: "Clips", href: "/#clips" },
];

export type IconName = "camera" | "wand" | "share" | "spark" | "arrow";

export const steps: { title: string; icon: IconName; blurb: string }[] = [
  {
    title: "Pick a photo",
    icon: "camera",
    blurb:
      "Any photo from your camera roll — a friend, a pet, a fail, last night's chaos.",
  },
  {
    title: "Tap a mood",
    icon: "wand",
    blurb:
      "Funny, Sad, Happy, Mad, or Auto. Cackle writes the caption, picks a voice, and scores it.",
  },
  {
    title: "Send the laugh",
    icon: "share",
    blurb:
      "Out comes a short video clip. Share it in a tap — and they'll want to make one back.",
  },
];

export const moods: { emoji: string; name: string; line: string }[] = [
  { emoji: "😂", name: "Funny", line: "A witty roast of the vibe, outfit, or moment." },
  { emoji: "😢", name: "Sad", line: "Cue the tiny violin and the dramatic narrator." },
  { emoji: "😄", name: "Happy", line: "Pure hype. Certified main-character energy." },
  { emoji: "😡", name: "Mad", line: "Petty, savage, strongly-worded-text energy." },
  { emoji: "🎲", name: "Auto", line: "Can't choose? Auto reads your photo and picks the mood — free." },
];

export const clips: { src: string; label: string; tone: "teal" | "gold" }[] = [
  { src: "/clips/cackle_funny.mp4", label: "😂 Funny", tone: "teal" },
  { src: "/clips/cackle_happy.mp4", label: "😄 Happy", tone: "gold" },
  { src: "/clips/cackle_sad.mp4", label: "😢 Sad", tone: "teal" },
  { src: "/clips/cackle_mad.mp4", label: "😡 Mad", tone: "gold" },
];

// The viral verb-loop hook carried by every shared clip.
export const shareHook = "You just got Cackled — make your own in the Cackle app.";
