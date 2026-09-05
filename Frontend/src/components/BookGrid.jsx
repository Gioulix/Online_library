import BookCard from "./Bookcard";

function BookGrid({ books }) {
  return (
    <section className="books-section" id="books">
      <div className="section-heading">
        <div>
          <span className="section-label">OUR COLLECTION</span>

          <h2>Popular books</h2>
        </div>

        <button className="view-all-button">View all</button>
      </div>

      {books.length > 0 ? (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <div>Book</div>

          <h3> No books found</h3>

          <p>Try searching for another title, author, or category.</p>
        </div>
      )}
    </section>
  );
}

export default BookGrid;
