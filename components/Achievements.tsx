import { Award, Medal, ScrollText, Trophy, Users, Star } from "lucide-react";
import { achievements, stats, type Achievement } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const iconFor: Record<Achievement["kind"], typeof Award> = {
  Academic: Star,
  Award: Trophy,
  Certification: ScrollText,
  Leadership: Users,
  Competition: Medal,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-20 border-t border-hair bg-surface/40 py-24"
    >
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Achievements"
          title="Recognition, roles, and milestones"
          intro="A record of academic standing, leadership, and the certifications that mark each step."
        />

        {/* animated stat counters */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="card text-center">
                <div className="font-display text-4xl font-bold text-gold">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* achievement wall */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = iconFor[a.kind];
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.05}>
                <article className="group card h-full hover:border-gold/40 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-label text-gold/80">
                      {a.kind}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {a.detail}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
