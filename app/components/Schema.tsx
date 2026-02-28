export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Garret Krawchison",
    jobTitle: "Full Stack Developer & Geospatial Engineer",
    description:
      "Garret Krawchison is a full stack developer and geospatial engineer who helps organizations solve complex problems.",
    url: "https://garret-krawchison.vercel.app",
    image: "https://garret-krawchison.vercel.app/profile.jpg",
    email: "mailto:go2garret@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/garret-krawchison",
      "https://github.com/go2garret"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of North Texas"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
