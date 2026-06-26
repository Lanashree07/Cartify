import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (exists) {
      alert("⚠️ Already in cart!");
      return;
    }

    cart.push(product);
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("✅ Added to cart!");
  };

  return (
    <article style={styles.card}>
      {/* IMAGE */}
      <div style={styles.imgBox}>
        <img
          src={product.image}
          alt={`${product.name} - ${product.brand}`}
          loading="lazy"
          width="300"
          height="300"
          style={styles.image}
        />
      </div>

      {/* DETAILS */}
      <div style={styles.content}>
        <h3 style={styles.name}>
          {product.name}
        </h3>

        <p style={styles.meta}>
          {product.brand} • {product.model}
        </p>

        <p style={styles.color}>
          Color: {product.color}
        </p>

        <h2 style={styles.price}>
          ₹{product.price}
        </h2>

        <p
          style={{
            color:
              product.countInStock > 0
                ? "green"
                : "red",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {product.countInStock > 0
            ? "In Stock"
            : "Out of Stock"}
        </p>

        {/* BUTTONS */}
        <div style={styles.btnRow}>
          <Link
            to={`/product/${product.id}`}
            style={styles.viewBtn}
            aria-label={`View details of ${product.name}`}
          >
            View Details
          </Link>

          <button
            onClick={addToCart}
            aria-label={`Add ${product.name} to cart`}
            style={{
              ...styles.cartBtn,
              opacity:
                product.countInStock === 0
                  ? 0.5
                  : 1,
              cursor:
                product.countInStock === 0
                  ? "not-allowed"
                  : "pointer",
            }}
            disabled={
              product.countInStock === 0
            }
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow:
      "0 6px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  imgBox: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  content: {
    padding: "15px",
    textAlign: "center",
  },

  name: {
    fontSize: "18px",
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
    textAlign: "center",
    fontSize: "13px",
  },

  cartBtn: {
    flex: 1,
    padding: "8px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
  },
};

export default ProductCard;