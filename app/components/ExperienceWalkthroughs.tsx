"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ExperienceWalkthrough } from "@/app/data/experience";

type ExperienceWalkthroughsProps = {
  company: string;
  dates: string;
  role: string;
  walkthroughs?: ExperienceWalkthrough[];
};

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5 fill-current">
      <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 stroke-current">
      <path d="m5 5 10 10M15 5 5 15" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

function ModalImage({ image }: { image: NonNullable<ExperienceWalkthrough["images"]>[number] }) {
  return (
    <figure className="border-[3px] border-ink bg-paper-bright p-2 shadow-[6px_6px_0_var(--color-ink,#0a0a0a)] sm:p-3">
      {image.label ? (
        <figcaption className="mb-2 inline-block border-2 border-ink bg-lime px-2 py-1 font-mono text-[10px] font-bold uppercase leading-none sm:text-xs">
          {image.label}
        </figcaption>
      ) : null}
      <div className="flex max-h-[38vh] min-h-36 items-center justify-center overflow-hidden border-2 border-ink/30 bg-paper-alt sm:max-h-[44vh] lg:max-h-[48vh]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1280}
          height={820}
          sizes="(max-width: 768px) 88vw, 760px"
          className="block max-h-[38vh] w-auto max-w-full object-contain sm:max-h-[44vh] lg:max-h-[48vh]"
        />
      </div>
    </figure>
  );
}

export default function ExperienceWalkthroughs({
  company,
  dates,
  role,
  walkthroughs,
}: ExperienceWalkthroughsProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState<ExperienceWalkthrough | null>(null);

  useEffect(() => {
    if (!selected) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  if (!walkthroughs?.length) {
    return null;
  }

  const modal = selected ? (
    <div
      className="fixed inset-0 z-[1000] grid place-items-center overflow-y-auto p-4 sm:p-6 lg:p-8"
      onClick={() => setSelected(null)}
    >
      <div className="absolute inset-0 bg-ink/80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #1c1c1c 0 13px, #060606 13px 17px), radial-gradient(circle at 18% 16%, var(--paper) 0 1px, transparent 1.5px)",
          backgroundSize: "auto, 12px 12px",
        }}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 my-auto flex max-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col border-[3px] border-ink bg-paper text-ink shadow-[10px_10px_0_var(--color-lime,#b8f31d)] sm:max-h-[calc(100vh-3rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="border-b-[3px] border-ink bg-paper-bright p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-muted sm:text-sm">
                {company} / {dates}
              </p>
              <h3
                id={titleId}
                className="mt-2 font-display text-3xl font-black leading-none tracking-[-0.045em] sm:text-5xl"
              >
                {selected.title}
              </h3>
              <p className="mt-2 font-mono text-xs font-semibold text-ink sm:text-sm">
                {role}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelected(null)}
              className="pressable flex size-10 shrink-0 items-center justify-center border-[3px] border-ink bg-lime shadow-brutal-sm sm:size-12"
            >
              <span className="sr-only">Close walkthrough</span>
              <CloseIcon />
            </button>
          </div>
        </header>

        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] lg:items-start">
            <div className="border-[3px] border-ink bg-paper-bright p-4 shadow-[6px_6px_0_var(--color-ink,#0a0a0a)] sm:p-5">
              <p className="whitespace-pre-wrap text-sm leading-7 text-ink/85 sm:text-base sm:leading-8">
                {selected.description}
              </p>

              {selected.links?.length ? (
                <div className="mt-6 border-t-2 border-ink pt-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-wide text-muted">
                    Examples
                  </p>
                  <div className="mt-3 grid gap-3">
                    {selected.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pressable block border-2 border-ink bg-paper px-3 py-3 font-mono text-xs font-semibold shadow-brutal-sm sm:text-sm"
                      >
                        <span className="block text-ink">{link.label} ↗</span>
                        {link.description ? (
                          <span className="mt-1 block font-sans text-sm font-normal leading-6 text-ink/75">
                            {link.description}
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="grid gap-5">
              {selected.images?.length ? (
                selected.images.map((image) => <ModalImage key={image.src} image={image} />)
              ) : (
                <div className="border-[3px] border-ink bg-paper-bright p-8 text-center font-mono text-sm font-bold shadow-[6px_6px_0_var(--color-ink,#0a0a0a)]">
                  Walkthrough imagery coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : null;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        {walkthroughs.map((walkthrough) => (
          <button
            key={walkthrough.id}
            type="button"
            onClick={() => setSelected(walkthrough)}
            className="pressable inline-flex max-w-full items-center gap-2 border-[3px] border-ink bg-paper-bright px-3 py-2.5 font-mono text-xs font-bold shadow-brutal-sm sm:px-4 sm:text-sm"
            aria-haspopup="dialog"
          >
            <span className="flex size-6 shrink-0 items-center justify-center border-2 border-ink bg-lime text-ink">
              <PlayIcon />
            </span>
            <span>Walkthrough</span>
            <span className="max-w-[11rem] truncate text-muted sm:max-w-[15rem]">
              {walkthrough.title}
            </span>
          </button>
        ))}
      </div>

      {modal && typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}





