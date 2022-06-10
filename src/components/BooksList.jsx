import { Link } from 'react-router-dom';

import { camelToTitle } from '../utils/strings';
import { BookCardBase, SelectNewBook, SelectOldBook } from './lib/BookHelpers';

const BooksList = ({ listTitle, books, onShelfChange, onAddBook }) => {
  return (
    <>
      <h3 className="list-title">{camelToTitle(listTitle)}</h3>
      <ul className="list-books">
        {books.map(book => {
          const isNewBook = book.shelf == null;

          return (
            <li key={book.id}>
              <div className="book-card">
                <BookCardBase book={book} />
                {isNewBook ? (
                  <SelectNewBook book={book} onAddBook={onAddBook} />
                ) : (
                  <SelectOldBook book={book} onShelfChange={onShelfChange} />
                )}

                {!isNewBook ? (
                  <Link to={`/${book.id}`} className="hover-accent">
                    <button className="outline">Expand details</button>
                  </Link>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BooksList;
