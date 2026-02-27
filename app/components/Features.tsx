"use client";

import { useState, useEffect } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [selected, setSelected] = useState<{ jobIndex: number; projectIndex: number } | null>(null);

  const jobs: Job[] = [
    {
      company: "Pastemap.com",
      title: "Founder, Builder",
      dateRange: "Jul 2023 – Present",
      description:
        "Launched Pastemap.com, a modern, browser-based GIS platform focused on collaboration and custom mapping workflows. The platform supports real-time client updates via Laravel Reverb, imports external datasets into vector tiles using PostGIS, and includes advanced printing and custom mapping tools.",
      projects: [
        {
          title: "Sharing Maps",
          description:
            "One of the most exciting features I developed for Pastemap is map sharing and collaboration. Users can selectively share maps with team members, providing fine-grained privacy controls. Maps can also be published publicly, allowing custom maps to be shared with a wider audience.\n\nTo support this, I designed and built a collaborators system that allows users to search for other Pastemap users and add them as collaborators on a map. Collaborators can view maps and edit map documents, enabling teams to collaboratively label, annotate, and enhance map content.",
          images: [
            "/collaborators.webp",
            "/public-map.png",
          ],
        },
        {
          title: "Map Attachments & Symbols",
          description:
            "I introduced a flexible attachment system that allows users to associate rich external content with their map data. Users can link documents hosted on the web—such as Google Docs and other online resources—and display them contextually on the map by type. This feature enables visually rich, data-driven maps that are shaped directly by user input.",
          images: "/land-owners.webp",
        },
      ],
    },

    {
      company: "Leonard’s Studio",
      title: "Senior Systems Engineer",
      dateRange: "Dec 2018 – Jul 2023",
      description:
        "Primary contributor to a new School Admin Portal and Digital ID app used across client schools. Led full-stack development, stakeholder collaboration, and modernization efforts that improved operational workflows and customer adoption.",
      projects: [
        {
          title: "School Admin Portal",
          description:
            "I helped design and build a brand-new portal to support customer relations and internal operations for a large team of photographers serving hundreds of schools. I was the primary contributor to this multi-year project, working closely with stakeholders and management throughout development.\n\nThe portal was built from the ground up using Vue 3, Laravel, C#, and MySQL. It provided internal employees with tools to manage data for hundreds of thousands of students, while giving school administrators the ability to update student information, select preferred photos, and manage workflows. Access and functionality were controlled through a custom user permissions model.\n\nThis portal became a major marketing asset for the company, giving schools modern tools to interact with student data and the yearbook process. Following its launch, Leonard's saw a 29% increase in the number of schools served, with strong enthusiasm across internal teams.",
          images: [
            "/school-portal-desktop.png",
            "/digital-id-logins.png",
          ],
        },
        {
          title: "Digital ID App",
          description:
            "I led development on a new Digital ID application that allowed students to access their school IDs directly from their phones. The system included both a student-facing mobile experience and an administrative management tool—the Digital ID Manager—integrated into the School Admin Portal.\n\nOne of the most impactful features was the ability for schools to send notifications directly to students through the app. Schools could broadcast messages campus-wide or target specific grades or individual students.\n\nThe app reached 20,000+ registered users, with thousands of daily logins. It became a key selling point for the sales team and helped drive new customer adoption.",
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
            "I built automation to support large portions of the workflow for importing, processing, and publishing high-resolution railroad mapping data. A particularly rewarding component was the automated calibration of railroad networks with accurate milepost values using ArcMap Route Network tools, delivered through Python-enabled workflows. This alone saved hours of manual processing per dataset.\n\nThe Python tools handled the entire pipeline: importing raw CAD data, performing quality control, applying labels, and populating spatial attributes. These tools captured institutional knowledge and transformed it into a cohesive automation framework, allowing the team to process data significantly faster and more reliably.",
          images: "/railroad-subdivisions.webp",
        },
        {
          title: "Subdivision Polygon Automation",
          description:
            "CSX faced a long-standing challenge in creating subdivision polygons from railroad line data so subdivision areas could be clearly visualized on maps. Technicians were manually maintaining these polygons, which was time-consuming and error-prone.\n\nWe evaluated the Thiessen polygon approach for converting line attributes into polygon regions, but processing 24,000 miles of track at once exceeded memory limits. I engineered a solution that divided the data into a vector grid, processing each cell independently and merging the results into a master layer. This approach made large-scale polygon generation reliable and repeatable.",
          images: "/railway-subdivisions.webp",
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
            "I independently developed a fully automated Python workflow to extract new wind turbine applications from FAA open datasets, updated weekly. The data was loaded into an SDE Enterprise database and analyzed to identify competitor projects, generate project boundaries, and summarize total project kHz and forecast timelines.\n\nThis work became a core component of a broader business intelligence initiative, giving leadership near real-time visibility into competitor activity. The executive team was highly enthusiastic about the results, as it significantly improved market awareness and strategic planning.",
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

  function openModal(jobIndex: number, projectIndex: number) {
    setSelected({ jobIndex, projectIndex });
    setModalOpen(true);
  }

  function closeModal() {
    // play exit animation first, then hide
    setIsShowing(false);
    setTimeout(() => {
      setModalOpen(false);
      setSelected(null);
    }, 300);
  }

  useEffect(() => {
    if (modalOpen) {
      // ensure show state is enabled for entry animation
      requestAnimationFrame(() => setIsShowing(true));
    }
  }, [modalOpen]);

  function renderModalImages(images?: ImageProp) {
    if (!images) {
      return (
        <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center border border-slate-700">
          <div className="text-center text-slate-500">
            <p className="text-sm">Coming soon</p>
          </div>
        </div>
      );
    }

    const imgs = Array.isArray(images) ? images : [images];

    return (
      <div className="flex flex-col items-center justify-center py-2 space-y-4">
        {imgs.map((src, i) => (
          <div key={i} className="inline-block rounded-lg overflow-hidden border border-slate-500 shadow-lg shadow-blue-500/10 mx-auto">
            <img src={src} alt={`project-${i}`} className="block max-w-full h-auto" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id="work" className="w-full bg-slate-950 pt-20 sm:pt-32">
      <div className="mx-auto">
        <div className="space-y-16">
          {jobs.map((job, jobIndex) => (
            <div key={jobIndex} className="w-full">
              {/* Job Overview - lighter background (full width) */}
              <div className="bg-slate-900 px-6 py-24 sm:px-8 sm:py-24 text-left lg:text-center border-b border-slate-800">
                <div className="max-w-6xl mx-auto">
                  <h3 className="text-4xl font-semibold text-blue-400 tracking-tight">{job.company}</h3>
                  <p className="mt-1 text-4xl uppercase font-semibold  text-white tracking-tight">{job.title}</p>
                  <p className="mt-1 text-slate-400 text-sm">{job.dateRange}</p>
                  <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl mx-auto">{job.description}</p>
                </div>
              </div>

              {/* Projects - darker background (full width) */}
              <div className="bg-slate-950  border-slate-800 px-8">
                <div className="max-w-6xl mx-auto space-y-0">
                  {job.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="grid gap-8 lg:grid-cols-2 lg:items-center  py-24 sm:px-8">
                      <div className="text-left">
                        <p className="text-sm tracking-normal font-semibold text-blue-400 uppercase">
                          {job.company}
                        </p>
                        <h4 className="mt-3 text-4xl font-semibold text-white tracking-tight">{project.title}</h4>
                        <p className="mt-4 text-slate-400 leading-relaxed whitespace-pre-wrap">{project.description}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          <button
                            onClick={() => openModal(jobIndex, projectIndex)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm cursor-pointer transition-colors duration-200"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.5v6l5-3-5-3z" clipRule="evenodd" />
                            </svg>
                            <span>Walkthrough</span>
                          </button>

                          {job.company === "Pastemap.com" && project.title === "Sharing Maps" && (
                            <a
                              href="https://pastemap.com/@Michael/Wind-Turbines"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg shadow-sm transition-colors duration-200"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6m4-4h6m0 0v6m0-6L10 14" />
                              </svg>
                              <span>Jump to Example</span>
                            </a>
                          )}
                        </div>
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

      {(modalOpen || isShowing) && selected && (() => {
        const job = jobs[selected.jobIndex];
        const project = job.projects[selected.projectIndex];
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isShowing ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              onClick={closeModal}
            />

            <div className={`relative max-w-4xl w-full mx-4 max-h-[90vh] h-auto bg-slate-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col ${isShowing ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}>
              <div className="px-8 py-6 border-b border-slate-800 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-400">{job.company}</p>
                </div>
                <button onClick={closeModal} className="text-slate-400 hover:text-white">
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8 space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <p className="text-slate-300 whitespace-pre-wrap">{project.description}</p>
                </div>

                {job.company === "Pastemap.com" && project.title === "Sharing Maps" && (
                  <div className="pt-6 space-y-4">
                    <h4 className="text-lg font-semibold text-white">Check out some examples</h4>
                    <p className="text-slate-300">
                      These are custom maps made using PasteMap. Users can upload their own data and share with the world. Each map has unique user provided data containing user defined styles and symbols.
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-4">
                      <li>
                        <a
                          href="https://pastemap.com/@Michael/Railway-Subdivisions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Railway Subdivisions
                        </a>
                        : This map shows railway lines categorized by subdivision names. It also displays subdivision polygons created using a custom Voronoi polygons process, which converts the subdivision railway line data into polygon shapes.
                      </li>
                      <li>
                        <a
                          href="https://pastemap.com/@Michael/Wind-Turbines"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Wind Turbines
                        </a>
                        : This map shows wind turbine data from the FAA Wind Turbines publicly available dataset. Wind turbines have been symbolized using categories based on the KW output of each turbine.
                      </li>
                    </ul>
                  </div>
                )}

                <div>{renderModalImages(project.images)}</div>
              </div>
            </div>
          </div>
        );
      })()}

    </section>
  );
}
