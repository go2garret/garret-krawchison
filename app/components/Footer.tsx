export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg text-white">Portfolio</h3>
            <p className="mt-2 text-slate-400">
              A clean, modern portfolio showcasing expertise in full-stack development and GIS systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white">Social</h3>
            <ul className="mt-2 space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
