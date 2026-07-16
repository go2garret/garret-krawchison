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

export type Experience = {
  id: string;
  dates: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  metric?: ExperienceMetric;
  artwork: ExperienceArtwork;
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
    artwork: {
      variant: "dashboard-phone",
      images: [
        {
          src: "/school-portal-desktop.png",
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


