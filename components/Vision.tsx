import { Compass } from "lucide-react";
import { vision } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-20 py-24">
      <div className="shell">
        <SectionHeading index="07" eyebrow="Vision" title={vision.lead} />

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hair bg-surface p-8 sm:p-12">
            <div className="lattice pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative">
              <Compass className="h-8 w-8 text-accent" />
              <p className="mt-5 max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                {vision.statement}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vision.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card h-full">
                <span className="font-mono text-sm text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
