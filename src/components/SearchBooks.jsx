import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import arrowIcon from '../assets/arrow-accent-green.svg';
import * as BooksAPI from '../utils/booksAPI';

const SearchBooks = ({ books, onBooksChange }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      const response = await BooksAPI.search(query, 5);
      console.log('response:', response);
    };

    fetchResults();
  }, [query]);

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
    </div>
  );
};

export default SearchBooks;
