import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // prevent duplicates
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      alert("⚠️ Already in cart!");
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Added to cart!");
  };

  return (
    <div style={styles.card}>

      {/* IMAGE */}
      <div style={styles.imgBox}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
      </div>

      {/* DETAILS */}
      <div style={styles.content}>

        <h3 style={styles.name}>{product.name}</h3>

        <p style={styles.meta}>
          {product.brand} • {product.model}
        </p>

        <p style={styles.color}>
          Color: {product.color}
        </p>

        <h2 style={styles.price}>₹{product.price}</h2>

        <p style={{
          color: product.countInStock > 0 ? "green" : "red",
          fontWeight: "bold",
          fontSize: "13px"
        }}>
          {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* BUTTONS */}
        <div style={styles.btnRow}>

          <Link
            to={`/product/${product.id}`}
            style={styles.viewBtn}
          >
            View Details
          </Link>

          <button
            onClick={addToCart}
            style={{
              ...styles.cartBtn,
              opacity: product.countInStock === 0 ? 0.5 : 1,
              cursor: product.countInStock === 0 ? "not-allowed" : "pointer"
            }}
            disabled={product.countInStock === 0}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  },

  imgBox: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "15px",
    textAlign: "center",
  },

  name: {
    fontSize: "16px",
    marginBottom: "5px",
  },

  meta: {
    fontSize: "13px",
    color: "gray",
    marginBottom: "5px",
  },

  color: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "8px",
  },

  price: {
    color: "#2e7d32",
    fontSize: "20px",
    marginBottom: "8px",
  },

  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
  },

  viewBtn: {
    flex: 1,
    padding: "8px",
    background: "#667eea",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "13px",
    textAlign: "center",
  },

  cartBtn: {
    flex: 1,
    padding: "8px",
    background: "#000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    cursor: "pointer",
  },
};

export default ProductCard;