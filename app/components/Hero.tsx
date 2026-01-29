export default function Hero() {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm Gary, and I'm a Full-Stack Developer.
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto">
            Showcase your work, skills, and passion with a clean, modern design.
          </p>
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
