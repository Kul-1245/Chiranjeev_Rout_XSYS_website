"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Beaker, ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const shown =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 border-t border-hair bg-surface/40 py-24"
    >
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Research & Projects"
          title="Work where science meets a real question"
          intro="Problem, method, result — the same structure I bring to every project, in the lab or on a client engagement."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                filter === c
                  ? "border-accent bg-accent text-white"
                  : "border-hair text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group card h-full hover:border-accent/40 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-hair bg-surface-2 text-accent">
                    <Beaker className="h-5 w-5" />
                  </span>
                  <span className="chip border-accent/30 text-accent">
                    {p.category}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  {p.title}
                </h3>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="eyebrow text-muted">Problem</dt>
                    <dd className="mt-1 leading-relaxed text-muted">
                      {p.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">Method</dt>
                    <dd className="mt-1 leading-relaxed text-muted">
                      {p.method}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-accent">Result</dt>
                    <dd className="mt-1 leading-relaxed text-ink/90">
                      {p.result}
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 border-t border-hair pt-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs text-muted"
                      >
                        #{s.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="pointer-events-none absolute right-5 top-5 text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
