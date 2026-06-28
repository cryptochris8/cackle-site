"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { links, nav } from "@/lib/site";
import { Wordmark } from "@/components/ui";
import { IconApple } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-forest-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/icon.png"
            alt="Cackle"
            width={34}
            height={34}
            className="rounded-lg shadow-teal"
          />
          <Wordmark className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-cream/75 transition hover:text-cream"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={links.appStore !== "#" ? links.appStore : undefined}
          className={`btn btn-gold hidden px-5 py-2.5 text-sm lg:inline-flex ${
            links.appStore === "#" ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <IconApple width={16} height={16} /> Get the app
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-cream lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-forest-950/95 backdrop-blur-xl lg:hidden">
          <div className="shell flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-base text-cream/85"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={links.appStore !== "#" ? links.appStore : undefined}
              onClick={() => setOpen(false)}
              className={`btn btn-gold mt-4 ${
                links.appStore === "#" ? "pointer-events-none opacity-60" : ""
              }`}
            >
              <IconApple width={16} height={16} /> Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
