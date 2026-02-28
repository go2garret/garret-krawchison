"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { useRef, useEffect, useState } from "react";
import { Sparkles } from "./Sparkles";

export default function ContactForm() {
  // formspree hook (endpoint ID from https://formspree.io/f/mqedjdnk)
  const [state, handleSubmit] = useForm("mqedjdnk");
  const formRef = useRef<HTMLFormElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  // when the form has been sent successfully clear the fields, hide the form,
  // and trigger a brief sparkle/fireworks animation
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  /*
  Old custom fetch logic replaced by Formspree's handleSubmit:

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    ...
  };
  */


  return (
    <section id="contact" className="w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Have a question or want to work together? Send us a message.
          </p>
        </div>

        {state.succeeded && (
          <div className="mb-6 text-center rounded-lg bg-emerald-500/20 border border-emerald-500/50 p-4 text-emerald-300 relative overflow-hidden">
            <div className="font-2xl rounded-full bg-emerald-500/50 w-14 h-14 mx-auto flex justify-center items-center mb-4">✓</div>
            <div className="text-xl">Thank you! Your message has been sent successfully.</div>
            <div className="mt-2 text-slate-200"> I will recieve an email and get back to you as soon as possible.</div>
            {showAnimation && <Sparkles />}
          </div>
        )}

        {/* only show the form when not yet succeeded */}
        {!state.succeeded && (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message here..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-700 transition-all duration-200 cursor-pointer"
          >
            {state.submitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
        )}
      </div>
    </section>
  );
}
