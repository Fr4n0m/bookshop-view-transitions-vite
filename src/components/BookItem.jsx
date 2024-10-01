import PropTypes from 'prop-types';

const BookComponent = ({ id, title, image, description, author, authorLink, price }) => {
  return (
    <>
      <a className="inline-block book scale-75 -ml-5 md:ml-2 md:scale-100" href={`/${id}`}>
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
      </a>

      <div className="bottom-0 left-0 p-2 -mt-10 md:mt-2 text-black">
        <h2 className="text-lg font-bold hover:text-black/70">{title}</h2>
        <p className="text-sm mt-5 italic">{description}</p>
        <p className="text-sm text-black">
          By{' '}
          <a className="text-black font-bold hover:underline" href={authorLink}>
            {author}
          </a>
        </p>
        <p className="text-3xl text-red-700 font-bold font-serif drop-shadow-md shadow-red-950">
          {price}€
        </p>
      </div>
    </>
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
