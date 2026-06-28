/**
 * Site-wide atmospheric backdrop: deep base with a faint teal glow up top and a
 * warm gold glow below. Sits behind all content. (Same ambient system as the
 * AppalachAI site.)
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-forest-950"
    >
      <div
        className="absolute left-1/2 top-[-12%] h-[55vh] w-[85vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(67,236,214,0.13), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-22%] left-1/2 h-[50vh] w-[72vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(242,166,64,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 45%, rgba(5,13,9,0.65) 100%)",
        }}
      />
    </div>
  );
}

/** Cinematic film-grain overlay (fixed, non-interactive). */
export function Grain() {
  return <div aria-hidden className="grain" />;
}
