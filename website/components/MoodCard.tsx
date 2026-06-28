export function MoodCard({
  emoji,
  name,
  line,
  flagship = false,
}: {
  emoji: string;
  name: string;
  line: string;
  flagship?: boolean;
}) {
  return (
    <div
      className={`glass glass-hover flex flex-col rounded-2xl p-5 ${
        flagship ? "border-peak-teal/40 shadow-teal" : ""
      }`}
    >
      <span className="text-3xl" aria-hidden>
        {emoji}
      </span>
      <h3 className="mt-3 font-display text-base font-bold">
        {name}
        {flagship && (
          <span className="ml-2 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 align-middle text-[0.6rem] font-semibold uppercase tracking-wide text-gold-soft">
            Pro
          </span>
        )}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{line}</p>
    </div>
  );
}
