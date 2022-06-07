import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import bookPlaceholder from '../assets/book-placeholder.svg';

const mockData = {
  currentlyReading: {
    label: 'Currently reading',
    books: [{ id: 1, title: 'Forward', author: 'Andrew Yang' }],
  },
  wantToRead: {
    label: 'Want to read',
    books: [{ id: 1, title: 'Lifespan', author: 'David Sinclair' }],
  },
  read: {
    label: 'Read',
    books: [{ id: 1, title: 'Sapiens', author: 'Yuval Noah Harari' }],
  },
};

const PreviewShelves = ({ books }) => {
  return Object.values(books).map(shelf => (
    <section key={shelf.label} className="shelf">
      <h3>{shelf.label}</h3>
      <BookShelf books={shelf.books} />
    </section>
  ));
};

const BookShelf = ({ books }) => {
  return (
    <>
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
    </>
  );
};

const Home = ({ books, onBooksChange }) => {
  const [showPreview, setShowPreview] = useState(false);

  const totalBooks = Object.values(books).reduce(
    (total, shelf) => total + shelf.books.length,
    0
  );
  const noBooks = totalBooks === 0;

  return (
    <div id="home">
      <Header />
      <button id="search-books-btn">
        <Link to="/search">Search books</Link>
      </button>
      <main>
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
        ) : (
          <>
            <div>Your bookshelves await...</div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

/*
{showPreview
  ? Object.values(mockData).map(shelf => (
      <section key={shelf.label}>
        <h2>{shelf.label}</h2>
        <BookShelf books={shelf.books} />
      </section>
    ))
  : null}
  */
