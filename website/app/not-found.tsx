import Link from "next/link";
import { Sparkle } from "@/components/Sparkle";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Sparkle size={34} />
      <h1 className="heading-gradient heading-glow mt-6 text-5xl font-extrabold">
        404
      </h1>
      <p className="mt-3 max-w-sm text-cream/70">
        This page wandered off to make a clip. Let&apos;s get you back.
      </p>
      <Link href="/" className="btn btn-gold mt-8">
        Back home
      </Link>
    </section>
  );
}
