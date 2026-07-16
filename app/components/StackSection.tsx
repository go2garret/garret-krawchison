const webSkills = [
  "Vue.js",
  "React",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Linux",
  "Nginx",
  "Docker",
];

const geospatialSkills = [
  "Esri",
  "ArcPy",
  "PostGIS",
  "GDAL",
  "MapLibre",
  "Mapbox",
  "GeoJSON",
];

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="mb-7 font-mono text-base font-medium sm:text-lg">{title}</h3>
      <ul className="flex flex-wrap gap-x-7 gap-y-6 sm:gap-x-9 sm:gap-y-7">
        {skills.map((skill) => (
          <li
            key={skill}
            className="pressable border-2 border-ink bg-paper-bright px-6 py-3 font-mono text-sm font-medium shadow-brutal-sm sm:px-8 sm:py-4 sm:text-base"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="border-y-2 border-ink bg-paper"
    >
      <div className="mx-6 border-y-[9px] border-ink py-20 sm:mx-8 sm:py-24 lg:py-28">
        <div className="site-wrap">
          <div className="mb-16 lg:mb-20">
            <p className="mb-6 flex items-center gap-4 font-mono text-sm font-medium tracking-[0.04em] sm:text-base">
              <span
                className="font-sans text-3xl leading-none font-bold text-lime-strong"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>{"// stack"}</span>
            </p>
            <h2
              id="stack-title"
              className="font-display text-[clamp(3.2rem,7vw,7.4rem)] leading-[0.95] font-bold tracking-[-0.055em]"
            >
              Tools I build with
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-[clamp(3rem,7vw,8rem)]">
            <SkillGroup title="Web development" skills={webSkills} />
            <SkillGroup title="Geospatial & mapping" skills={geospatialSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}
