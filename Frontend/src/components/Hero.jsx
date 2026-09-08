function Hero({ onBrowseClick }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">YOUR NEXT GREAT READ</span>

          <h1>
            Stories that
            <br />
            <span>stay with you.</span>
          </h1>

          <p>
            Discover your next favorite book from our curated selection of
            bestsellers, timeless classics, and hidden gems. Dive into worlds
            unknown and let your imagination soar.
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={onBrowseClick}>
              Browse Books
            </button>

            <button className="secondary-button" onClick={onBrowseClick}>
              Explore Categories
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>30k+</strong>
              <span>Books</span>
            </div>

            <div>
              <strong>20k+</strong>
              <span>Readers</span>
            </div>

            <div>
              <strong>4.8/5</strong>
              <span>Rating</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle" />

            <div className="floating-card card-one">
              <span>*****</span>
              <p>"A beautiful reading experience!"</p>
            </div>

            <div className="book-stack">
              <div className="book book-back">READ</div>

              <div className="book book-middle">MORE</div>

              <div className="book book-front">
                <div className="book-cover-title">
                  THE
                  <br />
                  ART OF
                  <br />
                  READING
                </div>

                <small>BOOKHAVEN EDITION</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
