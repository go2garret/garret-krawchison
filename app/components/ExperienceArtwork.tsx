import Image from "next/image";
import type {
  ExperienceArtwork as ExperienceArtworkData,
  ExperienceImage,
  ExperienceMetric,
} from "@/app/data/experience";

type ExperienceArtworkProps = {
  artwork: ExperienceArtworkData;
  metric?: ExperienceMetric;
};

const framePositions = {
  overlap: [
    "absolute left-[2%] top-[9%] z-10 w-[65%] -rotate-[1.5deg]",
    "absolute bottom-[5%] right-[1%] z-20 w-[64%] rotate-[1.5deg]",
  ],
  "dashboard-phone": [
    "absolute bottom-[8%] left-0 z-10 w-[72%] -rotate-[1.25deg]",
    "absolute bottom-[4%] right-0 z-20 w-[34%] rotate-[1deg]",
  ],
  single: ["absolute inset-x-[5%] top-[9%] z-10 -rotate-[1.25deg]"],
  "map-card": ["absolute inset-x-[2%] top-[8%] z-10 -rotate-[1.5deg]"],
  "map-callout": ["absolute inset-x-[2%] top-[8%] z-10 -rotate-[1.25deg]"],
} as const;

function FrameCorners() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 font-mono text-[22px] leading-none text-ink">
      <span className="absolute -left-px -top-0.5">+</span>
      <span className="absolute -right-px -top-0.5">+</span>
      <span className="absolute -bottom-1 -left-px">+</span>
      <span className="absolute -bottom-1 -right-px">+</span>
    </span>
  );
}

function ImageFrame({ image, className }: { image: ExperienceImage; className: string }) {
  const portrait = image.shape === "portrait";

  return (
    <figure className={`${className} border-2 border-ink bg-paper p-2 shadow-[8px_8px_0_rgba(10,10,10,0.10)] sm:p-3`}>
      <span className="absolute -top-5 left-5 z-20 border-2 border-ink bg-paper px-4 py-1 font-mono text-[11px] font-semibold sm:text-xs">
        {image.label}
      </span>
      <div
        className={`relative overflow-hidden border border-ink/30 bg-[#e8e8e2] ${
          portrait ? "aspect-[3/4]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={portrait ? "(max-width: 768px) 34vw, 18vw" : "(max-width: 768px) 72vw, 42vw"}
          className={portrait ? "object-cover" : "object-cover object-top"}
          style={{ objectPosition: image.objectPosition }}
        />
      </div>
      {image.hideFigure ? null : (
        <figcaption className="mt-1 text-right font-mono text-[10px] font-medium sm:text-xs">
          {image.figure} ↘
        </figcaption>
      )}
      <FrameCorners />
    </figure>
  );
}

export default function ExperienceArtwork({ artwork, metric }: ExperienceArtworkProps) {
  const positions = framePositions[artwork.variant];
  const isDuo = artwork.variant !== "single";
  const isMap = artwork.variant === "map-card" || artwork.variant === "map-callout";

  return (
    <div
      className={`relative isolate w-full ${
        isMap
          ? "h-[255px] sm:h-[330px] lg:h-[350px]"
          : isDuo
            ? "h-[280px] sm:h-[390px] lg:h-[420px]"
            : "h-[265px] sm:h-[380px] lg:h-[400px]"
      }`}
    >
      {isMap ? null : (
        <span
          aria-hidden="true"
          className="absolute inset-x-[8%] bottom-[4%] top-[13%] -z-10 rotate-[1.5deg] bg-[#e3e0d5]"
        />
      )}

      {artwork.images.map((image, index) => (
        <ImageFrame
          key={image.src}
          image={image}
          className={positions[index] ?? positions[0]}
        />
      ))}

      {artwork.variant === "map-callout" && artwork.callout ? (
        <div className="absolute left-[58%] top-[55%] z-30 hidden items-center sm:flex">
          <span aria-hidden="true" className="size-4 rounded-full border-[3px] border-ink bg-lime" />
          <span aria-hidden="true" className="h-px w-24 bg-ink lg:w-36" />
          <span className="bg-paper pl-3 font-mono text-xs font-semibold sm:text-sm">
            {artwork.callout}
          </span>
        </div>
      ) : artwork.callout ? (
        <div className="absolute bottom-[18%] left-0 z-30 hidden items-center sm:flex">
          <span className="max-w-28 bg-paper pr-3 font-mono text-xs font-semibold leading-tight">
            {artwork.callout}
          </span>
          <span aria-hidden="true" className="h-px w-16 bg-ink" />
          <span aria-hidden="true" className="size-2 -translate-x-px rotate-45 border border-ink bg-lime" />
        </div>
      ) : null}

      {metric ? (
        <aside className="absolute bottom-0 left-[3%] z-30 w-32 border-2 border-ink bg-paper p-3 shadow-[6px_6px_0_var(--color-ink,#0a0a0a)] sm:w-40 sm:p-4">
          <strong className="block font-display text-3xl leading-none tracking-tight sm:text-5xl">
            {metric.value}
            {metric.suffix ? <span className="ml-1 text-base sm:text-xl">{metric.suffix}</span> : null}
          </strong>
          <span className="mt-2 block font-mono text-[10px] font-semibold leading-snug sm:text-xs">
            {metric.label}
          </span>
        </aside>
      ) : null}
    </div>
  );
}