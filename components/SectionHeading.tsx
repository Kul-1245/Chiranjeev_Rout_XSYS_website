import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3">
          {/* periodic-table-style node marker */}
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-accent/40 bg-accent/10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="eyebrow text-accent">
            {index} / {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
