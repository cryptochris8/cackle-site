import type { IconName } from "@/lib/site";
import { StepIcon } from "@/components/icons";

export function StepCard({
  step,
  title,
  icon,
  blurb,
}: {
  step: number;
  title: string;
  icon: IconName;
  blurb: string;
}) {
  const Icon = StepIcon[icon];
  return (
    <div className="glass glass-hover group flex flex-col rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-peak-teal/25 bg-peak-teal/10 text-peak-teal">
          <Icon width={22} height={22} />
        </span>
        <span className="font-display text-sm font-bold text-cream/40">
          0{step}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">{blurb}</p>
    </div>
  );
}
