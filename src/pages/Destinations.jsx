import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useSearchParams } from "react-router-dom";

import destinations from "../data/destinations";

import kashmirImg from "../assets/home/kashmir.jpg";
import ladakhImg from "../assets/home/ladakh.jpg";
import goaImg from "../assets/home/goa.jpg";
import keralaImg from "../assets/home/kerala.jpg";
import rajasthanImg from "../assets/home/rajasthan.jpg";
import andamanImg from "../assets/home/andaman.jpg";

import "./Destinations.css";


function Destinations() {
  const [searchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    categoryParam || "All"
  );

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    setSearch(searchParams.get("search") || "");

    const category = searchParams.get("category");

    setActiveCategory(category || "All");
  }, [searchParams]);
 



  const categories = [
    "All",
    "Mountains",
    "Beaches",
    "Nature",
    "Heritage",
  ];

  const filteredDestinations = destinations.filter((destination) => {
  const searchText = search.trim().toLowerCase();

  const matchesSearch =
    destination.name.toLowerCase().includes(searchText) ||
    destination.region.toLowerCase().includes(searchText) ||
    destination.category.toLowerCase().includes(searchText);

  const matchesCategory =
    activeCategory === "All" ||
    destination.category === activeCategory;

  return matchesSearch && matchesCategory;
});
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    document
      .querySelector(".destination-grid")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <main className="destinations-page">

      {/* HERO */}
      <section className="destinations-hero">
        <div className="destinations-hero-content">
          <motion.span
            className="destination-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            THE NOMADIX ATLAS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Places worth
            <br />
            <em>getting lost in.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From mountain roads to tropical shores,
            discover destinations chosen for the stories
            waiting to happen.
          </motion.p>
        </div>

        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <span>✦</span>
          <strong>EXPLORE</strong>
          <small>INDIA</small>
        </motion.div>
      </section>

      {/* DISCOVERY */}
      <section className="destination-discovery">

        <div className="destination-heading">
          <div>
            <span className="destination-label">
              CHOOSE YOUR ESCAPE
            </span>

            <h2>
              Find your
              <br />
              <em>next destination.</em>
            </h2>
          </div>

          <p>
            Search through our handpicked destinations
            and find a place that matches your kind of journey.
          </p>
        </div>

        <div className="destination-tools">

          <form
            className="destination-search"
            onSubmit={handleSearchSubmit}
          >
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search destinations"
            />

            {search && (
              <button
                type="button"
                className="destination-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

            <button
              type="submit"
              className="destination-search-button"
            >
              Search
            </button>
          </form>

          <div className="destination-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* DESTINATION GRID */}
        <div className="destination-grid">


          {filteredDestinations.map((destination, index) => (
            <motion.article
              className={`destination-card ${index === 0 ? "featured" : ""
                }`}
              key={destination.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                rotateX: 1.5,
                rotateY: -1.5,
              }}
            >
              {/* IMAGE */}
              <div className="destination-image">

                <img
                  src={destination.image}
                  alt={destination.name}
                />

                <div className="destination-image-overlay" />

                <span className="destination-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="destination-tag">
  {destination.tagline}
</span>

              </div>

              {/* CONTENT */}
              <div className="destination-card-content">

                <div className="destination-meta">
                  <span>{destination.category}</span>
                  <span>{destination.region}</span>
                </div>

                <h3>{destination.name}</h3>

                <p className="destination-description">
                  {destination.description}
                </p>

                {/* TRIP INFORMATION */}
                <div className="destination-info">

                  <div>
                    <span>◷</span>
                    <small>DURATION</small>
                    <strong>{destination.duration}</strong>
                  </div>

                  <div>
                    <span>⌖</span>
                    <small>STARTS FROM</small>
                    <strong>{destination.startingPoint}</strong>
                  </div>

                </div>

                {/* INCLUDED */}
                <div className="destination-includes">

                  <span>INCLUDES</span>

                  <div>
                    {destination.includes.map((item) => (
                      <small key={item}>
                        ✓ {item}
                      </small>
                    ))}
                  </div>

                </div>

                {/* PRICE + BUTTON */}
                <div className="destination-bottom">

                  <div className="destination-price">
                    <small>FROM</small>
                    <strong>{destination.price}</strong>
                    <span>/ person</span>
                  </div>

                  <NavLink
                    to={`/journey/${destination.id}`}
                    className="destination-explore"
                  >
                    View journey
                    <span>↗</span>
                  </NavLink>

                </div>

              </div>
            </motion.article>
          ))}


        </div>

        {filteredDestinations.length === 0 && (
          <div className="no-destinations">
            <span>✦</span>
            <h3>No destination found</h3>
            <p>
              Try another destination or category.
            </p>
          </div>
        )}

      </section>

      {/* REGIONS */}
      {/* =====================================
    TRAVEL BY REGION
    ===================================== */}

      <section className="destination-regions">

        {/* Decorative background */}
        <div className="region-map-lines"></div>
        <div className="region-compass">
          <span>N</span>
          <div className="compass-arrow">✦</div>
          <small>S</small>
        </div>

        <div className="regions-intro">

          <motion.span
            className="destination-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            TRAVEL BY REGION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Every direction
            <br />
            has a <em>story.</em>
          </motion.h2>

          <motion.p
            className="regions-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From mighty mountains to blue waters,
            every region has a tale waiting for you.
            Where will yours begin?
          </motion.p>

          <motion.div
            className="regions-badge"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span>✦</span>
            <strong>EXPLORE</strong>
            <small>DREAM · DISCOVER · GO</small>
            <span>✦</span>
          </motion.div>

        </div>

        {/* Region cards */}

        <div className="region-list">

          {/* NORTH */}
          <motion.button
            className="region-card"
            type="button"
            onClick={() => {
              setActiveCategory("Mountains");

              setTimeout(() => {
                document
                  .querySelector(".destination-discovery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 50);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -7,
              rotateY: -1.5,
            }}
          >
            <span className="region-number">01</span>

            <div className="region-image">
              <img src={ladakhImg} alt="North India" />
            </div>

            <div className="region-card-content">
              <span className="region-mini-label">
                MOUNTAINS · VALLEYS
              </span>

              <h3>North India</h3>

              <div className="region-line">
                <span></span>
                <small>Adventure</small>
              </div>
            </div>

            <span className="region-icon">⌁</span>

            <span className="region-arrow">→</span>
          </motion.button>


          {/* WEST */}
          <motion.button
            className="region-card"
            type="button"
            onClick={() => {
              setActiveCategory("Beaches");

              setTimeout(() => {
                document
                  .querySelector(".destination-discovery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 50);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{
              y: -7,
              rotateY: -1.5,
            }}
          >
            <span className="region-number">02</span>

            <div className="region-image">
              <img src={rajasthanImg} alt="West India" />
            </div>

            <div className="region-card-content">
              <span className="region-mini-label">
                BEACHES · HERITAGE
              </span>

              <h3>West India</h3>

              <div className="region-line">
                <span></span>
                <small>Desert</small>
              </div>
            </div>

            <span className="region-icon">⌂</span>

            <span className="region-arrow">→</span>
          </motion.button>


          {/* SOUTH */}
          <motion.button
            className="region-card"
            type="button"
            onClick={() => {
              setActiveCategory("Nature");

              setTimeout(() => {
                document
                  .querySelector(".destination-discovery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 50);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{
              y: -7,
              rotateY: -1.5,
            }}
          >
            <span className="region-number">03</span>

            <div className="region-image">
              <img src={keralaImg} alt="South India" />
            </div>

            <div className="region-card-content">
              <span className="region-mini-label">
                NATURE · CULTURE
              </span>

              <h3>South India</h3>

              <div className="region-line">
                <span></span>
                <small>Slow Travel</small>
              </div>
            </div>

            <span className="region-icon">♧</span>

            <span className="region-arrow">→</span>
          </motion.button>


          {/* ISLAND */}
          <motion.button
            className="region-card"
            type="button"
            onClick={() => {
              setActiveCategory("Beaches");

              setTimeout(() => {
                document
                  .querySelector(".destination-discovery")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }, 50);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{
              y: -7,
              rotateY: -1.5,
            }}
          >
            <span className="region-number">04</span>

            <div className="region-image">
              <img src={andamanImg} alt="Island India" />
            </div>

            <div className="region-card-content">
              <span className="region-mini-label">
                BLUE WATERS · DIVING
              </span>

              <h3>Island India</h3>

              <div className="region-line">
                <span></span>
                <small>Escape</small>
              </div>
            </div>

            <span className="region-icon">≈</span>

            <span className="region-arrow">→</span>
          </motion.button>

        </div>

      </section>

      {/* CTA */}
      <section className="destinations-cta">

        <span className="destination-label">
          STILL DECIDING?
        </span>

        <h2>
          Let the journey
          <br />
          <em>choose you.</em>
        </h2>

        <NavLink
          to="/category"
          className="destination-cta-button"
        >
          Explore by category
          <span>↗</span>
        </NavLink>

      </section>

    </main>
  );
}

export default Destinations;