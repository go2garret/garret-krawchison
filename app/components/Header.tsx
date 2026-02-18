export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">GK</div>
          <span className="hidden md:flex">Garret Krawchison</span>
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-sm text-slate-200 hover:text-white">Home</a>
          <a href="#work" className="text-sm text-slate-200 hover:text-white">Work</a>
          <a href="#contact" className="text-sm text-slate-200 hover:text-white">Contact</a>
        </nav>

        <button className="md:hidden p-2 rounded-md text-slate-200 hover:bg-slate-800" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
