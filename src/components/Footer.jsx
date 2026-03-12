const Footer = () => {
  return (
    <footer className="mx-auto mt-12 mb-10 w-full max-w-4xl px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-md border border-black/10 bg-white/50 px-4 py-3 text-xs text-black/60 backdrop-blur-sm">
        <a
          href="https://github.com/Fr4n0m/bookshop-view-transitions-vite"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-black"
        >
          Open PRs on GitHub
        </a>
        <span className="text-black/30">|</span>
        <a
          href="https://codebyfran.es"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-black"
        >
          Fr4n0m
        </a>
      </div>
    </footer>
  );
};

export default Footer;
