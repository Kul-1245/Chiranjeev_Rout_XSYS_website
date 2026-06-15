import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-hair bg-surface/40 py-24"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="An academic foundation built for range"
          intro="A rigorous engineering core, now extending into management."
        />

        <div className="relative">
          <span className="bond-line absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px sm:block" />
          <div className="space-y-6">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.06}>
                <div className="relative sm:pl-12">
                  <span className="absolute left-0 top-6 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-base sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <article className="card hover:border-accent/40 hover:shadow-lift">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-accent">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-mono text-xs">{e.period}</span>
                        </div>
                        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                          {e.degree}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{e.school}</p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                          <MapPin className="h-3 w-3" /> {e.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {e.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow mb-2 text-muted">
                          Relevant coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {e.coursework.map((c) => (
                            <span key={c} className="chip">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="eyebrow mb-2 text-muted">
                          Research interests
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {e.interests.map((c) => (
                            <span
                              key={c}
                              className="chip border-accent/30 text-accent"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
