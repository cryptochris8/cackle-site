// A single app screenshot in a soft phone frame (matches the site's clip frames).
export function AppShot({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="flex flex-col items-center">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-5 rounded-[2.6rem] bg-peak-teal/10 blur-3xl"
        />
        <div className="relative w-[224px] rounded-[2.2rem] border border-white/10 bg-forest-900 p-2 shadow-card sm:w-[240px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} className="block w-full rounded-[1.7rem]" />
        </div>
      </div>
      <figcaption className="mt-5 max-w-[240px] text-center text-sm text-cream/60">
        {caption}
      </figcaption>
    </figure>
  );
}
