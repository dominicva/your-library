import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './utils/booksAPI';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(setBooks).catch(console.error);
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
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </>
  );
};

export default App;

/*

// useEffect(() => {
  //   const fetchBooks = async () => {
  //     const allBooks = await BooksAPI.getAll();
  //     const currentlyReading = allBooks.filter(
  //       b => b.shelf === 'currentlyReading'
  //     );
  //     const wantToRead = allBooks.filter(b => b.shelf === 'wantToRead');
  //     const read = allBooks.filter(b => b.shelf === 'read');
  //     console.log('books:', books);

  //     console.log('allBooks:', allBooks);
  //     console.log('currentlyReading:', currentlyReading);
  //     console.log('wantToRead:', wantToRead);
  //     console.log('read:', read);
  //   };
  //   fetchBooks();
  // }, []);

  // const handleBooksChange = ({ books }) => {
  //   console.log('Placeholder');
  //   console.log(setBooks());
  // };

*/
