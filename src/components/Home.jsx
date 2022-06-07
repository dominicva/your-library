import { Link } from 'react-router-dom';
import Header from './Header';
import bookPlaceholder from '../assets/book-placeholder.svg';

const SHELVES = ['currentlyReading', 'wantToRead', 'read'];

const BooksList = ({ listTitle, books, onBooksChange }) => {
  return (
    <ul>
      <h3>{listTitle}</h3>
      {books.map(book => (
        <div key={book.id} className="book-card">
          <img
            src={bookPlaceholder}
            alt="placeholder book"
            style={{ width: '48px', height: '48px', borderRadius: '8px' }}
          />
          <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
          </div>
        </div>
      ))}
    </ul>
  );
};

const Home = ({ books, onBooksChange }) => {
  console.log('books:', books);
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
