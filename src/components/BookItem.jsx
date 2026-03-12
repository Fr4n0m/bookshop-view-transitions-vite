import PropTypes from 'prop-types';
import TransitionLink from './TransitionLink';

const BookComponent = ({ id, title, image, description, author, authorLink, price }) => {
  return (
    <div className='flex flex-col items-center md:mb-12'>
      <TransitionLink className="inline-block book mb-2 md:mb-5 scale-75 md:scale-110" to={`/${id}`}>
        <div className="book-cover">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            style={{ viewTransitionName: `book-${id}` }}
          />
          <div className="effect"></div>
          <div className="light"></div>
        </div>
        <div className="book-inside"></div>
      </TransitionLink>

      <div className="w-full max-w-[270px] rounded-2xl border border-black/10 bg-white/75 p-4 text-left text-black shadow-sm backdrop-blur-sm md:max-w-[290px]">
        <TransitionLink to={`/${id}`}>
          <h2 className="text-lg font-extrabold uppercase leading-tight tracking-wide text-black transition hover:text-black/70">
            {title}
          </h2>
        </TransitionLink>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-black/45">Featured edition</p>
        <p className="mt-2 min-h-14 text-sm italic leading-relaxed text-black/70">{description}</p>
        <p className="mt-3 text-sm text-black/80">
          By{' '}
          <a
            className="font-bold text-black transition hover:text-black/70 hover:underline"
            href={authorLink}
            target="_blank"
            rel="noreferrer"
          >
            {author}
          </a>
        </p>
        <p className="mt-4 inline-block rounded-lg border border-red-200 bg-red-50 px-3 py-1 font-serif text-2xl font-bold text-red-700">
          {price} €
        </p>
      </div>
    </div>
  );
};

BookComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BookComponent;
