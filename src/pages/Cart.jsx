import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const isCartEmpty = cartItems.length === 0;

  const totalItems = cartItems.length;

  const total = cartItems.reduce(
    (sum, burger) => sum + Number(burger.price),
    0,
  );

  const handlePlaceOrder = () => {
    if (!location.trim()) {
      alert("Please enter your delivery location.");
      return;
    }

    const orderNumber = `FB-${Date.now().toString().slice(-6)}`;

    navigate("/orders", {
      state: {
        total,
        orderNumber,
        location,
        paymentMethod: "Cash on Delivery",
      },
    });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {isCartEmpty ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>

          <Link to="/menu">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          <p>
            You have {totalItems} item
            {totalItems === 1 ? "" : "s"} in your cart.
          </p>

          {cartItems.map((burger, index) => (
            <div className="cart-item" key={`${burger.id}-${index}`}>
              <div>
                <h2>{burger.name}</h2>

                <p>Price: ${Number(burger.price).toFixed(2)}</p>
              </div>

              <button type="button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <div className="delivery-details">
            <label htmlFor="location">Delivery Location</label>

            <input
              id="location"
              type="text"
              placeholder="Enter your address or location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />

            <p className="payment-method">Payment method: Cash on Delivery</p>
          </div>

          <div className="cart-actions">
            <button type="button" onClick={clearCart}>
              Clear Cart
            </button>

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="place-order-link"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
