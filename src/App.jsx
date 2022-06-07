import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './utils/booksAPI';

// *************************** derived state helpers

const getShelfIds = (books, shelf) =>
  books.filter(b => b.shelf === shelf).map(({ id }) => id);

const shelfState = books => ({
  currentlyReading: getShelfIds(books, 'currentlyReading'),
  wantToRead: getShelfIds(books, 'wantToRead'),
  read: getShelfIds(books, 'read'),
});

// ******************************************

const App = () => {
  const [books, setBooks] = useState([]);
  const currentShelfState = shelfState(books);
  console.log('currentShelfState:', currentShelfState);

  useEffect(() => {
    const initBooks = async () => {
      const starterBooks = await BooksAPI.getAll();
      setBooks(starterBooks);
    };
    initBooks();
  }, []);

  function handleShelfChange(bookId, e) {
    setBooks(
      books.map(book => {
        if (book.id === bookId) {
          return {
            ...book,
            shelf: e.target.value,
          };
        } else {
          return book;
        }
      })
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home books={books} onBooksChange={handleShelfChange} />}
        />
        <Route
          path="/search"
          element={
            <SearchBooks books={books} onBooksChange={handleShelfChange} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
