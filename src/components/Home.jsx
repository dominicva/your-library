import { Link } from 'react-router-dom';
import Header from './Header';
import BooksList from './BooksList';

const Home = ({ books, shelves, onShelfChange }) => {
  return (
    <div id="home">
      <Header />
      <button id="search-books-btn">
        <Link to="/search">Search books</Link>
      </button>
      <main>
        {Object.keys(shelves).map(shelf => {
          const shelfBooks = books.filter(b => b.shelf === shelf);

          return (
            <section key={shelf} className="list-container">
              <BooksList
                listTitle={shelf}
                books={shelfBooks}
                onShelfChange={onShelfChange}
              />
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
