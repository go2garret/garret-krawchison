"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useContactSuccess } from "./ContactSuccessProvider";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

const contactLinks = [
  { label: "GitHub", href: "https://github.com/go2garret", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/garret-krawchison", icon: LinkedInIcon },
  { label: "CodePen", href: "https://codepen.io/g2g", icon: CodePenIcon },
] as const;

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.24 9.23 7.73 10.72.56.1.77-.24.77-.54v-2.1c-3.15.69-3.81-1.33-3.81-1.33-.52-1.32-1.27-1.67-1.27-1.67-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.51-.29-5.14-1.26-5.14-5.59 0-1.23.43-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.03 0 0 .95-.3 3.12 1.16a10.83 10.83 0 0 1 5.69 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.58.24 2.74.12 3.03.73.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.3-5.16 5.58.4.35.77 1.06.77 2.13v3.17c0 .3.2.65.78.54A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45H16.9v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function CodePenIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" aria-hidden="true">
      <path d="m12 2 9 6v8l-9 6-9-6V8l9-6Z" />
      <path d="m12 2v7m0 6v7M3 8l9 7 9-7M3 16l9-7 9 7" />
    </svg>
  );
}

function fieldHasError(errors: ContactFieldsFormState["errors"], field: keyof ContactFields) {
  return Boolean(errors?.getFieldErrors(field).length);
}

type ContactFieldsFormState = ReturnType<typeof useForm<ContactFields>>[0];

export default function ContactForm() {
  const [state, handleSubmit, resetForm] = useForm<ContactFields>("mqedjdnk");
  const { showContactSuccess } = useContactSuccess();
  const formRef = useRef<HTMLFormElement>(null);
  const hasAnnouncedSuccessRef = useRef(false);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!state.succeeded) {
      hasAnnouncedSuccessRef.current = false;
      return;
    }

    if (hasAnnouncedSuccessRef.current) {
      return;
    }

    hasAnnouncedSuccessRef.current = true;
    showContactSuccess();
    formRef.current?.reset();

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      resetForm();
      resetTimerRef.current = null;
    }, 2400);
  }, [resetForm, showContactSuccess, state.succeeded]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const nameHasError = fieldHasError(state.errors, "name");
  const emailHasError = fieldHasError(state.errors, "email");
  const messageHasError = fieldHasError(state.errors, "message");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-paper py-20 text-ink sm:py-24 lg:py-28">
      <div className="site-wrap">
        <div className="grid border-[3px] border-ink bg-paper shadow-brutal lg:grid-cols-[0.78fr_1.22fr]">
          <div className="p-6 sm:p-9 lg:border-r-[3px] lg:border-ink lg:p-12 xl:p-14">
            <p className="mb-6 flex items-center gap-4 font-mono text-sm font-bold text-muted">
              <span aria-hidden="true" className="font-sans text-3xl font-bold leading-none text-lime-strong">
                /
              </span>
              <span>{"// contact"}</span>
            </p>

            <h2 id="contact-heading" className="font-display text-4xl font-black leading-none tracking-normal sm:text-5xl lg:text-6xl">
              Get in Touch
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Have a question or want to work together? Send me a message.
            </p>

            <nav aria-label="Social profiles" className="mt-8 flex flex-wrap gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="pressable flex size-14 items-center justify-center border-[3px] border-ink bg-paper-bright shadow-brutal-sm hover:bg-ink hover:text-lime sm:size-16"
                  >
                    <Icon />
                  </a>
                );
              })}
            </nav>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-12 xl:p-14">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block font-mono text-sm font-bold uppercase text-muted">
                  Name
                </label>
                <div className="group relative mt-3">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-invalid={nameHasError}
                    aria-describedby={nameHasError ? "name-error" : undefined}
                    className="w-full border-[3px] border-ink bg-paper px-4 py-4 font-mono text-base text-ink outline-none focus:border-ink"
                  />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 hidden h-1 w-full bg-lime group-focus-within:block" />
                </div>
                <ValidationError id="name-error" prefix="Name" field="name" errors={state.errors} className="mt-2 min-h-5 font-mono text-xs font-bold text-ink" />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm font-bold uppercase text-muted">
                  Email
                </label>
                <div className="group relative mt-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-invalid={emailHasError}
                    aria-describedby={emailHasError ? "email-error" : undefined}
                    className="w-full border-[3px] border-ink bg-paper px-4 py-4 font-mono text-base text-ink outline-none focus:border-ink"
                  />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 hidden h-1 w-full bg-lime group-focus-within:block" />
                </div>
                <ValidationError id="email-error" prefix="Email" field="email" errors={state.errors} className="mt-2 min-h-5 font-mono text-xs font-bold text-ink" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block font-mono text-sm font-bold uppercase text-muted">
                  Message
                </label>
                <div className="group relative mt-3">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    aria-invalid={messageHasError}
                    aria-describedby={messageHasError ? "message-error" : undefined}
                    className="min-h-44 w-full resize-none border-[3px] border-ink bg-paper px-4 py-4 font-mono text-base text-ink outline-none focus:border-ink"
                  />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 hidden h-1 w-full bg-lime group-focus-within:block" />
                </div>
                <ValidationError id="message-error" prefix="Message" field="message" errors={state.errors} className="mt-2 min-h-5 font-mono text-xs font-bold text-ink" />
              </div>
            </div>

            <ValidationError errors={state.errors} className="mt-2 min-h-5 font-mono text-xs font-bold text-ink" />

            <button
              type="submit"
              disabled={state.submitting}
              className="pressable mt-8 inline-flex min-w-56 items-center justify-center border-[3px] border-ink bg-lime px-7 py-4 font-mono text-sm font-bold text-ink shadow-brutal disabled:cursor-wait disabled:opacity-75 sm:text-base"
            >
              {state.submitting ? "Sending..." : state.succeeded ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

