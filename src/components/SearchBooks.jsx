import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';
import * as BooksAPI from '../utils/booksAPI';
import arrowIcon from '../assets/arrow-accent-green.svg';
import './search.css';

const SearchBooks = ({ books, shelvesState, onShelfChange, onAddBook }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setSearchResults([]);
        return;
      }

      try {
        const books = await BooksAPI.search(query, 5);

        for (const book of books) {
          for (const [shelf, ids] of Object.entries(shelvesState)) {
            if (ids.includes(book.id)) {
              book.shelf = shelf;
            }
          }
        }
        setSearchResults(books);
      } catch (error) {
        console.log(error);
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [query, shelvesState]);

  return (
    <div id="search" className="layout">
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
        {query.length > 0 ? (
          <p>
            Showing results for: <span id="live-query">{query}</span>
          </p>
        ) : null}
      </div>
      <div>
        <BooksList
          listTitle="Results"
          books={searchResults}
          onShelfChange={onShelfChange}
          onAddBook={onAddBook}
        />
      </div>
    </div>
  );
};

export default SearchBooks;
