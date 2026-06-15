import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/blog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPreview() {
  const latest = [...posts]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <section
      id="blog"
      className="relative scroll-mt-20 border-t border-hair bg-surface/40 py-24"
    >
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="08"
            eyebrow="Insights & Blog"
            title="Notes from the intersection"
            intro="Writing on engineering, the MBA road, consulting, leadership, and the discipline of getting better."
          />
          <Link
            href="/blog"
            className="btn-ghost mb-12 hidden sm:inline-flex"
          >
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${p.slug}`}
                className="group card flex h-full flex-col hover:border-accent/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="chip border-accent/30 text-accent">
                    {p.category}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {p.readingTime}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-hair pt-4 text-xs text-muted">
                  <span>{formatDate(p.date)}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link href="/blog" className="btn-ghost mt-8 inline-flex sm:hidden">
          All articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
