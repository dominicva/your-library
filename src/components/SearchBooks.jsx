import { Link } from 'react-router-dom';

const SearchBooks = () => {
  return (
    <div id="search">
      <h2>Search for books</h2>
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default SearchBooks;
