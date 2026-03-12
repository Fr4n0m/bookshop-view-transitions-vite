const Header = () => {
  return (
    <header className="px-4 pt-10 pb-6 text-center">
      <span className="inline-block rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-black/60 backdrop-blur-sm">
        React Demo
      </span>
      <h1
        className="mt-5 font-black uppercase leading-[0.9] text-black"
        style={{ viewTransitionName: 'book-title' }}
      >
        <span className="block text-[clamp(1.5rem,3vw,2.25rem)] tracking-[0.32em] text-black/65">
          View Transitions
        </span>
        <span className="block bg-gradient-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text pt-2 text-[clamp(3.2rem,11vw,7.4rem)] tracking-[0.04em] text-transparent">
          Library
        </span>
      </h1>
    </header>
  );
};

export default Header;
