function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span>Book</span>Store
            <span>BOOKHAVEN</span>
          </a>

          <p>
            A passionate community of book lovers, dedicated to sharing stories
            that inspire, educate, and entertain. Join us in celebrating the
            magic of reading.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#books">All Books</a>
          <a href="#books">Best Sellers</a>
          <a href="#books">New Releases</a>
          <a href="#books">Featured</a>
        </div>

        <div className="footer-column" id="categories">
          <h4>Categories</h4>

          <a href="#books">Fiction</a>
          <a href="#books">Self Growth</a>
          <a href="#books">History</a>
          <a href="#books">Sci-Fi</a>
        </div>

        <div className="footer-column">
          <h4>Help</h4>

          <a href="#about">Contact Us</a>
          <a href="#about">Shipping</a>
          <a href="#about">Returns</a>
          <a href="#about">FAQ</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
        </span>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
