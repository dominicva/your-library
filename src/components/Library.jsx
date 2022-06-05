import { Link } from 'react-router-dom';
import Header from './Header';

const SHELVES = [
  { value: 'currentlyReading', label: 'Currently Reading' },
  { value: 'wantToRead', label: 'Want to Read' },
  { value: 'read', label: 'Read' },
];

const Library = ({ books, onShelfChange }) => {
  const currentlyReading = books.filter(
    ({ shelf }) => shelf === 'currentlyReading'
  );
  const wantToRead = books.filter(({ shelf }) => shelf === 'wantToRead');
  const read = books.filter(({ shelf }) => shelf === 'read');

  return (
    <main>
      <Header />
      <section>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </section>
      <section>
        <h2>Currently Reading</h2>
        <ul>
          {currentlyReading.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors.join(' & ')}</h3>
                </div>
                <select defaultValue={book.shelf}>
                  {SHELVES.map(({ value, label }) => (
                    <option value={value} key={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>Want to Tead</h2>
        <div>
          {wantToRead.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors.join(' & ')}</h3>
                </div>
                <select defaultValue={book.shelf}>
                  {SHELVES.map(({ value, label }) => (
                    <option value={value} key={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2>Read</h2>
        <div>
          {read.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors.join(' & ')}</h3>
                </div>
                <select defaultValue={book.shelf}>
                  {SHELVES.map(({ value, label }) => (
                    <option value={value} key={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Library;
