const camelToTitle = str => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

const BooksList = ({ listTitle, books, onShelfChange, onAddBook }) => {
  const SHELVES = ['currentlyReading', 'wantToRead', 'read'];

  return (
    <>
      <h3 className="list-title">{camelToTitle(listTitle)}</h3>
      <ul className="list-books">
        {books.map(book => {
          const isNewBook = book.shelf == null;

          return (
            <li key={book.id}>
              <div className="book-card">
                <img
                  className="book-image"
                  src={book.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <h4>{book.authors?.join(' & ')}</h4>
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
                        {camelToTitle(shelf)}
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
                    <option value={book.shelf}>
                      {camelToTitle(book.shelf)}
                    </option>

                    {SHELVES.filter(s => s !== book.shelf).map(shelf => (
                      <option key={shelf} value={shelf}>
                        {camelToTitle(shelf)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BooksList;
