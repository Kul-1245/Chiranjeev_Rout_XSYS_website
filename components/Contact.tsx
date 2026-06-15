"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Download, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Opens the visitor's mail client with a pre-filled message.
    // Swap this for a form service (Formspree, Resend, etc.) when ready.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect", href: profile.links.linkedin },
    { icon: Github, label: "GitHub", value: "Follow", href: profile.links.github },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-24"
    >
      <div className="shell">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title="Let's build something worth talking about"
          intro="Recruiters, professors, admission committees, and collaborators — I'd be glad to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Channels + CTA */}
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-hair bg-surface p-4 transition-all hover:border-accent/40 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hair bg-surface-2 text-accent">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="eyebrow text-muted">{c.label}</p>
                      <p className="text-sm text-ink group-hover:text-accent">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={profile.links.resume}
                download
                className="btn-primary w-full"
              >
                <Download className="h-4 w-4" /> Download my resume
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.06}>
            <div className="card">
              {sent ? (
                <div className="flex h-full min-h-[18rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    Your mail client is opening
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    If nothing happened, email me directly at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-5"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="eyebrow mb-2 block text-muted">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={5}
                      placeholder="What would you like to talk about?"
                      className="w-full resize-none rounded-xl border border-hair bg-base px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-primary w-full"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-muted">
                    This opens your email app. Hook up a form service for
                    direct delivery.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-hair bg-base px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
      />
    </div>
  );
}
