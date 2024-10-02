const Header = () => {
  return (
    <h1
      className="mt-8 mb-8 font-black uppercase text-3xl md:text-5xl text-center py-8 px-4 text-nowrap"
      style={{ viewTransitionName: 'book-title' }}
    >
      <span className="tracking-[14.3px] ml-3 md:tracking-[28.9px] md:ml-7">Librería de</span>
      <span className="block text-6xl md:text-[107px]">Fran11799</span>
    </h1>
  );
};

export default Header;
