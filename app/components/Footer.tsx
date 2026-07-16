export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper text-muted">
      <div className="site-wrap">
        <div className="flex flex-col gap-2 border-t-[3px] border-ink py-7 font-mono text-xs sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <span>© {currentYear} Garret Krawchison</span>
          <span>San Diego, CA</span>
        </div>
      </div>
    </footer>
  );
}
