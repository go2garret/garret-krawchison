export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="border-b-2 border-ink bg-paper py-16 sm:py-20 lg:py-24">
      <div className="site-wrap grid items-center gap-16 lg:grid-cols-[0.97fr_1.03fr] lg:gap-14 xl:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-4 font-mono text-sm font-semibold tracking-[0.03em] sm:text-base">
            <span aria-hidden="true" className="font-sans text-3xl font-bold leading-none text-lime-strong">
              ✓
            </span>
            <span>{"// full-stack engineer"}</span>
          </p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(4rem,8.4vw,8.2rem)] font-black leading-[0.86] tracking-[-0.065em]"
          >
            <span className="block">Garret</span>
            <span className="block">Krawchison</span>
          </h1>

          <p className="mt-8 inline-block border-[3px] border-ink bg-lime px-5 py-2 font-display text-[clamp(1.55rem,3.2vw,3.3rem)] font-bold leading-tight shadow-brutal sm:px-7 sm:py-3">
            Full-Stack Engineer
          </p>

          <p className="mt-8 max-w-2xl text-base leading-8 sm:text-lg lg:text-xl">
            Building web applications and geospatial systems for over a decade —
            from FAA data pipelines to a collaborative GIS platform used by teams
            today. Currently building Pastemap.com.
          </p>

          <div className="mt-9 flex flex-wrap gap-5">
            <a
              href="#work"
              className="pressable inline-flex min-w-40 items-center justify-center border-[3px] border-ink bg-lime px-7 py-4 font-mono text-sm font-bold shadow-brutal sm:text-base"
            >
              View work
            </a>
            <a
              href="#contact"
              className="pressable inline-flex min-w-40 items-center justify-center border-[3px] border-ink bg-paper-bright px-7 py-4 font-mono text-sm font-bold shadow-brutal sm:text-base"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-3xl px-2 py-4 sm:px-5 lg:px-0">
          <span aria-hidden="true" className="absolute inset-x-5 bottom-0 top-8 -z-10 rotate-[1.5deg] bg-slate-200 lg:inset-x-0 lg:translate-x-5" />
          <div className="-rotate-[0.8deg] overflow-hidden rounded-[10px] border-[4px] border-ink bg-editor text-editor-line shadow-[0_0_0_2px_var(--paper)]">
            <div className="grid grid-cols-[auto_1fr] border-b-2 border-editor-line">
              <div className="flex items-center gap-3 border-r-2 border-editor-line px-5 py-4 sm:px-7">
                <span className="size-4 rounded-full border-2 border-editor-line sm:size-5" />
                <span className="size-4 rounded-full border-2 border-editor-line sm:size-5" />
                <span className="size-4 rounded-full border-2 border-editor-line sm:size-5" />
              </div>
              <div className="relative flex items-center px-5 font-mono text-xs font-bold sm:px-7 sm:text-base">
                profile.ts
                <span aria-hidden="true" className="absolute bottom-0 left-4 h-1 w-36 bg-lime sm:w-44" />
              </div>
            </div>

            <div className="overflow-x-auto px-5 py-8 font-mono text-[11px] leading-[2] sm:px-9 sm:py-10 sm:text-sm lg:text-[clamp(0.75rem,1vw,1rem)] xl:px-12 xl:py-12">
              <code className="block min-w-max">
                <span className="text-lime">const</span> engineer = {"{"}
                <br />
                &nbsp;&nbsp;name: <span className="text-paper-bright">&apos;Garret Krawchison&apos;</span>,
                <br />
                &nbsp;&nbsp;title: <span className="text-paper-bright">&apos;Full-Stack Engineer&apos;</span>,
                <br />
                &nbsp;&nbsp;location: <span className="text-paper-bright">&apos;San Diego, CA&apos;</span>,
                <br />
                &nbsp;&nbsp;focus: [<span className="text-paper-bright">&apos;web apps&apos;</span>, <span className="text-paper-bright">&apos;geospatial tools&apos;</span>],
                <br />
                &nbsp;&nbsp;building: <span className="text-paper-bright">&apos;NewScene.ai&apos;</span>,
                <br />
                {"};"} <span aria-hidden="true" className="hero-cursor inline-block h-[1.15em] w-2 translate-y-[0.16em] bg-lime" />
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
