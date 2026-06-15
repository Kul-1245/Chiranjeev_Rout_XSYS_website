import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Articles by Chiranjeev Rout on chemical engineering, MBA preparation, consulting, leadership, productivity, and career growth.",
};

export default function BlogIndexPage() {
  return (
    <div className="pt-28">
      <div className="shell pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <header className="mb-10 mt-6 max-w-2xl">
          <span className="eyebrow text-accent">08 / Insights & Blog</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Notes from the intersection
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Engineering, the MBA road, consulting, leadership, and the
            discipline of getting better — written as I learn it.
          </p>
        </header>

        <BlogList />
      </div>
    </div>
  );
}
