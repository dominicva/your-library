import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import Search from './components/Search';
import * as BooksAPI from './utils/booksAPI';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(setBooks).catch(console.error);
  }, []);

  const changeShelf = (book, newShelf) => {
    const unchanged = books.filter(b => b.id !== book.id);
    const updated = { ...book, shelf: newShelf };

    setBooks([...unchanged, updated]);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Library books={books} onShelfChange={changeShelf} />}
      />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
