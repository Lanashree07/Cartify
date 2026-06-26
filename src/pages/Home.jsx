import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Mobiles",
    "Accessories",
    "Books",
    "Furniture",
    "Groceries",
    "Chocolates",
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Welcome to Cartify 🛒
        </h1>

        <p style={styles.subtitle}>
          Discover the best products at the
          best prices.
        </p>

        <label
          htmlFor="search"
          style={styles.hidden}
        >
          Search Products
        </label>

        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={styles.search}
        />

        <label
          htmlFor="category"
          style={styles.hidden}
        >
          Filter by Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={styles.select}
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>
      </section>

      {/* PRODUCTS */}
      <section style={styles.grid}>
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            style={styles.card}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width="300"
              height="200"
              style={styles.image}
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <Link
              to={`/product/${product.id}`}
              style={styles.btn}
              aria-label={`View ${product.name}`}
            >
              View Product
            </Link>
          </article>
        ))}
      </section>
    </main>
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
    background:
      "linear-gradient(to right, #667eea, #764ba2)",
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
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "15px",
    borderRadius: "10px",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
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

  hidden: {
    position: "absolute",
    left: "-9999px",
  },
};

export default Home;