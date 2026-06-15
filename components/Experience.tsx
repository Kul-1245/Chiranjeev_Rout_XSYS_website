import { Briefcase, FlaskConical, Factory, LineChart } from "lucide-react";
import { experiences, type Experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const iconFor: Record<Experience["type"], typeof Briefcase> = {
  Consulting: LineChart,
  Industry: Factory,
  "R&D": FlaskConical,
  Research: Briefcase,
};

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="From the plant floor to the client deck"
          intro="Internships across consulting, R&D, and heavy industry — each one a different lens on the same skill: turning complexity into clarity."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((x, i) => {
            const Icon = iconFor[x.type];
            return (
              <Reveal key={x.org} delay={(i % 2) * 0.06}>
                <article className="group card h-full hover:border-accent/40 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hair bg-surface-2 text-accent transition-colors group-hover:border-accent/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="chip border-accent/30 text-accent">
                      {x.type}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {x.org}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{x.role}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {x.period}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {x.summary}
                  </p>

                  <div className="mt-4">
                    <p className="eyebrow mb-2 text-muted">Key contributions</p>
                    <ul className="space-y-1.5">
                      {x.contributions.map((c) => (
                        <li
                          key={c}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {x.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-hair bg-surface-2 p-3">
                    <p className="eyebrow mb-1 text-accent">Impact</p>
                    <p className="text-sm leading-relaxed text-ink/90">
                      {x.impact}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
