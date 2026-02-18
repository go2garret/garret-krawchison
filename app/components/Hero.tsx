export default function Hero() {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden min-h-full ">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-32 relative z-10">
        <div className="text-center">
          <img src="/profile.jpg" alt="Garret Krawchison" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m Garret, and I&apos;m a Full-Stack Developer.
          </h1>
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="grid gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-slate-500 mb-4">Web Development</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Vue.js', 'React', 'Laravel', 'JavaScript', 'TypeScript', 'PHP', 'PostgreSQL', 'MySQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-200 hover:border-blue-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-500 mb-4">Geospatial & Mapping</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Esri', 'ArcPy', 'PostGIS', 'GDAL', 'MapLibre', 'Mapbox', 'Leaflet', 'GeoJSON'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-200 hover:border-purple-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200">
              Get Started
            </button>
            <button className="rounded-lg border border-slate-400 px-8 py-3 font-semibold text-white hover:bg-slate-800 hover:border-slate-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
