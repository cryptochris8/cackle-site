import Link from "next/link";
import { links, nav, site } from "@/lib/site";
import { CTA, Wordmark } from "@/components/ui";
import { Sparkle } from "@/components/Sparkle";
import { SocialIcon } from "@/components/icons";
import { IconApple } from "@/components/icons";

const socialList = (
  [
    { key: "tiktok", href: links.tiktok, label: "TikTok" },
    { key: "instagram", href: links.instagram, label: "Instagram" },
    { key: "youtube", href: links.youtube, label: "YouTube" },
    { key: "x", href: links.x, label: "X" },
  ] as const
).filter((s) => s.href && s.href !== "#");

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* CTA band */}
      <div className="shell py-16">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12">
          <div className="mb-5 flex justify-center">
            <Sparkle size={30} />
          </div>
          <h2 className="heading-gradient heading-glow text-balance text-3xl font-bold sm:text-4xl">
            Ready to Cackle?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-cream/70">
            One photo, one tap, one laugh to send. Free to start.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CTA href={links.appStore} variant="gold">
              <IconApple width={17} height={17} /> Get Cackle
            </CTA>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="shell grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/icon.png" alt="" width={36} height={36} className="rounded-lg" />
            <Wordmark className="text-base" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            {site.story}
          </p>
          {socialList.length > 0 && (
            <div className="mt-5 flex gap-2.5">
              {socialList.map((s) => {
                const Icon = SocialIcon[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 text-cream/70 transition hover:border-peak-teal/50 hover:text-peak-teal"
                  >
                    <Icon width={18} height={18} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <FooterCol title="Explore" items={nav} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/45">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/privacy" className="link-quiet">
                Privacy
              </Link>
            </li>
            <li>
              <a href={`mailto:${links.email}`} className="link-quiet">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/45">
            Get updates
          </h3>
          <p className="mt-4 text-sm text-cream/60">
            New features &amp; launch news. No spam.
          </p>
          {/* Netlify form — detected automatically on deploy from the static HTML. */}
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mt-3 flex gap-2"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-peak-teal/60 focus:outline-none"
            />
            <button type="submit" className="btn btn-gold shrink-0 px-4 py-2.5">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/45 sm:flex-row">
          <p>
            © {year} {site.name} · a brand of Athlete Domains LLC
          </p>
          <p className="flex items-center gap-1.5">
            Made with a little chaos <span aria-hidden>😆</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/45">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="link-quiet">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
