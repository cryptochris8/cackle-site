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
  tiktok: "#", // TODO: create @cackleapp on TikTok, then restore the URL
  instagram: "#", // TODO: create @cackleapp on Instagram, then restore the URL
  youtube: "#", // TODO
  x: "https://x.com/cackleapp",
  email: "hello@cackleapp.com", // TODO: confirm address
};

export const nav = [
  { label: "How it works", href: "/#how" },
  { label: "Moods", href: "/#moods" },
  { label: "Genius", href: "/#genius" },
  { label: "The app", href: "/#app" },
  { label: "Story", href: "/#story" },
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
      "Out comes a short clip. Tap “Cackle it” and it's off to your friends — who'll want to send one back.",
  },
];

export const moods: { emoji: string; name: string; line: string; sticker?: string }[] = [
  { emoji: "😂", name: "Funny", sticker: "/stickers/funny.svg", line: "A witty roast of the vibe, outfit, or moment." },
  { emoji: "😢", name: "Sad", sticker: "/stickers/sad.svg", line: "Cue the tiny violin and the dramatic narrator." },
  { emoji: "😄", name: "Happy", sticker: "/stickers/happy.svg", line: "Pure hype. Certified main-character energy." },
  { emoji: "😡", name: "Mad", sticker: "/stickers/mad.svg", line: "Petty, savage, strongly-worded-text energy." },
  { emoji: "🎲", name: "Auto", line: "Can't choose? Auto reads your photo and picks the mood — free." },
];

export const clips: { src: string; label: string; tone: "teal" | "gold" }[] = [
  { src: "/clips/cackle_funny.mp4", label: "😂 Funny", tone: "teal" },
  { src: "/clips/cackle_happy.mp4", label: "😄 Happy", tone: "gold" },
  { src: "/clips/cackle_sad.mp4", label: "😢 Sad", tone: "teal" },
  { src: "/clips/cackle_mad.mp4", label: "😡 Mad", tone: "gold" },
];

// Real in-app screenshots for the "See the app" section (on-brand, v1.0.27).
export const appShots: { src: string; caption: string }[] = [
  { src: "/clips/IMG_6406.PNG", caption: "One tap from your home screen." },
  { src: "/clips/IMG_6409.PNG", caption: "Your photo, roasted — caption + mood sticker." },
  // Re-shoot the "Start with a photo" screen (now has the thumbs-up sticker) and add it:
  // { src: "/clips/IMG_6407.PNG", caption: "Snap one or pick from your library." },
];

// The viral verb-loop hook carried by every shared clip.
export const shareHook = "You just got Cackled — make your own in the Cackle app.";

// The founder's origin story — the forgotten-coffee "aha" moment.
export const origin = {
  title: "Born from a forgotten cup of coffee",
  paragraphs: [
    "Every morning I get up early to make my fiancée her coffee. Then she changed jobs and started leaving before sunrise — and some mornings she'd forget it, leaving a full, untouched cup sitting on the counter.",
    "Here's the thing: I don't even drink coffee. But one morning I looked at that lonely full cup, snapped a photo of it, and thought — man, I wish I could turn this into a funny little clip, with a caption and some music, and send it to her.",
    "That was the aha moment. Cackle was born from a forgotten cup of coffee. ☕",
  ],
  attribution: "— Chris, founder of Cackle",
};
