const camelToTitle = str => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

const BooksList = ({ listTitle, books, onShelfChange, onAddBook }) => {
  const shelfTypes = ['currentlyReading', 'wantToRead', 'read'];
  const shelfLabels = shelfTypes.map(camelToTitle);

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
                    {shelfLabels.map(shelf => (
                      <option key={shelf} value={shelf}>
                        {shelf}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    id="shelf"
                    value={camelToTitle(book.shelf)}
                    onChange={e => onShelfChange(book.id, e)}
                  >
                    <option disabled={true}>Move to...</option>
                    <option value={book.shelf}>
                      {camelToTitle(book.shelf)}
                    </option>

                    {shelfTypes
                      .filter(s => s !== book.shelf)
                      .map(shelf => (
                        <option key={shelf} value={camelToTitle(shelf)}>
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
