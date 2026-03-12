import PropTypes from 'prop-types';
import TransitionLink from './TransitionLink';

const BookComponent = ({
  id,
  title,
  image,
  description,
  author,
  authorLink,
  price,
  rating,
  reviews,
  stock,
}) => {
  return (
    <div className='flex flex-col items-center md:mb-12'>
      <TransitionLink className="inline-block book mb-3 md:mb-5" to={`/${id}`}>
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

      <div className="flex h-[214px] w-[clamp(150px,43vw,275px)] flex-col px-1 text-left text-black md:h-[248px]">
        <TransitionLink to={`/${id}`}>
          <h2
            className="h-[42px] text-base font-extrabold uppercase leading-tight tracking-wide text-black transition hover:text-black/70 md:h-[52px] md:text-lg"
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
        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-black/45 md:mt-2 md:text-xs md:tracking-[0.18em]">Featured edition</p>
        <p className="mt-1 text-[10px] font-semibold text-black/60 md:text-xs">
          {rating.toFixed(1)} ★ · {reviews.toLocaleString()} ratings
        </p>
        <p
          className="mt-1 h-8 text-[11px] italic leading-4 text-black/70 md:mt-2 md:h-10 md:text-[13px] md:leading-5"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>
        <div className="mt-2 flex items-start justify-between gap-2 border-t border-black/10 pt-2 md:pt-3">
          <p className="text-xs text-black/80 md:text-sm">
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
          <div className="text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/40 md:text-[11px] md:tracking-[0.16em]">{stock}</p>
            <p className="whitespace-nowrap font-serif text-lg font-bold text-black/80 md:text-xl">{price} €</p>
          </div>
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
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  stock: PropTypes.string.isRequired,
};

export default BookComponent;
