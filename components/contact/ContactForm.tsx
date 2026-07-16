"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Check } from "@/lib/icons";
import { company } from "@/lib/company";

const SUBJECTS = [
  "Hire talent",
  "Build software",
  "Consulting engagement",
  "Apply for a role",
  "General inquiry",
] as const;

type Subject = (typeof SUBJECTS)[number];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [subject, setSubject] = React.useState<Subject>(SUBJECTS[0]);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);

    const fd = new FormData(formRef.current);
    const firstName = String(fd.get("firstName") ?? "").trim();
    const lastName = String(fd.get("lastName") ?? "").trim();
    const senderEmail = String(fd.get("email") ?? "").trim();
    const companyName = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const subjectLine = `Website enquiry — ${subject}`;

    const bodyLines = [
      `From: ${fullName || "(no name provided)"}`,
      senderEmail ? `Email: ${senderEmail}` : null,
      companyName ? `Company: ${companyName}` : null,
      `Interest: ${subject}`,
      "",
      "Message",
      "-------",
      message || "(no message provided)",
      "",
      "---",
      "Sent from logostrinitytechnologies.com contact form",
    ].filter(Boolean);

    const body = bodyLines.join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(body)}`;

    // Flip to the success view FIRST so the user gets clear feedback
    // regardless of whether the OS mail handler resolves cleanly.
    setSubmitting(false);
    setSubmitted(true);

    // Then hand off to the mail client on the next tick.
    await new Promise((r) => setTimeout(r, 0));
    window.location.href = href;
  };

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-navy-700/10 bg-white p-8 ring-border dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-700/12 text-navy-700 dark:bg-white/10 dark:text-white">
                <Check size={28} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-white">
                Your mail client should have opened.
              </h3>
              <p className="mt-3 max-w-md text-navy-700 dark:text-navy-200/80">
                Review the pre-filled message and click <strong>Send</strong> in
                your email app. If nothing opened, email us directly at{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-navy-700 underline decoration-navy-700/40 underline-offset-2 hover:text-navy-900 dark:text-navy-300"
                >
                  {company.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="font-medium text-navy-700 underline decoration-navy-700/40 underline-offset-2 hover:text-navy-900 dark:text-navy-300"
                >
                  {company.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  formRef.current?.reset();
                  setSubject(SUBJECTS[0]);
                }}
                className="mt-6 text-sm font-medium text-navy-700 hover:text-navy-900 dark:text-navy-200 dark:hover:text-white"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-white">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-navy-700 dark:text-navy-200/80">
                  We reply within 4 business hours. Submitting opens your mail
                  client with the details pre-filled.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field id="firstName" label="First name" required />
                <Field id="lastName" label="Last name" required />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="email"
                  label="Work email"
                  type="email"
                  required
                />
                <Field id="company" label="Company" />
              </div>

              <div>
                <p className="mb-2 text-[11.5px] font-medium uppercase tracking-[0.18em] text-navy-700/80 dark:text-navy-300/70">
                  I'm interested in
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUBJECTS.map((s) => (
                    <label key={s} className="cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={s}
                        checked={subject === s}
                        onChange={() => setSubject(s)}
                        className="peer sr-only"
                      />
                      <span className="inline-flex items-center rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-all hover:border-navy-700/30 peer-checked:border-navy-700 peer-checked:bg-navy-700/10 peer-checked:text-navy-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-navy-100 dark:peer-checked:bg-white/10 dark:peer-checked:text-white">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.18em] text-navy-700/80 dark:text-navy-300/70"
                >
                  Tell us about your need
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Roles you're hiring for, technology you want to build, problems you're solving…"
                  className="w-full rounded-2xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-600/40 transition-colors focus:border-navy-700 focus:outline-none dark:border-white/10 dark:bg-navy-950/50 dark:text-white dark:placeholder:text-navy-300/30"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-navy-200/60 pt-5 dark:border-white/5">
                <p className="text-[11px] text-navy-700/70 dark:text-navy-300/60">
                  By submitting you agree to our privacy practices.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-70"
                >
                  {submitting ? "Opening mail…" : "Send message"}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11.5px] font-medium uppercase tracking-[0.18em] text-navy-700/80 dark:text-navy-300/70"
      >
        {label} {required && <span className="text-navy-700">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={
          id === "email"
            ? "email"
            : id === "firstName"
            ? "given-name"
            : id === "lastName"
            ? "family-name"
            : id === "company"
            ? "organization"
            : "off"
        }
        className="h-12 w-full rounded-2xl border border-navy-200 bg-white px-4 text-sm text-navy-900 placeholder:text-navy-600/40 transition-colors focus:border-navy-700 focus:outline-none dark:border-white/10 dark:bg-navy-950/50 dark:text-white"
      />
    </div>
  );
}
