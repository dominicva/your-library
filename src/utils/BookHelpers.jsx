import { camelToTitle } from './strings';

const SHELVES = ['currentlyReading', 'wantToRead', 'read'];

export const BookCardBase = ({ book }) => {
  return (
    <>
      <img
        className="book-image"
        src={book.imageLinks?.thumbnail}
        alt={book.title}
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <h4>{book.authors?.join(' & ')}</h4>
      </div>
    </>
  );
};

export const SelectNewBook = ({ book, onAddBook }) => {
  return (
    <select id="shelf" value="Move to..." onChange={e => onAddBook(book, e)}>
      <option disabled={true}>Move to...</option>
      {SHELVES.map(shelf => (
        <option key={shelf} value={shelf}>
          {camelToTitle(shelf)}
        </option>
      ))}
    </select>
  );
};

export const SelectOldBook = ({ book, onShelfChange }) => {
  return (
    <select
      id="shelf"
      value={book.shelf}
      onChange={e => onShelfChange(book.id, e)}
    >
      <option disabled={true}>Move to...</option>
      <option value={book.shelf}>{camelToTitle(book.shelf)}</option>
      {SHELVES.filter(s => s !== book.shelf).map(shelf => (
        <option key={shelf} value={shelf}>
          {camelToTitle(shelf)}
        </option>
      ))}
    </select>
  );
};
