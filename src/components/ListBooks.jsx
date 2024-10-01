import BookItem from './BookItem';
import { books } from '../data/books';

const BookList = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
      {books.map((book) => (
        <li key={book.id}>
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
