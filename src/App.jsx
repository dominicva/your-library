import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchBooks from './components/SearchBooks';

const App = () => {
  const [books, setBooks] = useState({
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

  const handleBooksChange = () => {
    console.log('Placeholder');
    console.log(setBooks());
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home books={books} onBooksChange={handleBooksChange} />}
        />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </>
  );
};

export default App;
