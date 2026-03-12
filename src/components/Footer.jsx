const Footer = () => {
  return (
    <footer className="mx-auto mt-12 mb-10 w-full max-w-4xl px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-md border border-black/10 bg-white/50 px-4 py-3 text-xs text-black/60 backdrop-blur-sm">
        <a
          href="https://github.com/Fr4n0m/bookshop-view-transitions-vite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.6 4.6 0 0 1 1.2-3.2c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1a4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
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
