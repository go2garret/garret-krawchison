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
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            I build full-stack web applications and geospatial tools that solve real problems. Currently building <span className="text-blue-300 font-semibold">Pastemap.com</span>, a collaborative GIS platform. I love combining elegant design with powerful backend systems to create experiences that people actually want to use.
          </p>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid space-y-8 text-center">
              <div>
                <h3 className="text-md font-semibold text-slate-200 mb-6">Web Development</h3>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                  {[
                    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
                    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
                    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
                    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
                    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
                    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group justify-start text-center">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-8 w-8 opacity-75 grayscale-25 hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        />
                      ) : null}
                      <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold text-slate-200 mb-6">Geospatial & Mapping</h3>
                <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
                  {[
                    { name: 'Esri', logo: '/esri.png' },
                    { name: 'ArcPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c3/20220821153845%21Python-logo-notext.svg/120px-Python-logo-notext.svg.png' },
                    { name: 'PostGIS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                    { name: 'GDAL', logo: '/osgeo.png' },
                    { name: 'MapLibre', logo: 'https://maplibre.org/maplibre-gl-js/docs/assets/logo.svg' },
                    { name: 'Mapbox', logo: 'https://images.icon-icons.com/2699/PNG/512/mapbox_logo_icon_169974.png' },
                    { name: 'GeoJSON', logo: 'https://cdn-icons-png.flaticon.com/512/136/136525.png' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group justify-center">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-8 w-8 w-auto grayscale-25 hover:grayscale-0 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                        />
                      ) : null}
                      <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="#work" className="rounded-lg hover:cursor-pointer bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-center">
              View My Work
            </a>
            <a href="#contact" className="rounded-lg hover:cursor-pointer border border-slate-400 px-8 py-3 font-semibold text-white hover:bg-slate-800 hover:border-slate-300 transition-colors text-center">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
