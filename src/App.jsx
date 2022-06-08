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
  const [books, setBooks] = useState(
    () => JSON.parse(window.localStorage.getItem('books')) ?? []
  );
  const shelvesState = shelfState(books);

  useEffect(() => {
    const storedLocally = window.localStorage.getItem('books');
    if (storedLocally) {
      setBooks(JSON.parse(storedLocally));
      return;
    }

    const initBooks = async () => {
      const starterBooks = await BooksAPI.getAll();
      setBooks(starterBooks);
    };

    initBooks();
  }, []);

  function handleShelfChange(bookId, e) {
    const updatedState = books.map(book => {
      if (book.id === bookId) {
        return {
          ...book,
          shelf: e.target.value,
        };
      } else {
        return book;
      }
    });
    setBooks(updatedState);
    window.localStorage.setItem('books', JSON.stringify(updatedState));
  }

  function handleAddBook(book, e) {
    book.shelf = e.target.value;
    const updatedState = [...books, book];
    setBooks(updatedState);
    window.localStorage.setItem('books', JSON.stringify(updatedState));
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              shelves={shelvesState}
              onShelfChange={handleShelfChange}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              books={books}
              shelvesState={shelvesState}
              onShelfChange={handleShelfChange}
              onAddBook={handleAddBook}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
