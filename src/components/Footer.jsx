
const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-10 bg-black/60 backdrop-blur-lg mt-16 mb-16">
      <div className="m-10 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white/60 sm:text-center">
          © 2024&nbsp;
          <a
            href="https://www.linkedin.com/in/francisco-jos%C3%A9-r-5b2181bb/"
            className="hover:underline"
          >
             Francisco José Rodríguez Martínez
          </a>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 gap-4 text-sm font-medium text-white/60 sm:mt-0">
          <li>
            <a href="mailto:Fran11799@outlook.com" className="hover:underline">
              Contacto
            </a>
          </li>
          <li>
            <a
              href="https://professional-portfolio-nine.vercel.app/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
