import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const [library, setLibrary] = useState({
    currentlyReading: {
      label: 'Currently reading',
      books: [],
    },
    wantToRead: {
      label: 'Want to read',
      books: [],
    },
    read: {
      label: 'Reading',
      books: [],
    },
  });

  const totalBooks = Object.values(library).reduce(
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
          <section id="no-books-fallback">
            <h2>Let's get some books for you</h2>
            <div>
              <h3>
                Your library has no books (yet). Hit the search button above to
                find your fist book.
              </h3>
              <button id="preview-library-btn" className="outline accent">
                Preview
              </button>
            </div>
          </section>
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
