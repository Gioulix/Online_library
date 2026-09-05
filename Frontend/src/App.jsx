import { useMemo, useState } from "react";

import books from "./data/books";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import BookGrid from "./components/Bookgrid";

import { CartProvider } from "./context/CartContext";

function AppContent() {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const filteredBooks = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return books;
    }

    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const scrollToBooks = () => {
    document.getElementById("books")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <NavBar
        search={search}
        setSearch={setSearch}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <Hero onBrowseClick={scrollToBooks} />

        <BookGrid books={filteredBooks} />

        <section className="newsletter">
          <div>
            <span className="section-label">STAY INFORMED!</span>

            <h2>Never miss a great story.</h2>

            <p>
              Get book recommendations, new releases, and exclusive offers
              delivered to your inbox.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <Footer />

      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
