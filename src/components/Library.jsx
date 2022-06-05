import { Link } from 'react-router-dom';
import Header from './Header';

const SHELVES = [
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
];

const BookShelf = ({ books, shelf, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === shelf.value)
            .map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={e => onShelfChange(book, e.target.value)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        {SHELVES.map(shelf => (
                          <option key={shelf.value} value={shelf.value}>
                            {shelf.label}
                          </option>
                        ))}
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

const Library = ({ books, onShelfChange }) => {
  return (
    <main>
      <Header />
      <section>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </section>
      {SHELVES.map(shelf => (
        <BookShelf
          key={shelf.value}
          books={books}
          shelf={shelf}
          onShelfChange={onShelfChange}
        />
      ))}
    </main>
  );
};

export default Library;
