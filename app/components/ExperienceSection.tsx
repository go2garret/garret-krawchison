import { experiences } from "@/app/data/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section id="work" aria-labelledby="experience-heading" className="scroll-mt-24 bg-paper py-20 text-ink sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <header className="mb-12 sm:mb-16 lg:mb-20">
          <p className="flex items-center gap-4 font-mono text-sm font-semibold sm:text-base">
            <span aria-hidden="true" className="text-2xl leading-none text-[#9ee600]">
              ✓
            </span>
            <span>{"// work log"}</span>
          </p>
          <h2
            id="experience-heading"
            className="mt-3 font-display text-6xl font-black leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl"
          >
            Experience
          </h2>
        </header>

        <div className="relative ml-2 border-l-[3px] border-ink sm:ml-3">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
