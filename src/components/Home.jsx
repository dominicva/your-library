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
        <section>
          {Object.keys(shelves).map(shelf => {
            const shelfBooks = books.filter(b => b.shelf === shelf);
            return (
              <div key={shelf}>
                <BooksList
                  listTitle={shelf}
                  books={shelfBooks}
                  onShelfChange={onShelfChange}
                />
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
