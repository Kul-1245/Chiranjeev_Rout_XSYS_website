"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { posts, blogCategories } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogList() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return [...posts]
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .filter((p) => (cat === "All" ? true : p.category === cat))
      .filter((p) => {
        const q = query.toLowerCase().trim();
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      });
  }, [query, cat]);

  return (
    <>
      {/* search */}
      <div className="relative mb-5 max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles…"
          className="w-full rounded-full border border-hair bg-surface py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
        />
      </div>

      {/* categories */}
      <div className="mb-10 flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              cat === c
                ? "border-accent bg-accent text-white"
                : "border-hair text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-hair p-12 text-center">
          <p className="text-muted">
            No articles match that search yet. Try a different term or category.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            >
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
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-hair pt-4 text-xs text-muted">
                  <span>{formatDate(p.date)}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
