import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import Search from './components/Search';

function App() {
  const [books, setBooks] = useState([]);

  const changeShelf = (book, newShelf) => {
    const otherBooks = books.filter(b => b.id !== book.id);
    const updatedBook = { ...book, shelf: newShelf };
    const newState = [...otherBooks, updatedBook];

    setBooks(newState);
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
