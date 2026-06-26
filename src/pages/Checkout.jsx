import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("⚠️ Cart is empty!");
      return;
    }

    localStorage.removeItem("cart");
    navigate("/success");
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>🧾 Secure Checkout</h1>

      <div style={styles.container}>

        {/* LEFT - FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>

          <h2 style={styles.sectionTitle}>Delivery Details</h2>

          <input type="text" placeholder="Full Name" required style={styles.input} />
          <input type="email" placeholder="Email Address" required style={styles.input} />
          <input type="text" placeholder="Full Address" required style={styles.input} />
          <input type="text" placeholder="Phone Number" required style={styles.input} />

          <button type="submit" style={styles.button}>
            🚀 Place Order
          </button>

          <p style={styles.note}>
            🔒 Your information is safe & encrypted
          </p>

        </form>

        {/* RIGHT - ORDER SUMMARY */}
        <div style={styles.summary}>

          <h2 style={styles.sectionTitle}>Order Summary</h2>

          {cart.length === 0 ? (
            <div style={styles.empty}>
              <h3>Your cart is empty 😕</h3>
              <button
                style={styles.shopBtn}
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div style={styles.items}>
                {cart.map((item, index) => (
                  <div key={index} style={styles.item}>

                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.img}
                    />

                    <div>
                      <p style={styles.name}>{item.name}</p>
                      <p style={styles.price}>₹{item.price}</p>
                    </div>

                  </div>
                ))}
              </div>

              <hr style={styles.line} />

              <div style={styles.totalBox}>
                <h3>Total Amount</h3>
                <h2 style={styles.total}>₹{total}</h2>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f5f7fb",
    minHeight: "100vh",
    padding: "20px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  form: {
    flex: 1,
    minWidth: "320px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },

  summary: {
    flex: 1,
    minWidth: "320px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },

  sectionTitle: {
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "0.3s",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },

  note: {
    fontSize: "12px",
    textAlign: "center",
    marginTop: "10px",
    color: "gray",
  },

  items: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  item: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    background: "#f9f9f9",
  },

  img: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  name: {
    fontWeight: "bold",
  },

  price: {
    color: "#2e7d32",
    fontWeight: "bold",
  },

  line: {
    margin: "15px 0",
  },

  totalBox: {
    textAlign: "center",
  },

  total: {
    color: "#2e7d32",
    fontSize: "24px",
  },

  empty: {
    textAlign: "center",
    padding: "20px",
  },

  shopBtn: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Checkout;