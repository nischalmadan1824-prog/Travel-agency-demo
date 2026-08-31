import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Packages.css";

function Packages() {
  const packages = [
    {
      name: "Explorer",
      price: "₹12,999",
      duration: "3 Nights / 4 Days",
      description: "A quick escape for travelers who love discovering new places.",
      features: [
        "Comfortable hotel stay",
        "Daily breakfast",
        "Local sightseeing",
        "Airport / station pickup",
      ],
    },
    {
      name: "Adventurer",
      price: "₹24,999",
      duration: "5 Nights / 6 Days",
      description: "The perfect balance of adventure, comfort and exploration.",
      popular: true,
      features: [
        "Premium hotel stay",
        "Daily breakfast",
        "Guided experiences",
        "Private transportation",
        "Adventure activity",
      ],
    },
    {
      name: "Wanderer",
      price: "₹39,999",
      duration: "7 Nights / 8 Days",
      description: "A complete journey designed for unforgettable experiences.",
      features: [
        "Luxury accommodation",
        "All meals included",
        "Curated experiences",
        "Private transportation",
        "Dedicated travel support",
      ],
    },
  ];

  return (
    <main className="packages-page">

      {/* ================= HERO ================= */}

      <section className="packages-hero">

        <div className="package-glow package-glow-one"></div>
        <div className="package-glow package-glow-two"></div>

        <motion.p
          className="page-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          TRAVEL YOUR WAY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Choose your next
          <span> escape.</span>
        </motion.h1>

        <motion.p
          className="packages-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Thoughtfully designed travel packages for explorers,
          adventurers and dreamers.
        </motion.p>

      </section>

      {/* ================= PACKAGES ================= */}

      <section className="packages-section">

        <div className="packages-grid">

          {packages.map((pkg, index) => (

            <motion.article
              className={`package-card ${
                pkg.popular ? "popular-package" : ""
              }`}
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
            >

              {pkg.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="package-top">
                <span className="package-number">
                  0{index + 1}
                </span>

                <h2>{pkg.name}</h2>

                <p>{pkg.description}</p>
              </div>

              <div className="package-price">
                <span>FROM</span>

                <strong>{pkg.price}</strong>

                <small>{pkg.duration}</small>
              </div>

              <div className="package-divider"></div>

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <NavLink
  to="/contact"
  className="package-button"
>
  Explore Package →
</NavLink>

            </motion.article>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Packages;