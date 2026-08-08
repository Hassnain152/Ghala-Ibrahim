import React from "react";

function App() {
  const currentVersion = "1.0.0";
  const latestVersion = "2.0.0";

  const handleUpdate = () => {
    window.location.href = "https://www.npmjs.com/";
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Icon */}
        <div style={styles.iconWrapper}>
          <div style={styles.icon}>↻</div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.badge}>UPDATE AVAILABLE</div>

          <h1 style={styles.title}>
            Your package needs an update
          </h1>

          <p style={styles.description}>
            A newer version of this package is available. Update your
            package to get the latest features, improvements, and fixes.
          </p>

          {/* Version information */}
          <div style={styles.versionBox}>
            <div style={styles.versionItem}>
              <span style={styles.label}>Current version</span>
              <strong style={styles.currentVersion}>
                v{currentVersion}
              </strong>
            </div>

            <div style={styles.arrow}>→</div>

            <div style={styles.versionItem}>
              <span style={styles.label}>Latest version</span>
              <strong style={styles.latestVersion}>
                v{latestVersion}
              </strong>
            </div>
          </div>

          {/* Button */}
          <button style={styles.button} onClick={handleUpdate}>
            Update Package
            <span style={styles.buttonArrow}>→</span>
          </button>

          <p style={styles.footerText}>
            Please update your package to continue using the latest version.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    background: "#f5f7fb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },

  card: {
    width: "100%",
    maxWidth: "560px",
    boxSizing: "border-box",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "clamp(24px, 6vw, 48px)",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.10)",
  },

  iconWrapper: {
    width: "76px",
    height: "76px",
    margin: "0 auto 24px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef2ff",
  },

  icon: {
    fontSize: "42px",
    lineHeight: "1",
    color: "#4f46e5",
    fontWeight: "600",
  },

  content: {
    width: "100%",
  },

  badge: {
    display: "inline-block",
    padding: "7px 12px",
    borderRadius: "30px",
    background: "#eef2ff",
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.8px",
    marginBottom: "16px",
  },

  title: {
    margin: "0 0 14px",
    fontSize: "clamp(26px, 6vw, 38px)",
    lineHeight: "1.2",
    fontWeight: "750",
    color: "#111827",
  },

  description: {
    margin: "0 auto",
    maxWidth: "470px",
    fontSize: "clamp(14px, 3vw, 16px)",
    lineHeight: "1.7",
    color: "#6b7280",
  },

  versionBox: {
    margin: "28px 0",
    padding: "18px",
    borderRadius: "14px",
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "clamp(12px, 4vw, 28px)",
    flexWrap: "wrap",
  },

  versionItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    minWidth: "110px",
  },

  label: {
    fontSize: "12px",
    color: "#9ca3af",
    fontWeight: "600",
  },

  currentVersion: {
    fontSize: "18px",
    color: "#374151",
  },

  latestVersion: {
    fontSize: "18px",
    color: "#16a34a",
  },

  arrow: {
    fontSize: "24px",
    color: "#9ca3af",
  },

  button: {
    width: "100%",
    minHeight: "52px",
    border: "none",
    borderRadius: "12px",
    padding: "14px 20px",
    background: "#4f46e5",
    color: "#cd7979",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.2s",
  },

  buttonArrow: {
    fontSize: "20px",
  },

  footerText: {
    margin: "18px 0 0",
    fontSize: "12px",
    lineHeight: "1.5",
    color: "#9ca3af",
  },
};

export default App;

















// import Navbar from "./ALLComp/Navbar"
// import './App.css'
// import Home from "./ALLComp/Home"
// import Contactus from "./ALLComp/Contactus";
// import Offer from "./ALLComp/Offer";
// import Clients from "./ALLComp/Clients";
// import Projects from "./ALLComp/Projects";
// import Footer from "./ALLComp/Footer";
// import Aboutus from "./ALLComp/Aboutus";
// import React, { useEffect,  } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// function App() {
//    useEffect(() => {
//           Aos.init({ duration: 2000 });
//         }, []);
//   return (
//     <>
//     <div class="container">
//     <Navbar/>
//     <Home/>
//     <Clients/>
//     <Offer/>
//     <Projects/>
//     <Contactus/>
//     <Aboutus/>
//     <Footer/>
//     </div>

    

    
//     </>
//   );
// }

// export default App;
