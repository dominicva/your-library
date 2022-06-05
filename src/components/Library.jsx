import { Link } from 'react-router-dom';
import Header from './Header';
import BookShelf, { SHELVES } from './BookShelf';

const Library = ({ books, onShelfChange }) => {
  return (
    <main>
      <Header />
      <section>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </section>
      {SHELVES.map(shelf => (
        <BookShelf
          key={shelf.value}
          books={books}
          shelf={shelf}
          onShelfChange={onShelfChange}
        />
      ))}
    </main>
  );
};

export default Library;
