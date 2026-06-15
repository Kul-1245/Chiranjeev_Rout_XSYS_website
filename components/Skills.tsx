"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function Bar({ level }: { level: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
      <motion.div
        className="h-full rounded-full bg-accent"
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="A toolkit that spans bench and boardroom"
          intro="Technical depth in engineering and research, paired with the business and digital fluency to put it to work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.group} delay={(gi % 2) * 0.06}>
              <div className="card h-full">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {g.group}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {g.skills.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-ink/90">{s.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {s.level}%
                        </span>
                      </div>
                      <Bar level={s.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
