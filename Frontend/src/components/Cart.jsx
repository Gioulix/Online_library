import { useCart } from "../context/CartContext";

function Cart({ onClose }) {
  const {
    cart,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart" onClick={(event) => event.stopPropagation()}>
        <div className="cart-header">
          <div>
            <span className="section-label">Your Cart</span>

            <h2>Shopping Cart</h2>
          </div>

          <button
            className="close-cart"
            onClick={onClose}
            aria-label="Close cart"
          >
            x
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h3>Your cart is empty</h3>

            <p>
              Looks like you haven't added any books to your cart yet. Start
              exploring our collection and add your favorite reads to your cart!
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <h4>{item.title}</h4>

                    <p>{item.author}</p>

                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>

                    <div className="quantity-controls">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="subtotal">
                <span>Subtotal:</span>

                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <p className="shipping-info">Free shipping on orders over €50</p>

              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
