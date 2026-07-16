const contactLinks = [
  { label: "GitHub", href: "https://github.com/go2garret" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/garret-krawchison" },
  { label: "CodePen", href: "https://codepen.io/g2g" },
] as const;

export default function ContactForm() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-paper py-20 text-ink sm:py-24 lg:py-28">
      <div className="site-wrap">
        <div className="grid gap-10 border-[3px] border-ink bg-paper p-6 shadow-brutal sm:p-9 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:p-12">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-sm font-medium tracking-tight text-muted">
              <span aria-hidden="true" className="h-0.5 w-5 bg-lime" />
              <span>{"// contact"}</span>
            </p>
            <h2 id="contact-heading" className="max-w-2xl font-display text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Open to new projects, roles, and conversations about geospatial
              systems, full-stack architecture, or anything in between.
            </p>
          </div>

          <nav aria-label="Contact links" className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable group flex min-h-14 items-center justify-between gap-6 border-2 border-ink bg-paper-bright px-5 py-3.5 font-mono text-sm font-bold shadow-brutal-sm hover:bg-ink hover:text-lime sm:text-base"
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="text-xl leading-none">→</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
