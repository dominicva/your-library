import { Link } from 'react-router-dom';
import Header from './Header';

const Library = ({ books, onShelfChange }) => {
  const currentlyReading = books.filter(
    ({ shelf }) => shelf === 'currentlyReading'
  );
  console.log('currentlyReading:', currentlyReading);

  const wantToRead = books.filter(({ shelf }) => shelf === 'wantToRead');
  const read = books.filter(({ shelf }) => shelf === 'read');

  return (
    <main>
      <Header />
      <section>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </section>
      <section>
        <h2>Currently Reading</h2>
        <ul>
          {currentlyReading.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors}</h3>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>Want to Tead</h2>
        <div>
          {wantToRead.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2>Read</h2>
        <div>
          {read.map(book => {
            return (
              <div key={book.id} className="book-card">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.authors}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Library;
