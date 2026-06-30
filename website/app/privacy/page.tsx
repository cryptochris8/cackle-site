import type { Metadata } from "next";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cackle handles your photos and data.",
};

const updated = "June 30, 2026";

export default function PrivacyPage() {
  return (
    <article className="shell max-w-3xl pb-24 pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="heading-gradient heading-glow mt-3 text-4xl font-extrabold sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-cream/50">Last updated: {updated}</p>

      <div className="mt-10 space-y-8 leading-relaxed text-cream/75">
        <Section title="The short version">
          Cackle turns your photos into funny video clips. The free moods run
          entirely <strong>on your device</strong> — those photos never leave your
          phone. The optional <strong>Genius</strong> feature sends a small,
          downscaled copy of the photo to third-party AI services (
          <strong>Anthropic</strong> and <strong>ElevenLabs</strong>) to write a
          caption and voiceover, then discards it. We don&apos;t sell your data, and
          you don&apos;t need an account to use the app.
        </Section>

        <Section title="Photos you choose">
          You pick a photo from your library to make a clip. For the free moods
          (Funny, Sad, Happy, Mad, and Auto), all processing happens locally on
          your device — the image is not uploaded anywhere.
        </Section>

        <Section title="Genius (the AI feature)">
          When you tap <strong>Genius</strong>, Cackle sends a downscaled copy of
          that one photo to our backend, which passes it to third-party AI services
          — <strong>Anthropic</strong> to generate a caption describing the image,
          and <strong>ElevenLabs</strong> to synthesize a short character voiceover
          of that caption. The image is used only to produce your clip: it is
          processed and then discarded — not stored after processing, and not used
          to train AI models. Because the photo leaves your device for this feature,
          Genius is clearly labeled, asks for your consent the first time you use it,
          and is always your choice. The other moods send nothing off your device.
        </Section>

        <Section title="What we don't do">
          We don&apos;t require an account or collect your name to make clips. We
          don&apos;t sell or rent your personal information. We don&apos;t post
          anything on your behalf — sharing a clip is always something you
          initiate.
        </Section>

        <Section title="Analytics & diagnostics">
          We don&apos;t currently use third-party analytics or crash-reporting SDKs,
          and the app collects no usage or diagnostics data about you. If we ever add
          privacy-respecting analytics, we&apos;ll update this policy and our App Store
          privacy details first.
        </Section>

        <Section title="Children">
          Cackle is intended for a general audience and is not directed at children
          under 13. We don&apos;t knowingly collect personal information from
          children.
        </Section>

        <Section title="Your choices">
          You control which photos you select. You can stop using Genius at any
          time and keep using the on-device moods. For any privacy request, email
          us at{" "}
          <a href={`mailto:${links.email}`} className="text-peak-teal hover:underline">
            {links.email}
          </a>
          .
        </Section>

        <Section title="Changes">
          We&apos;ll update this page if our practices change, and revise the date
          above. Continued use of {site.name} means you accept the current policy.
        </Section>

        <Section title="Contact">
          Questions? Reach us at{" "}
          <a href={`mailto:${links.email}`} className="text-peak-teal hover:underline">
            {links.email}
          </a>
          . {site.name} is a brand of Athlete Domains LLC.
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-cream">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
