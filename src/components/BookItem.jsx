import PropTypes from 'prop-types';
import TransitionLink from './TransitionLink';

const BookComponent = ({ id, title, image, description, author, authorLink, price }) => {
  return (
    <div className='flex flex-col items-center md:mb-12'>
      <TransitionLink className="inline-block book mb-2 scale-[0.72] sm:scale-75 md:mb-5 md:scale-110 xl:scale-[1.18]" to={`/${id}`}>
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

      <div className="flex h-[210px] w-[215px] flex-col px-1 text-left text-black sm:w-[225px] md:w-[248px] xl:w-[266px]">
        <TransitionLink to={`/${id}`}>
          <h2
            className="h-[52px] text-lg font-extrabold uppercase leading-tight tracking-wide text-black transition hover:text-black/70"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </h2>
        </TransitionLink>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-black/45">Featured edition</p>
        <p
          className="mt-2 h-10 px-4 text-[13px] italic leading-5 text-black/70 md:px-5"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/10 pt-3">
          <p className="text-sm text-black/80">
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
          <p className="whitespace-nowrap font-serif text-xl font-bold text-black/80">{price} €</p>
        </div>
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
