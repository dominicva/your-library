const BooksList = ({ listTitle, books, onShelfChange, onAddBook }) => {
  const SHELVES = ['currentlyReading', 'wantToRead', 'read'];

  return (
    <section>
      <h3>{listTitle}</h3>
      <ul>
        {books.map(book => {
          const isNewBook = book.shelf == null;

          return (
            <li key={book.id}>
              <div className="book-card">
                <img
                  src={book.imageLinks?.thumbnail}
                  alt={book.title}
                  style={{
                    width: '120px',
                    height: '160px',
                    borderRadius: '3px',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h4>{book.title}</h4>
                  <h5>{book.authors?.join(' & ')}</h5>
                </div>

                {isNewBook ? (
                  <select
                    id="shelf"
                    value="Move to..."
                    onChange={e => onAddBook(book, e)}
                  >
                    <option disabled={true}>Move to...</option>
                    {SHELVES.map(shelf => (
                      <option key={shelf} value={shelf}>
                        {shelf}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    id="shelf"
                    value={book.shelf}
                    onChange={e => onShelfChange(book.id, e)}
                  >
                    <option disabled={true}>Move to...</option>
                    <option value={book.shelf}>{book.shelf}</option>

                    {SHELVES.filter(s => s !== book.shelf).map(shelf => (
                      <option key={shelf} value={shelf}>
                        {shelf}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BooksList;
