import BookItem from './BookItem';
import { books } from '../data/books';

const BookList = () => {
  return (
    <ul className="grid grid-cols-1 gap-x-3 gap-y-10 px-4 sm:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-6">
      {books.map((book) => (
        <li key={book.id} className="flex justify-center">
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
