import { clips, links, moods, shareHook, site, steps } from "@/lib/site";
import { CTA, Pill, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Sparkle } from "@/components/Sparkle";
import { StepCard } from "@/components/StepCard";
import { MoodCard } from "@/components/MoodCard";
import { ClipCard } from "@/components/ClipCard";
import { Clip } from "@/components/Clip";
import { IconApple, IconArrow } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-[-10%] top-0 h-2/3 animate-mist-drift"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(67,236,214,0.08), transparent 70%)",
          }}
        />
        <div className="shell relative grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">
              <Sparkle size={14} />
              {site.name} — one-tap funny clips
            </span>
            <h1 className="heading-glow mt-5 text-balance text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">
              Your photos, <br />
              <span className="bg-gradient-to-r from-cream via-cream to-peak-teal bg-clip-text text-transparent">
                but funnier.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              Cackle turns any photo into a short, funny video clip — caption,
              character voice, and all — in one tap. Pick a mood, or let ✨ Genius
              read your photo and roast it. Then send it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={links.appStore} variant="gold">
                <IconApple width={17} height={17} /> Get the app
              </CTA>
              <CTA href="/#clips" variant="ghost">
                See it in action <IconArrow width={16} height={16} />
              </CTA>
            </div>
            <div className="mt-9 flex flex-wrap gap-2.5">
              <Pill tone="teal">5 moods</Pill>
              <Pill tone="gold">✨ Genius reads your photo</Pill>
              <Pill tone="muted">Share in a tap</Pill>
            </div>
          </Reveal>

          <Reveal delay={120} className="justify-self-center">
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-[2.6rem] bg-peak-teal/10 blur-3xl" />
              <div className="relative w-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-forest-900 shadow-card sm:w-[262px]">
                <Clip src="/clips/cackle_funny.mp4" className="aspect-[9/16] w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="shell scroll-mt-24 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Photo in, laugh out — in seconds"
            intro="No editing, no timeline, no learning curve. Three taps and it's ready to send."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <StepCard step={i + 1} {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Moods ── */}
      <section id="moods" className="shell scroll-mt-24 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Pick a vibe"
            title="Five moods, endless takes"
            intro="Every mood has its own captions, character voices, and music — and a fresh take every single time, so it never feels repetitive."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {moods.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <MoodCard {...m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Genius spotlight ── */}
      <section id="genius" className="shell scroll-mt-24 py-20 sm:py-24">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-peak-teal/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="max-w-xl">
                <span className="eyebrow">
                  <Sparkle size={14} />
                  Genius · Pro
                </span>
                <h2 className="heading-gradient heading-glow mt-4 text-balance text-3xl font-bold sm:text-4xl">
                  An AI that actually sees your photo
                </h2>
                <p className="mt-4 leading-relaxed text-cream/75">
                  Most apps guess from tags. Genius <em>looks</em> at the picture —
                  who&apos;s in it, what&apos;s happening, the exact ridiculous
                  detail — and writes a caption about <em>that</em>. Then a
                  character voice says it out loud.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Reads the actual scene — no generic, off-topic captions",
                    "Nails the specific moment (it'll count the kids in the bubble bath)",
                    "Speaks the line in a mood-fitting character voice",
                    "Tap “Try again” for a fresh take on the same photo",
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-cream/80">
                      <Sparkle size={12} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTA href={links.appStore} variant="gold">
                    <IconApple width={17} height={17} /> Try Genius
                  </CTA>
                </div>
              </div>

              <div className="justify-self-center">
                <div className="relative animate-float">
                  <div className="absolute -inset-5 rounded-[2.2rem] bg-peak-teal/10 blur-3xl" />
                  <div className="relative w-[210px] overflow-hidden rounded-[1.8rem] border border-peak-teal/25 bg-forest-900 shadow-teal">
                    <Clip src="/clips/cackle_happy.mp4" className="aspect-[9/16] w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Sample clips ── */}
      <section id="clips" className="scroll-mt-24 py-20 sm:py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="See it"
              title="Real clips, made in one tap"
              intro="Same photo, different moods. This is what lands in your friend's DMs."
            />
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="shrink-0 sm:w-[max(0px,calc((100vw-1200px)/2))]" />
            {clips.map((c) => (
              <ClipCard key={c.src} {...c} />
            ))}
            <div className="shrink-0 pr-1" />
          </div>
        </Reveal>
      </section>

      {/* ── Share loop ── */}
      <section className="shell py-20 sm:py-24">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 60% at 50% 0%, rgba(242,166,64,0.10), transparent 70%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="heading-gradient text-balance text-3xl font-bold sm:text-4xl">
                Every clip recruits the next laugh
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-cream/75">
                “{shareHook}” Send a Cackle and your friends won&apos;t just
                laugh — they&apos;ll want to fire one right back.
              </p>
              <div className="mt-8 flex justify-center">
                <CTA href={links.appStore} variant="gold">
                  <IconApple width={17} height={17} /> Start Cackling
                </CTA>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
