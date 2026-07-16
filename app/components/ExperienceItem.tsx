import type { Experience } from "@/app/data/experience";
import ExperienceArtwork from "./ExperienceArtwork";
import Reveal from "./Reveal";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

function Highlights({ highlights }: { highlights: string[] }) {
  return (
    <ul className="mt-5 border-2 border-ink bg-paper shadow-[5px_5px_0_var(--color-ink,#0a0a0a)]">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex gap-3 border-b border-ink px-3 py-2.5 font-mono text-[11px] font-medium leading-relaxed last:border-b-0 sm:px-4 sm:text-xs lg:text-[13px]"
        >
          <span aria-hidden="true" className="font-bold text-[#8ecf00]">
            +
          </span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

function MetricCard({ metric }: { metric: NonNullable<Experience["metric"]> }) {
  return (
    <aside className="mt-5 border-2 border-ink bg-paper p-4 shadow-[6px_6px_0_var(--color-ink,#0a0a0a)] sm:p-5 lg:min-w-56">
      <strong className="block whitespace-nowrap font-display text-4xl font-black leading-none tracking-tight sm:text-5xl">
        {metric.value}
        {metric.suffix ? <span className="ml-2 text-xl sm:text-2xl">{metric.suffix}</span> : null}
      </strong>
      <span className="mt-3 block font-mono text-xs font-semibold leading-snug sm:text-sm">
        {metric.label}
      </span>
    </aside>
  );
}

export default function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const artworkFirst = index % 2 === 0;
  const isMapFeature = experience.artwork.variant === "map-card" || experience.artwork.variant === "map-callout";

  if (isMapFeature) {
    const mapFirst = experience.artwork.variant === "map-card";
    const artwork = (
      <div className={mapFirst ? "lg:col-span-5" : "lg:col-span-7 group"}>
        <ExperienceArtwork artwork={experience.artwork} />
      </div>
    );
    const details = (
      <div className={`${mapFirst ? "lg:col-span-7" : "lg:col-span-5 lg:row-start-1"} self-center`}>
        <p className="font-mono text-xs font-semibold tracking-wide text-muted sm:text-sm">
          {experience.dates}
        </p>
        <h3 className="mt-2 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-ink sm:text-5xl xl:text-6xl">
          {experience.company}
        </h3>
        <p className="mt-3 font-mono text-sm font-semibold text-ink sm:text-base">
          {experience.role}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg">
          {experience.description}
        </p>
        <div className={experience.metric ? "lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8" : ""}>
          <Highlights highlights={experience.highlights} />
          {experience.metric ? <MetricCard metric={experience.metric} /> : null}
        </div>
      </div>
    );

    return (
      <Reveal className="relative pb-20 pl-8 last:pb-0 sm:pl-12 lg:pb-24 lg:pl-16">
        <span
          aria-hidden="true"
          className="absolute -left-[10px] top-1 z-20 size-5 border-[3px] border-ink bg-lime shadow-[2px_2px_0_var(--color-ink,#0a0a0a)] sm:-left-[11px] sm:size-6"
        />
        <article aria-labelledby={`${experience.id}-title`} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {mapFirst ? artwork : details}
          {mapFirst ? details : artwork}
        </article>
        <span id={`${experience.id}-title`} className="sr-only">
          {experience.company} experience
        </span>
      </Reveal>
    );
  }

  const artwork = (
    <div className={artworkFirst ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6 group"}>
      <ExperienceArtwork artwork={experience.artwork} metric={experience.metric} />
    </div>
  );

  const details = (
    <div
      className={`self-center ${
        artworkFirst ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-1 lg:row-start-1"
      }`}
    >
      <p className="font-mono text-xs font-semibold tracking-wide text-muted sm:text-sm">
        {experience.dates}
      </p>
      <h3 className="mt-2 font-display text-4xl font-black leading-[0.95] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.5rem]">
        {experience.company}
      </h3>
      <p className="mt-3 font-mono text-sm font-semibold text-ink sm:text-base">
        {experience.role}
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
        {experience.description}
      </p>

      <Highlights highlights={experience.highlights} />
    </div>
  );

  return (
    <Reveal className="relative pb-20 pl-8 last:pb-0 sm:pl-12 lg:pb-28 lg:pl-16">
      <span
        aria-hidden="true"
        className="absolute -left-[10px] top-1 z-20 size-5 border-[3px] border-ink bg-lime shadow-[2px_2px_0_var(--color-ink,#0a0a0a)] sm:-left-[11px] sm:size-6"
      />
      <article aria-labelledby={`${experience.id}-title`} className="grid gap-9 lg:grid-cols-12 lg:gap-12">
        {artworkFirst ? artwork : details}
        {artworkFirst ? details : artwork}
      </article>
      <span id={`${experience.id}-title`} className="sr-only">
        {experience.company} experience
      </span>
    </Reveal>
  );
}