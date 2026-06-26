import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = [
  "All",
  "Electronics",
  "Mobiles",
  "Accessories",
  "Books",
  "Furniture",
  "Groceries",
  "Chocolates"
];

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div style={styles.container}>
      
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to Cartify 🛒</h1>
        <p style={styles.subtitle}>
          Discover best products at best prices
        </p>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {/* FILTER DROPDOWN */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          {categories.map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} style={styles.image} />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`} style={styles.btn}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },

  hero: {
    textAlign: "center",
    marginBottom: "30px",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    padding: "40px",
    borderRadius: "15px",
    color: "white",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.9,
  },

  search: {
    padding: "10px",
    width: "60%",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
  },

  select: {
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "8px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  btn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    background: "#667eea",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Home;