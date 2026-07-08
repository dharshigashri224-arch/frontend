import "./Cart.css";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

function Cart({ cart, removeFromCart, total, setPage }) {
  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>Add your favourite bridal collections.</p>

        </div>

      ) : (

        <>
          <div className="cart-items">

            {cart.map((item, index) => (

              <div className="cart-card" key={index}>

                <img src={item.image} alt={item.name} />

                <div className="cart-info">

                  <h2>{item.name}</h2>

                  <p>{item.category}</p>

                  <h3>₹{item.price.toLocaleString()}</h3>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  <FaTrash />
                </button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

              <span>Items</span>

              <span>{cart.length}</span>

            </div>

            <div className="summary-row">

              <span>Delivery</span>

              <span>FREE</span>

            </div>

            <div className="summary-row total">

              <span>Total</span>

              <span>₹{total.toLocaleString()}</span>

            </div>

           <button
  className="buy-btn"
  onClick={() => setPage("order")}
>
  <FaShoppingBag />
  Buy Now
</button>
          </div>

        </>
      )}

    </div>
  );
}

export default Cart;