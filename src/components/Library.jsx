import { Link } from 'react-router-dom';
import Header from './Header';

const Library = ({ books, onShelfChange }) => {
  const currentlyReading = books.filter(
    ({ shelf }) => shelf === 'currentlyReading'
  );
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
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </section>
      <section>
        <h2>Want to Tead</h2>
        <ul>
          {wantToRead.map(book => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </section>
      <section>
        <h2>Read</h2>
        <ul>
          {read.map(book => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Library;
