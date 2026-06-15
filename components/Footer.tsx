import Link from "next/link";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair bg-surface/40">
      <div className="shell py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-base font-semibold text-ink"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-[0.7rem] font-bold text-white">
                CR
              </span>
              {profile.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.institutionLine}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 self-start text-sm text-muted transition-colors hover:text-accent"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-hair pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
