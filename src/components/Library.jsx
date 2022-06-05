import { Link } from 'react-router-dom';
import Header from './Header';

const Library = ({ books }) => {
  return (
    <main>
      <Header />
      <section>
        <h2>Bookshelves</h2>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </section>
    </main>
  );
};

export default Library;
