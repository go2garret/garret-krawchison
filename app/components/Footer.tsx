export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg text-white">About</h3>
            <p className="mt-2 text-slate-400">
              See something that interests you? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
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
                <a href="https://github.com/go2garret" className="hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/garret-krawchison" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} A page by Garret Krawchison.</p>
        </div>
      </div>
    </footer>
  );
}
