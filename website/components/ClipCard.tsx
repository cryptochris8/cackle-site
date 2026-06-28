export function ClipCard({
  src,
  label,
  tone = "teal",
}: {
  src: string;
  label: string;
  tone?: "teal" | "gold";
}) {
  const ring = tone === "gold" ? "border-gold/30" : "border-peak-teal/25";
  return (
    <div
      className={`group relative w-[210px] shrink-0 snap-start overflow-hidden rounded-2xl border ${ring} bg-forest-900 shadow-card`}
    >
      <video
        className="aspect-[9/16] w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent p-4 pt-10">
        <span className="text-sm font-semibold text-cream">{label}</span>
      </div>
    </div>
  );
}
