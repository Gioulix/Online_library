import { useCart } from "../context/CartContext";

function BookCard({ book }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <article className="book-card">
      <div className="book-image-wrapper">
        <img src={book.cover} alt={book.title} className="book-image" />

        <span className="category-badge">{book.category}</span>

        <button
          className="wishlist-button"
          aria-label={`Add ${book.title} to wishlist`}
        >
          ♥
        </button>
      </div>

      <div className="book-info">
        <div className="rating">
          <span>*</span>
          {book.rating}
        </div>

        <h3>{book.title}</h3>

        <p className="author">by {book.author}</p>

        <div className="book-bottom">
          <strong>${book.price.toFixed(2)}</strong>

          <button
            className="add-button"
            onClick={handleAddToCart}
            aria-label={`Add ${book.title} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
