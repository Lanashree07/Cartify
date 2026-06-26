import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Remove item
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total calculation
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={styles.emptyBox}>
          <h2>Your cart is empty 😕</h2>
          <p>Add some amazing products!</p>

          <button
            style={styles.shopBtn}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div style={styles.container}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>

                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <h2>{item.name}</h2>

                  <p><b>Brand:</b> {item.brand}</p>
                  <p><b>Model:</b> {item.model}</p>
                  <p><b>Color:</b> {item.color}</p>

                  <h3 style={styles.price}>₹{item.price}</h3>

                  <div style={styles.btnRow}>
                    <button
                      style={styles.removeBtn}
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>

                    <button
                      style={styles.checkoutBtn}
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div style={styles.totalBox}>
            <h2>Total Amount</h2>
            <h1>₹{total}</h1>

            <button
              style={styles.checkoutMain}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    fontFamily: "Arial",
    padding: "20px",
    background: "#f4f6fb",
    minHeight: "100vh"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  card: {
    display: "flex",
    gap: "20px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  details: {
    flex: 1
  },

  price: {
    color: "#2e7d32"
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },

  removeBtn: {
    padding: "8px 12px",
    background: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  checkoutBtn: {
    padding: "8px 12px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  totalBox: {
    marginTop: "30px",
    padding: "20px",
    background: "white",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  checkoutMain: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  emptyBox: {
    textAlign: "center",
    marginTop: "100px"
  },

  shopBtn: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default Cart;