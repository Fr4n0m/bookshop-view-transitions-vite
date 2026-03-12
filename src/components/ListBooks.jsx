import BookItem from './BookItem';
import { books } from '../data/books';

const BookList = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-8 px-4 md:grid-cols-3 md:gap-x-4 md:gap-y-12">
      {books.map((book) => (
        <li key={book.id} className="flex justify-center">
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
