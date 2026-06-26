import { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

  const brands = [
    "All",
    ...new Set(products.map((p) => p.brand)),
  ];

  const filteredProducts = products.filter(
    (product) => {
      const matchSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.model
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchBrand =
        brand === "All" ||
        product.brand === brand;

      return matchSearch && matchBrand;
    }
  );

  return (
    <main style={styles.container}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1>🛍️ All Products</h1>

        <p>
          Explore top quality electronics &
          gadgets
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
          placeholder="Search by name or model..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={styles.search}
        />

        <label
          htmlFor="brand"
          style={styles.hidden}
        >
          Filter by Brand
        </label>

        <select
          id="brand"
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
          style={styles.select}
        >
          {brands.map((b) => (
            <option
              key={b}
              value={b}
            >
              {b}
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
              alt={`${product.name} - ${product.brand}`}
              loading="lazy"
              width="300"
              height="200"
              style={styles.image}
            />

            <h3>{product.name}</h3>

            <p style={styles.subText}>
              {product.brand} •{" "}
              {product.model}
            </p>

            <p>
              🎨 Color: {product.color}
            </p>

            <p style={styles.price}>
              ₹{product.price}
            </p>

            <p style={styles.stock}>
              {product.countInStock > 0
                ? `In Stock (${product.countInStock})`
                : "Out of Stock"}
            </p>

            <Link
              to={`/product/${product.id}`}
              style={styles.btn}
              aria-label={`View details of ${product.name}`}
            >
              View Details
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
    background: "#f4f6f8",
    minHeight: "100vh",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
    background:
      "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "30px",
    borderRadius: "15px",
    color: "white",
  },

  search: {
    padding: "10px",
    width: "60%",
    borderRadius: "8px",
    border: "none",
    marginTop: "10px",
  },

  select: {
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "8px",
    border: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
    display: "block",
  },

  subText: {
    color: "#555",
    fontSize: "14px",
  },

  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2e7d32",
  },

  stock: {
    fontSize: "13px",
    color: "#555",
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

export default Products;