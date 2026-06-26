import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h2>❌ Product not found</h2>
        <button style={styles.btn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  // Add to cart (with duplicate prevention)
  const addToCart = () => {
    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      alert("⚠️ Product already in cart!");
      return;
    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Product added to cart!");
  };

  return (
    <div style={styles.page}>

      <div style={styles.container}>

        {/* LEFT - IMAGE */}
        <div style={styles.imageBox}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />
        </div>

        {/* RIGHT - DETAILS */}
        <div style={styles.details}>

          <h1 style={styles.title}>{product.name}</h1>

          <p style={styles.subtitle}>
            {product.brand} • {product.model}
          </p>

          <div style={styles.infoBox}>
            <p><b>Color:</b> {product.color}</p>
            <p><b>Stock:</b> {product.countInStock}</p>

            <p style={styles.price}>
              ₹{product.price}
            </p>

            <p
              style={{
                color:
                  product.countInStock > 0
                    ? "green"
                    : "red",
                fontWeight: "bold",
              }}
            >
              {product.countInStock > 0
                ? "In Stock"
                : "Out of Stock"}
            </p>
          </div>

          {/* BUTTONS */}
          <div style={styles.btnRow}>

            <button
              style={{
                ...styles.addBtn,
                opacity:
                  product.countInStock === 0 ? 0.5 : 1,
                cursor:
                  product.countInStock === 0
                    ? "not-allowed"
                    : "pointer",
              }}
              onClick={addToCart}
              disabled={product.countInStock === 0}
            >
              🛒 Add to Cart
            </button>

            <button
              style={styles.cartBtn}
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          </div>

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
    padding: "30px",
  },

  container: {
    display: "flex",
    gap: "40px",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },

  imageBox: {
    flex: 1,
    textAlign: "center",
  },

  image: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "12px",
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "gray",
    marginBottom: "20px",
  },

  infoBox: {
    fontSize: "16px",
    lineHeight: "1.8",
  },

  price: {
    fontSize: "22px",
    color: "#2e7d32",
    fontWeight: "bold",
  },

  btnRow: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  addBtn: {
    padding: "12px 18px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
  },

  cartBtn: {
    padding: "12px 18px",
    background: "#000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },

  notFound: {
    textAlign: "center",
    marginTop: "100px",
  },

  btn: {
    padding: "10px 15px",
    marginTop: "10px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProductDetails;