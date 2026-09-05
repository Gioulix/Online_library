import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === book.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...book, image: book.cover, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== bookId));
  };

  const increaseQuantity = (bookId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (bookId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const value = useMemo(
    () => ({
      cart,
      cartCount: cart.reduce((total, item) => total + item.quantity, 0),
      cartTotal: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
