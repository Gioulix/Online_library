import { useCart } from "../context/CartContext";

function NavBar({ search, setSearch, onCartClick }) {
  const { cart, cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          BookStore
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <button
            className="cart-button"
            onClick={onCartClick}
            aria-label="View cart"
          >
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className="menu-button" aria-label="Open navigation menu">
            Ξ
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
