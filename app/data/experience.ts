export type ExperienceImage = {
  src: string;
  alt: string;
  label: string;
  figure: string;
  shape?: "landscape" | "portrait" | "vertical-3x2";
  objectPosition?: string;
  classes?: string;
  hideFigure?: boolean;
};

export type ExperienceMetric = {
  value: string;
  label: string;
  suffix?: string;
};

export type ExperienceArtwork = {
  variant: "overlap" | "dashboard-phone" | "single" | "map-card" | "map-callout";
  images: ExperienceImage[];
  callout?: string;
};

export type ExperienceWalkthroughImage = {
  src: string;
  alt: string;
  label?: string;
};

export type ExperienceWalkthroughLink = {
  label: string;
  href: string;
  description?: string;
};

export type ExperienceWalkthrough = {
  id: string;
  title: string;
  description: string;
  images?: ExperienceWalkthroughImage[];
  links?: ExperienceWalkthroughLink[];
};

export type Experience = {
  id: string;
  dates: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  metric?: ExperienceMetric;
  artwork: ExperienceArtwork;
  walkthroughs?: ExperienceWalkthrough[];
};

export const experiences: Experience[] = [
  {
    id: "newscene",
    dates: "2024 — Present",
    company: "NewScene",
    role: "Founder, Sole Developer",
    description:
      "An AI-powered creative platform that turns product photos into video ads and marketing assets — built for solo media buyers and DTC founders running paid campaigns on Meta and TikTok.",
    highlights: [
      "AI video ad generation from a single product photo, powered by a Seedance 2.0 pipeline",
      "nine-skill AI image suite — thumbnails, ad sets, banners, character sheets, and more",
      "Brand Kit system enforcing consistent color, font, and style across every generation",
    ],
    walkthroughs: [
      {
        id: "newscene-creative-pipeline",
        title: "Creative Pipeline",
        description:
          "NewScene is built around a practical paid-media workflow: start with a product photo, generate campaign-ready image variants, then move the strongest direction into a video ad pipeline.\n\nI built the product as the sole developer, including the image generation suite, video ad studio, and Brand Kit system that keeps generated assets visually consistent across colors, fonts, and style direction.",
        images: [
          {
            src: "/newscene-videos.webp",
            alt: "NewScene video ad studio showing a product photo moving through an AI pipeline into an ad preview",
            label: "video ad studio",
          },
          {
            src: "/newscene-images.webp",
            alt: "NewScene image suite grid for thumbnails, ad images, banners, and character sheets",
            label: "image suite",
          },
        ],
      },
    ],
    artwork: {
      variant: "overlap",
      images: [
        {
          src: "/newscene-images.webp",
          alt: "NewScene image suite grid for thumbnails, ad images, banners, and character sheets",
          label: "image-suite",
          figure: "fig 2",
          classes: "grayscale transition-filter",
        },
        {
          src: "/newscene-videos.webp",
          alt: "NewScene video ad studio showing a product photo moving through an AI pipeline into an ad preview",
          label: "video-ad-studio",
          figure: "fig 1",
          classes: "grayscale transition-filter",
        },
      ],
    },
  },
  {
    id: "pastemap",
    dates: "Jul 2023 — Present",
    company: "Pastemap.com",
    role: "Founder, Builder",
    description:
      "A browser-based, collaborative GIS platform focused on custom mapping workflows — real-time updates, vector-tile imports, and fine-grained sharing controls.",
    highlights: [
      "real-time collaboration via Laravel Reverb",
      "external dataset imports as PostGIS vector tiles",
      "granular map sharing and collaborator permissions",
    ],
    walkthroughs: [
      {
        id: "pastemap-sharing-maps",
        title: "Sharing Maps",
        description:
          "One of the most exciting features I developed for Pastemap is map sharing and collaboration. Users can selectively share maps with team members, providing fine-grained privacy controls. Maps can also be published publicly, allowing custom maps to be shared with a wider audience.\n\nTo support this, I designed and built a collaborators system that allows users to search for other Pastemap users and add them as collaborators on a map. Collaborators can view maps and edit map documents, enabling teams to collaboratively label, annotate, and enhance map content.",
        images: [
          {
            src: "/collaborators.webp",
            alt: "Pastemap collaborator permissions interface over a custom map",
            label: "collaborators",
          },
          {
            src: "/public-map.png",
            alt: "Pastemap public map showing geographic features and map controls",
            label: "public map",
          },
        ],
        links: [
          {
            label: "Railway Subdivisions",
            href: "https://pastemap.com/@Michael/Railway-Subdivisions",
            description:
              "A public map showing railway lines categorized by subdivision names, including subdivision polygons created from railway line data.",
          },
          {
            label: "Wind Turbines",
            href: "https://pastemap.com/@Michael/Wind-Turbines",
            description:
              "A public map built from FAA wind turbine data and symbolized by categories based on turbine output.",
          },
        ],
      },
      {
        id: "pastemap-attachments-symbols",
        title: "Map Attachments & Symbols",
        description:
          "I introduced a flexible attachment system that allows users to associate rich external content with their map data. Users can link documents hosted on the web, such as Google Docs and other online resources, and display them contextually on the map by type.\n\nThis feature enables visually rich, data-driven maps that are shaped directly by user input, while still fitting into Pastemap's collaborative map editing model.",
        images: [
          {
            src: "/public-map.png",
            alt: "Pastemap public map showing styled geographic features and map controls",
            label: "map document",
          },
        ],
      },
    ],
    artwork: {
      variant: "overlap",
      callout: "shared publicly",
      images: [
        {
          src: "/public-map.png",
          alt: "Pastemap public map showing geographic features and map controls",
          label: "public-map",
          figure: "fig 2",
          classes: "grayscale transition-filter",
        },
        {
          src: "/collaborators.webp",
          alt: "Pastemap collaborator permissions interface over a custom map",
          label: "map-sharing",
          figure: "fig 1",
          shape: "landscape",
          classes: "grayscale transition-filter",
        },
      ],
    },
  },
  {
    id: "leonards-studio",
    dates: "Dec 2018 — Jul 2023",
    company: "Leonard’s Studio",
    role: "Senior Systems Engineer",
    description:
      "Primary contributor on a new School Admin Portal and Digital ID app used across hundreds of client schools, built on Vue 3, Laravel, C#, and MySQL.",
    highlights: [
      "29% increase in schools served after launch",
      "20,000+ registered Digital ID app users",
      "campus-wide and targeted student notifications",
    ],
    metric: {
      value: "29%",
      label: "increase in schools served",
    },
    walkthroughs: [
      {
        id: "leonards-school-admin-portal",
        title: "School Admin Portal",
        description:
          "I helped design and build a brand-new portal to support customer relations and internal operations for a large team of photographers serving hundreds of schools. I was the primary contributor to this multi-year project, working closely with stakeholders and management throughout development.\n\nThe portal was built from the ground up using Vue 3, Laravel, C#, and MySQL. It provided internal employees with tools to manage data for hundreds of thousands of students, while giving school administrators the ability to update student information, select preferred photos, and manage workflows. Access and functionality were controlled through a custom user permissions model.\n\nThis portal became a major marketing asset for the company, giving schools modern tools to interact with student data and the yearbook process. Following its launch, Leonard's saw a 29% increase in the number of schools served, with strong enthusiasm across internal teams.",
        images: [
          {
            src: "/digital-id-manager.png",
            alt: "Leonard's Studio school administration portal dashboard",
            label: "admin portal",
          },
        ],
      },
      {
        id: "leonards-digital-id-app",
        title: "Digital ID App",
        description:
          "I led development on a new Digital ID application that allowed students to access their school IDs directly from their phones. The system included both a student-facing mobile experience and an administrative management tool, the Digital ID Manager, integrated into the School Admin Portal.\n\nOne of the most impactful features was the ability for schools to send notifications directly to students through the app. Schools could broadcast messages campus-wide or target specific grades or individual students.\n\nThe app reached 20,000+ registered users, with thousands of daily logins. It became a key selling point for the sales team and helped drive new customer adoption.",
        images: [
          {
            src: "/digital-id-mockup.jpg",
            alt: "Leonard's Studio student Digital ID mobile app",
            label: "mobile id",
          },
          {
            src: "/digital-id-manager.png",
            alt: "Leonard's Studio Digital ID Manager dashboard",
            label: "id manager",
          },
        ],
      },
    ],
    artwork: {
      variant: "dashboard-phone",
      images: [
        {
          src: "/digital-id-manager.png",
          alt: "Leonard’s Studio school administration portal dashboard",
          label: "school-portal",
          figure: "fig 1",
          classes: "grayscale transition-filter",
        },
        {
          src: "/digital-id-mockup.jpg",
          alt: "Leonard’s Studio student Digital ID mobile app",
          label: "digital-id",
          figure: "fig 2",
          shape: "portrait",
          objectPosition: "center top",
          classes: "grayscale transition-filter",
        },
      ],
    },
  },
  {
    id: "heery-international",
    dates: "Jul 2011 — Mar 2017",
    company: "Heery International",
    role: "GIS Analyst · CSX Contractor",
    description:
      "Built automation for importing, calibrating, and publishing high-resolution railroad mapping data across a 24,000-mile network.",
    highlights: [
      "automated milepost calibration with ArcPy pipelines",
      "24,000 miles of track processed via grid partitioning",
      "hours of manual QC removed per dataset",
    ],
    metric: {
      value: "24,000",
      suffix: "mi",
      label: "of track processed",
    },
    walkthroughs: [
      {
        id: "heery-railroad-mapping-automation",
        title: "Hi-Res Railroad Mapping Project Automation",
        description:
          "I built automation to support large portions of the workflow for importing, processing, and publishing high-resolution railroad mapping data. A particularly rewarding component was the automated calibration of railroad networks with accurate milepost values using ArcMap Route Network tools, delivered through Python-enabled workflows. This alone saved hours of manual processing per dataset.\n\nThe Python tools handled the entire pipeline: importing raw CAD data, performing quality control, applying labels, and populating spatial attributes. These tools captured institutional knowledge and transformed it into a cohesive automation framework, allowing the team to process data significantly faster and more reliably.",
        images: [
          {
            src: "/railroad-subdivisions.webp",
            alt: "Mapped CSX railroad subdivisions across the eastern United States",
            label: "railroad mapping",
          },
        ],
      },
      {
        id: "heery-subdivision-polygon-automation",
        title: "Subdivision Polygon Automation",
        description:
          "CSX faced a long-standing challenge in creating subdivision polygons from railroad line data so subdivision areas could be clearly visualized on maps. Technicians were manually maintaining these polygons, which was time-consuming and error-prone.\n\nWe evaluated the Thiessen polygon approach for converting line attributes into polygon regions, but processing 24,000 miles of track at once exceeded memory limits. I engineered a solution that divided the data into a vector grid, processing each cell independently and merging the results into a master layer. This approach made large-scale polygon generation reliable and repeatable.",
        images: [
          {
            src: "/railroad-subdivisions.webp",
            alt: "Mapped railroad subdivision regions across a large rail network",
            label: "subdivision polygons",
          },
        ],
      },
    ],
    artwork: {
      variant: "map-card",
      images: [
        {
          src: "/railroad-subdivisions.webp",
          alt: "Mapped CSX railroad subdivisions across the eastern United States",
          label: "railroad-mapping",
          figure: "fig 3",
          hideFigure: true,
          classes: "grayscale transition-filter",
        },
      ],
    },
  },
  {
    id: "nextera-energy",
    dates: "May 2008 — Jul 2011",
    company: "NextEra Energy Resources",
    role: "GIS Analyst",
    description:
      "Independently built a Python workflow to ingest FAA wind turbine filings weekly, feeding a competitor-tracking BI initiative for leadership.",
    highlights: [
      "weekly automated FAA data ingestion",
      "near real-time competitor visibility for leadership",
    ],
    walkthroughs: [
      {
        id: "nextera-faa-wind-turbines",
        title: "FAA Wind Turbines Data Analysis",
        description:
          "I independently developed a fully automated Python workflow to extract new wind turbine applications from FAA open datasets, updated weekly. The data was loaded into an SDE Enterprise database and analyzed to identify competitor projects, generate project boundaries, and summarize total project kHz and forecast timelines.\n\nThis work became a core component of a broader business intelligence initiative, giving leadership near real-time visibility into competitor activity. The executive team was highly enthusiastic about the results, as it significantly improved market awareness and strategic planning.",
        images: [
          {
            src: "/wind-turbines-map.webp",
            alt: "Wind turbine project map built from FAA filing data",
            label: "wind turbines",
          },
        ],
      },
    ],
    artwork: {
      variant: "map-callout",
      callout: "competitor site",
      images: [
        {
          src: "/wind-turbines-map.webp",
          alt: "Wind turbine project map built from FAA filing data",
          label: "wind-turbines",
          figure: "fig 4",
          hideFigure: true,
          classes: "grayscale contrast-[0.5] brightness-[1.4]",
        },
      ],
    },
  },
];
