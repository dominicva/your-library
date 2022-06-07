import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import arrowIcon from '../assets/arrow-accent-green.svg';
import * as BooksAPI from '../utils/booksAPI';

const BooksList = ({ listTitle, books, onBooksChange }) => {
  const SHELVES = ['currentlyReading', 'wantToRead', 'read'];
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
                <h5>{book.authors?.join(' & ')}</h5>
              </div>
              <select
                id="shelf"
                value={book.shelf != null ? book.shelf : 'Move to...'}
                onChange={e => onBooksChange(book.id, e)}
              >
                {book.shelf != null ? (
                  <option value={book.shelf}>{book.shelf}</option>
                ) : (
                  <option disabled={true}>Move to...</option>
                )}
                {SHELVES.filter(s => s !== book.shelf).map(shelf => (
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

const SearchBooks = ({ books, shelvesState, onBooksChange }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      const books = await BooksAPI.search(query, 5);
      // console.log('books:', books);

      // check if in shelfstate
      for (const book of books) {
        for (const [shelf, ids] of Object.entries(shelvesState)) {
          if (ids.includes(book.id)) {
            book.shelf = shelf;
          }
        }
        // console.log('book:', book);
      }

      setSearchResults(books);
    };

    fetchResults();
  }, [query, shelvesState]);

  return (
    <div id="search">
      <div id="link-to-home">
        <Link className="accent green" to="/">
          <img className="icon arrow" src={arrowIcon} alt="right arrow" />
          <span>Back to home</span>
        </Link>
      </div>
      <header>
        <h2>Search for books</h2>
      </header>
      <form id="search-books-form" onSubmit={e => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="search-books">Search book world</label>
          <input
            id="search-books"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div>
        <p>
          Showing results for: <span id="live-query">{query}</span>
        </p>
      </div>
      <div>
        <BooksList
          listTitle="Results"
          books={searchResults}
          onBooksChange={onBooksChange}
        />
      </div>
    </div>
  );
};

export default SearchBooks;
