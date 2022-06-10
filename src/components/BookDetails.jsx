import { useParams, Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow-accent-green.svg';

const BookDetails = () => {
  const { bookId } = useParams();
  // read this book from local storage
  const books = JSON.parse(window.localStorage.getItem('books'));

  const book = books?.find(b => b.id === bookId);

  const descriptionLength = book.description.length;
  const MAX_DESC_LENGTH = 800;

  return (
    <main className="book-details">
      <div id="link-to-home">
        <Link className="accent green" to="/">
          <img className="icon arrow" src={arrowIcon} alt="right arrow" />
          <span>Back to home</span>
        </Link>
      </div>
      <div>
        <section id="details-hero">
          <img
            className="book-image"
            src={book.imageLinks?.thumbnail}
            alt={book.title}
          />
          <div className="book-details-header">
            <h3>{book.title}</h3>
            <h4>{book.authors?.join(' & ')}</h4>
          </div>
        </section>

        <div className="book-info">
          <p className="book-info-label">
            Published on{new Date(book.publishedDate).toDateString()}
          </p>
          <p className="book-info-label">{book.pageCount} pages</p>
          {book.categories ? (
            <p className="book-info-label">
              Categories {book.categories?.join(', ')}
            </p>
          ) : null}
          <div className="book-description">
            <h3 id="description-heading" className="book-info-label">
              Description
            </h3>
            {descriptionLength > MAX_DESC_LENGTH
              ? book.description.slice(0, MAX_DESC_LENGTH) + '...'
              : book.description}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
