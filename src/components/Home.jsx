import { Link } from 'react-router-dom';
import Header from './Header';
// import * as BooksAPI from '../utils/booksAPI';

const SHELVES = ['currentlyReading', 'wantToRead', 'read'];

const BooksList = ({ listTitle, books, onBooksChange }) => {
  return (
    <section>
      <h3>{listTitle}</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div className="book-card">
              <img
                src={book.imageLinks?.thumbnail}
                alt={book.title}
                style={{
                  width: '120px',
                  height: '160px',
                  borderRadius: '3px',
                  objectFit: 'cover',
                }}
              />
              <div>
                <h4>{book.title}</h4>
                <h5>{book.authors.join(' & ')}</h5>
              </div>
              <select
                id="shelf"
                value={book.shelf}
                onChange={e => onBooksChange(book.id, e)}
              >
                {SHELVES.map(shelf => (
                  <option key={shelf} value={shelf}>
                    {shelf}
                  </option>
                ))}
              </select>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Home = ({ books, onBooksChange }) => {
  console.log('books home:', books);
  const shelves = [...SHELVES];

  return (
    <div id="home">
      <Header />
      <button id="search-books-btn">
        <Link to="/search">Search books</Link>
      </button>
      <main>
        <section>
          {shelves.map(shelf => {
            const shelfBooks = books.filter(b => b.shelf === shelf);
            return (
              <div key={shelf}>
                <BooksList
                  listTitle={shelf}
                  books={shelfBooks}
                  onBooksChange={onBooksChange}
                />
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;

/*

  // const totalBooks = books.length;
  // const noBooks = totalBooks === 0;

  // const [showPreview, setShowPreview] = useState(false);

{noBooks ? (
          <div>
            <section id="no-books-fallback">
              <h2>Let's get some books for you</h2>
              <div>
                <p>
                  Your library has no books (yet). Hit the search button above
                  to find your fist book.
                </p>
                <p>
                  Or if you'd like to see what your libtary could look like...
                </p>
                <button
                  id="preview-library-btn"
                  className={`outline ${showPreview ? 'accent' : ''}`}
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? 'Hide' : 'Show'} preview
                </button>
              </div>
            </section>
            <div>
              {showPreview ? <PreviewShelves books={mockData} /> : null}
            </div>
          </div>
        )
{showPreview
  ? Object.values(mockData).map(shelf => (
      <section key={shelf.label}>
        <h2>{shelf.label}</h2>
        <BooksList books={shelf.books} />
      </section>
    ))
  : null}
  */
