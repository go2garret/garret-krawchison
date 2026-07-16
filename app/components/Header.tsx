const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
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

export default function Header() {
  return (
    <header className="border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <div className="site-wrap grid min-h-[4.75rem] grid-cols-[1fr_auto] items-center gap-x-4 py-3 md:grid-cols-[1fr_auto_1fr] md:py-4">
        <a href="#home" className="group flex w-fit items-center gap-4" aria-label="Garret Krawchison, home">
          <span className="pressable flex size-12 items-center justify-center border-[3px] border-ink bg-lime font-display text-xl font-black shadow-brutal-sm sm:size-14 sm:text-2xl">
            GK
          </span>
          <span className="hidden font-display text-base font-bold uppercase tracking-[0.12em] sm:block lg:text-lg">
            Garret Krawchison
          </span>
        </a>

        <nav aria-label="Primary navigation" className="col-span-2 row-start-2 mt-3 flex justify-between border-t-2 border-ink/15 pt-3 md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0 md:gap-10 md:border-0 md:pt-0 lg:gap-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-display text-sm font-bold tracking-wide after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-0 after:bg-lime after:transition-[width] after:duration-150 hover:after:w-full motion-reduce:after:transition-none sm:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="col-start-2 row-start-1 flex justify-self-end gap-3 md:col-start-3">
          <a
            href="https://github.com/go2garret"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="pressable flex size-11 items-center justify-center border-2 border-ink bg-paper-bright shadow-brutal-sm hover:bg-lime sm:size-12"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/garret-krawchison"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="pressable flex size-11 items-center justify-center border-2 border-ink bg-paper-bright shadow-brutal-sm hover:bg-lime sm:size-12"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

