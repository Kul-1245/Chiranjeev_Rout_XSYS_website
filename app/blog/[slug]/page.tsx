import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPost, posts, type Block } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h":
      return (
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-accent pl-5 font-display text-xl font-medium italic leading-snug text-ink"
        >
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="my-5 space-y-2">
          {block.items.map((it, j) => (
            <li
              key={j}
              className="flex gap-3 leading-relaxed text-muted"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {it}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-5 leading-relaxed text-muted">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-28">
      <div className="shell max-w-3xl pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip border-accent/30 text-accent">
              {post.category}
            </span>
            <span className="font-mono text-xs text-muted">
              {formatDate(post.date)} · {post.readingTime}
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.excerpt}
          </p>
        </header>

        <hr className="my-8 border-hair" />

        <div className="text-[1.05rem]">
          {post.body.map((b, i) => renderBlock(b, i))}
        </div>

        {/* more reading */}
        {more.length > 0 && (
          <div className="mt-16 border-t border-hair pt-10">
            <p className="eyebrow mb-5 text-muted">Keep reading</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group card hover:border-accent/40"
                >
                  <span className="chip border-accent/30 text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display font-semibold text-ink group-hover:text-accent">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
