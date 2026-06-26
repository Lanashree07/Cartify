function About() {
  const features = [
    { icon: "🛍️", text: "Browse Products Easily" },
    { icon: "📄", text: "View Detailed Product Info" },
    { icon: "🛒", text: "Add Items to Cart" },
    { icon: "⚡", text: "Fast Performance" },
    { icon: "📱", text: "Fully Responsive Design" },
    { icon: "💾", text: "Local Storage Cart System" },
  ];

  const tech = [
    "React.js",
    "React Router DOM",
    "JavaScript",
    "CSS3",
    "Vite",
    "Local Storage",
  ];

  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>About Cartify 🛒</h1>
        <p style={styles.subtitle}>
          A modern, fast and user-friendly e-commerce product catalog
          built with React for real-world shopping experience simulation.
        </p>
      </div>

      {/* ABOUT BOX */}
      <div style={styles.card}>
        <h2>🚀 Project Overview</h2>
        <p style={styles.text}>
          Cartify is a frontend e-commerce web application designed to
          simulate a real shopping platform experience. Users can browse
          products, filter items, view detailed information, and manage
          their cart seamlessly using browser local storage.
        </p>
      </div>

      {/* FEATURES */}
      <h2 style={styles.sectionTitle}>✨ Key Features</h2>

      <div style={styles.featureGrid}>
        {features.map((f, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.icon}>{f.icon}</div>
            <p style={styles.featureText}>{f.text}</p>
          </div>
        ))}
      </div>

      {/* TECH STACK */}
      <h2 style={styles.sectionTitle}>⚙️ Tech Stack</h2>

      <div style={styles.techContainer}>
        {tech.map((t, index) => (
          <span key={index} style={styles.badge}>
            {t}
          </span>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div style={styles.footer}>
        <p>
          💡 Built for internship demonstration – focused on UI/UX,
          performance and React fundamentals.
        </p>
      </div>

    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f4f6fb",
    minHeight: "100vh",
    padding: "30px",
  },

  hero: {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white",
    borderRadius: "15px",
    marginBottom: "25px",
  },

  title: {
    fontSize: "34px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.9,
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    marginBottom: "25px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#444",
  },

  sectionTitle: {
    marginBottom: "15px",
    fontSize: "20px",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginBottom: "30px",
  },

  featureCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  icon: {
    fontSize: "26px",
    marginBottom: "10px",
  },

  featureText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },

  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "30px",
  },

  badge: {
    background: "#667eea",
    color: "white",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "13px",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    color: "#555",
    fontSize: "14px",
  },
};

export default About;