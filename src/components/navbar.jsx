import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCart();

    // update when storage changes (important)
    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  return (
    <nav style={styles.nav}>

      {/* LOGO */}
      <div style={styles.logo} onClick={() => navigate("/")}>
        🛒 Cartify
      </div>

      {/* LINKS */}
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/products">Products</Link>
        <Link style={styles.link} to="/about">About</Link>
      </div>

      {/* CART */}
      <div
        style={styles.cart}
        onClick={() => navigate("/cart")}
      >
        🛒 Cart
        <span style={styles.badge}>{cartCount}</span>
      </div>

    </nav>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px"
  },

  cart: {
    cursor: "pointer",
    position: "relative",
    fontSize: "15px"
  },

  badge: {
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 7px",
    fontSize: "12px",
    marginLeft: "5px"
  }
};

export default Navbar;