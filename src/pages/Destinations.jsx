import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Destinations.css";

import ladakhImg from "../assets/destinations/ladakh.jpg";
import goaImg from "../assets/destinations/goa.jpg";
import hampiImg from "../assets/destinations/hampi.jpg";
import munnarImg from "../assets/destinations/munnar.jpg";
import manaliImg from "../assets/destinations/manali.jpg";
import jaipurImg from "../assets/destinations/jaipur.jpg";
import baliImg from "../assets/destinations/bali.jpg";
import dubaiImg from "../assets/destinations/dubai.jpg";

function Destinations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
  "All",
  "Mountains",
  "Beaches",
  "Heritage",
  "Nature",
  "International",
];

  const destinations = [
  {
    name: "Ladakh",
    location: "Ladakh, India",
    category: "Mountains",
    image: ladakhImg,
    description:
      "High-altitude landscapes, monasteries and endless mountain roads.",
  },

  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "Mountains",
    image: manaliImg,
    description:
      "Snow-capped peaks, scenic valleys and unforgettable adventures.",
  },

  {
    name: "Goa",
    location: "Goa, India",
    category: "Beaches",
    image: goaImg,
    description:
      "Golden beaches, vibrant sunsets and peaceful coastal escapes.",
  },

  {
    name: "Hampi",
    location: "Karnataka, India",
    category: "Heritage",
    image: hampiImg,
    description:
      "Ancient ruins, dramatic landscapes and stories from another era.",
  },

  {
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "Heritage",
    image: jaipurImg,
    description:
      "Royal palaces, colorful streets and the timeless charm of Rajasthan.",
  },

  {
    name: "Munnar",
    location: "Kerala, India",
    category: "Nature",
    image: munnarImg,
    description:
      "Rolling tea gardens, misty hills and peaceful green escapes.",
  },

  {
    name: "Bali",
    location: "Indonesia",
    category: "International",
    image: baliImg,
    description:
      "Tropical beaches, lush landscapes and unforgettable island experiences.",
  },

  {
    name: "Dubai",
    location: "United Arab Emirates",
    category: "International",
    image: dubaiImg,
    description:
      "Modern architecture, desert adventures and extraordinary experiences.",
  },
];
  const filteredDestinations =
    activeCategory === "All"
      ? destinations
      : destinations.filter(
          (destination) =>
            destination.category === activeCategory
        );

  return (
    <main className="destinations-page">

      {/* HERO */}
      <section className="destinations-hero">
        <div className="destinations-hero-glow glow-one"></div>
        <div className="destinations-hero-glow glow-two"></div>

        <motion.p
          className="page-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EXPLORE THE WORLD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Where will you
          <span> go next?</span>
        </motion.h1>

        <motion.p
          className="destinations-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover breathtaking destinations across India and beyond.
          Every journey begins with a single destination.
        </motion.p>
      </section>

      {/* DESTINATIONS CONTENT */}
      <section className="destinations-content">

        {/* FILTERS */}
        <div className="destination-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="destinations-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination, index) => (
              <motion.article
                layout
                key={destination.name}
                className="destination-page-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
              >
                <div className="destination-image">
                  <img
                    src={destination.image}
                    alt={destination.name}
                  />

                  <div className="destination-image-overlay"></div>

                  <span className="destination-category">
                    {destination.category}
                  </span>
                </div>

                <div className="destination-info">
                  <p className="destination-location">
                    📍 {destination.location}
                  </p>

                  <h2>{destination.name}</h2>

                  <p className="destination-text">
                    {destination.description}
                  </p>

                  <NavLink
  to="/contact"
  className="discover-btn"
>
  Discover Journey →
</NavLink>   
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>
    </main>
  );
}

export default Destinations;