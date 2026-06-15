"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { MoleculeBackground } from "./MoleculeBackground";

export function Hero() {
  const reduce = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <MoleculeBackground />

      {/* radial wash + faint lattice over the canvas */}
      <div className="lattice pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 35%, transparent 0%, var(--bg) 78%)",
        }}
      />

      <div className="shell relative z-10 pt-24">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-hair bg-surface/60 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="eyebrow text-muted">
              ICT Mumbai · Chemical Engineering
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="relative whitespace-nowrap text-accent">
              Chiranjeev Rout
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent/40" />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-lg font-medium text-ink/90 sm:text-2xl"
          >
            {profile.roles.join("  /  ")}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn-primary">
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.links.resume}
              className="btn-ghost"
              download
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <Link href="/#contact" className="btn-ghost">
              <Mail className="h-4 w-4" /> Contact me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-hair p-1">
          <span className="h-2 w-1 animate-drift rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
