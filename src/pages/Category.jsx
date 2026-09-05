import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Category.css";

import kashmirImg from "../assets/home/kashmir.jpg";
import goaImg from "../assets/home/goa.jpg";
import keralaImg from "../assets/home/kerala.jpg";
import rajasthanImg from "../assets/home/rajasthan.jpg";
import andamanImg from "../assets/home/andaman.jpg";
import ladakhImg from "../assets/home/ladakh.jpg";

const categories = [
  {
    id: "mountains",
    name: "Mountains",
    eyebrow: "HIGH & WILD",
    description:
      "Escape into dramatic peaks, quiet valleys and roads that lead beyond the ordinary.",
    image: ladakhImg,
    filter: "Mountains",
  },
  {
    id: "beaches",
    name: "Beaches",
    eyebrow: "SLOW & SUNNY",
    description:
      "Golden shores, turquoise waters and days that move at their own beautiful pace.",
    image: goaImg,
    filter: "Beaches",
  },
  {
    id: "nature",
    name: "Nature",
    eyebrow: "GREEN ESCAPES",
    description:
      "Find calm among forests, backwaters, misty hills and landscapes untouched by hurry.",
    image: keralaImg,
    filter: "Nature",
  },
  {
    id: "heritage",
    name: "Heritage",
    eyebrow: "STORIES OF INDIA",
    description:
      "Walk through forts, palaces and old cities where every corner carries a story.",
    image: rajasthanImg,
    filter: "Heritage",
  },
  {
    id: "islands",
    name: "Islands",
    eyebrow: "INTO THE BLUE",
    description:
      "Trade the familiar for tropical shores, island adventures and endless ocean horizons.",
    image: andamanImg,
    filter: "Beaches",
  },
  {
    id: "adventure",
    name: "Adventure",
    eyebrow: "CHASE THE THRILL",
    description:
      "Take the road less travelled with unforgettable landscapes and experiences along the way.",
    image: kashmirImg,
    filter: "Mountains",
  },
];

function Category() {
  return (
    <main className="category-page">

      {/* HERO */}
      <section className="category-hero">
        <div className="category-hero-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.div
          className="category-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="category-eyebrow">
            THE NOMADIX COLLECTION
          </span>

          <h1>
            Travel by
            <em> mood.</em>
          </h1>

          <p>
            Some journeys begin with a destination.
            Others begin with a feeling. Find the kind
            of escape you're craving.
          </p>
        </motion.div>

        <motion.div
          className="category-orbit"
          animate={{ rotate: 360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>EXPLORE · DREAM · DISCOVER ·</span>
        </motion.div>
      </section>

      {/* CATEGORY GRID */}
      <section className="category-discovery">

        <div className="category-heading">
          <div>
            <span className="category-section-label">
              CHOOSE YOUR ESCAPE
            </span>

            <h2>
              Where do you
              <em> belong?</em>
            </h2>
          </div>

          <p>
            From mountain roads to tropical shores,
            choose a mood and let NOMADIX take you there.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.article
              className={`category-card category-card-${index + 1}`}
              key={category.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="category-image-wrap">
                <img
                  src={category.image}
                  alt={category.name}
                />

                <div className="category-image-overlay"></div>

                <span className="category-number">
                  0{index + 1}
                </span>

                <span className="category-arrow">
                  ↗
                </span>
              </div>

              <div className="category-card-content">
                <span className="category-card-eyebrow">
                  {category.eyebrow}
                </span>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <NavLink
                  to={`/destinations?category=${category.filter}`}
                  className="category-explore"
                >
                  Explore {category.name}
                  <span>→</span>
                </NavLink>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="category-cta">
        <div className="category-cta-inner">
          <span className="category-section-label">
            STILL NOT SURE?
          </span>

          <h2>
            Let the journey
            <em> choose you.</em>
          </h2>

          <p>
            Explore all our destinations and discover
            somewhere you didn't know you needed to go.
          </p>

          <NavLink
            to="/destinations"
            className="category-cta-button"
          >
            Explore all destinations
            <span>↗</span>
          </NavLink>
        </div>
      </section>

    </main>
  );
}

export default Category;