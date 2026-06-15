import Image from "next/image";
import { about, milestones, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="shell">
        <SectionHeading index="01" eyebrow="About" title={about.lead} />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait + quick facts */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hair bg-surface-2">
                {/* Replace /public/profile.jpg to show your photo */}
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
                <div className="lattice absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-sm text-muted">
                  <span className="px-6">
                    Add a photo at{" "}
                    <code className="font-mono text-xs text-accent">
                      /public/profile.jpg
                    </code>
                  </span>
                </div>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="card p-4">
                  <dt className="eyebrow text-muted">Based in</dt>
                  <dd className="mt-1 font-medium text-ink">
                    {profile.location}
                  </dd>
                </div>
                <div className="card p-4">
                  <dt className="eyebrow text-muted">Focus</dt>
                  <dd className="mt-1 font-medium text-ink">
                    Engineering × Strategy
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Narrative + timeline */}
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="eyebrow mb-6 text-muted">Milestones</h3>
              <ol className="relative ml-3">
                <span className="bond-line absolute left-0 top-0 h-full w-px" />
                {milestones.map((m, i) => (
                  <Reveal key={m.year} delay={i * 0.05}>
                    <li className="relative mb-7 pl-7 last:mb-0">
                      <span className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-base" />
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-mono text-sm text-accent">
                          {m.year}
                        </span>
                        <span className="font-display font-semibold text-ink">
                          {m.title}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {m.detail}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
