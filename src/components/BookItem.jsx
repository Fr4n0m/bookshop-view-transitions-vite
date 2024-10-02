import PropTypes from 'prop-types';

const BookComponent = ({ id, title, image, description, author, authorLink }) => {
  return (
    <div className='flex flex-col justify-center items-center md:mb-10'>
      <a
        className="inline-block book mb-2 md:mb-5 scale-75 md:scale-110"
        href={`/${id}`}
      >
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

      <div className="bottom-0 text-center left-0 p-2 -mt-10 md:mt-2 text-black">
        <a href={`/${id}`}>
          <h2 className=" text-lg font-bold -mt-3 hover:text-black/70">{title}</h2>
        </a>
        <p className="text-sm mt-2 italic">{description}</p>
        <p className="text-sm mt-2 text-black">
          By{' '}
          <a className="text-black font-bold hover:underline" href={authorLink}>
            {author}
          </a>
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
