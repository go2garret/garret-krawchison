interface Project {
  title: string;
  description: string;
  image?: string;
}
import Image from "next/image";

type ImageProp = string | string[];

interface Project {
  title: string;
  description: string;
  images?: ImageProp;
}

interface Job {
  company: string;
  title: string;
  dateRange: string;
  location?: string;
  description: string;
  projects: Project[];
}

export default function Features() {
  const jobs: Job[] = [
    {
      company: "Pastemap.com",
      title: "Owner, Developer",
      dateRange: "Jul 2023 – Present",
      description:
        "Launched Pastemap.com, a modern, browser-based GIS platform focused on collaboration and custom mapping workflows. The platform supports real-time client updates via Laravel Reverb, imports external datasets into vector tiles using PostGIS, and includes advanced printing and custom mapping tools.",
      projects: [
        {
          title: "Sharing Maps & Map Attachments",
          description:
            "One of the most exciting features I developed for Pastemap is map sharing and collaboration. Users can selectively share maps with team members, providing fine-grained privacy controls. I also introduced a flexible attachment system that allows users to associate rich external content with their map data.",
          images: "/pastemap.jpg",
        },
      ],
    },

    {
      company: "Leonard’s Studio",
      title: "Senior Systems Engineer · Software Engineer",
      dateRange: "Dec 2018 – Jul 2023",
      location: "St. Augustine, FL",
      description:
        "Primary contributor to a new School Admin Portal and Digital ID app used across client schools. Led full-stack development, stakeholder collaboration, and modernization efforts that improved operational workflows and customer adoption.",
      projects: [
        {
          title: "School Admin Portal",
          description:
            "I helped design and build a brand-new portal to support customer relations and internal operations for a large team of photographers serving hundreds of schools. Built with Vue 3, Laravel, C#, and MySQL, it supported data management for hundreds of thousands of students and a custom permissions model.",
          images: [
            "/school-portal-desktop.png",
            "/digital-id-logins.png",
          ],
        },
        {
          title: "Digital ID App",
          description:
            "Led development on a Digital ID application allowing students to access IDs via phones. The app included push notifications and an admin manager integrated into the portal, reaching 20,000+ registered users and thousands of daily logins.",
          images: [
            "/app-notifications.webp",
            "/digital-id-manager.png",
            "/digital-id-mockup.jpg",
          ],
        },
      ],
    },

    {
      company: "Heery International (CSX Contractor)",
      title: "GIS Analyst",
      dateRange: "Jul 2011 – Mar 2017",
      location: "St. Augustine, FL",
      description:
        "Built automation to support importing, processing, and publishing high-resolution railroad mapping data. Implemented calibration workflows and tiled processing for subdivision polygons.",
      projects: [
        {
          title: "Hi-Res Railroad Mapping Project Automation",
          description:
            "Developed Python/ArcPy tools for the full pipeline: importing CAD, QC, labeling, calibration, and attribute population. Engineered a tiled processing approach to reliably generate subdivision polygons across large datasets.",
          images: "/railroad-subdivisions.webp",
        },
      ],
    },

    {
      company: "NextEra Energy Resources",
      title: "GIS Analyst",
      dateRange: "May 2008 – Jul 2011",
      location: "Juno Beach, FL",
      description:
        "Automated FAA data ingestion and nightly map production using Python, loading results into an SDE Enterprise database and supporting business intelligence workflows.",
      projects: [
        {
          title: "FAA Wind Turbines Data Analysis",
          description:
            "Built an automated Python workflow to extract weekly FAA turbine applications, generate project boundaries, and summarize forecasts—improving leadership visibility into competitor activity.",
          images: "/wind-turbines-map.webp",
        },
      ],
    },
  ];

  function renderImages(images?: ImageProp) {
    if (!images) {
      return (
        <div className="bg-slate-800 rounded-lg h-64 sm:h-80 lg:h-72 flex items-center justify-center border border-slate-700">
          <div className="text-center text-slate-500">
            <p className="text-sm">Coming soon</p>
          </div>
        </div>
      );
    }

    const imgs = Array.isArray(images) ? images : [images];

    if (imgs.length === 1) {
      return (
        <div className="rounded-lg overflow-hidden border border-slate-700 shadow-lg shadow-blue-500/10">
          <Image src={imgs[0]} alt="project" width={1200} height={720} className="w-full h-64 object-cover sm:h-80 lg:h-72 hover:scale-105 transition-transform duration-300" />
        </div>
      );
    }

    return (
      <div className="relative w-full h-64 sm:h-80 lg:h-72">
        {imgs.map((src, i) => {
          const base = "absolute rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shadow-lg";
          if (imgs.length === 2) {
            const classes =
              i === 0
                ? `${base} w-3/5 h-4/5 left-0 top-0 transform -translate-x-2 -translate-y-2 shadow-blue-500/20`
                : `${base} w-3/5 h-4/5 right-0 bottom-0 transform translate-x-2 translate-y-2 shadow-blue-500/30`;
            return (
              <div key={i} className={classes}>
                <Image src={src} alt={`project-${i}`} fill style={{ objectFit: "cover" }} className="hover:scale-105 transition-transform duration-300" />
              </div>
            );
          }

          if (i === 0) {
            return (
              <div key={i} className={`${base} w-1/3 h-2/3 left-0 top-0 transform -translate-x-4 -translate-y-4 shadow-blue-500/20`}>
                <Image src={src} alt={`project-${i}`} fill style={{ objectFit: "cover" }} className="hover:scale-105 transition-transform duration-300" />
              </div>
            );
          }

          if (i === 1) {
            return (
              <div key={i} className={`${base} w-2/3 h-full left-1/6 top-0 shadow-blue-500/30`}>
                <Image src={src} alt={`project-${i}`} fill style={{ objectFit: "cover" }} className="hover:scale-105 transition-transform duration-300" />
              </div>
            );
          }

          return (
            <div key={i} className={`${base} w-1/3 h-2/3 right-0 top-0 transform translate-x-4 -translate-y-4 shadow-blue-500/20`}>
              <Image src={src} alt={`project-${i}`} fill style={{ objectFit: "cover" }} className="hover:scale-105 transition-transform duration-300" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section id="work" className="w-full bg-slate-950 py-20 sm:py-32">
      <div className="mx-auto">
        <div className="mb-16 text-left lg:text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
          <p className="mt-4 text-lg text-slate-400">Proven expertise in full-stack development, GIS systems, and platform architecture.</p>
        </div>

        <div className="space-y-16">
          {jobs.map((job, jobIndex) => (
            <div key={jobIndex} className="w-full">
              {/* Job Overview - lighter background (full width) */}
              <div className="bg-slate-900 px-6 py-24 sm:px-8 sm:py-24 text-left lg:text-center border-b border-slate-800">
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                  <p className="mt-2 text-lg font-semibold text-blue-400">{job.title}</p>
                  <p className="mt-1 text-slate-400 text-sm">{job.dateRange}{job.location && ` • ${job.location}`}</p>
                  <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl mx-auto">{job.description}</p>
                </div>
              </div>

              {/* Projects - darker background (full width) */}
              <div className="bg-slate-950 px-6border-t border-slate-800">
                <div className="max-w-6xl mx-auto space-y-0">
                  {job.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="grid gap-8 lg:grid-cols-2 lg:items-center  py-24 sm:px-8">
                      <div className="text-left">
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                          {job.company}
                        </p>
                        <h4 className="mt-3 text-xl font-bold text-white">{project.title}</h4>
                        <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
                      </div>

                      <div>{renderImages(project.images)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
