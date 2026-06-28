/**
 * Cackle's teal sparkle — a four-point star with a soft pulsing glow. Used as a
 * hero accent, section marker, and the ✨ "Genius" mark. (Same signature shape as
 * the AppalachAI summit star.)
 */
export function Sparkle({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <span
        className="absolute animate-star-pulse rounded-full bg-peak-teal/40 blur-2xl"
        style={{ width: size * 2.4, height: size * 2.4 }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="relative animate-star-pulse"
      >
        <path
          d="M12 0c.6 6.3 5.1 10.8 12 11.4-6.9.6-11.4 5.1-12 12-.6-6.9-5.1-11.4-12-12C6.9 10.8 11.4 6.3 12 0Z"
          fill="url(#cackle-sparkle)"
        />
        <defs>
          <radialGradient id="cackle-sparkle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#9FF6EA" />
            <stop offset="100%" stopColor="#43ECD6" />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
}
