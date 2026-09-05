import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "./About.css";
import keralaImg from "../assets/home/kerala.jpg";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">

          <motion.p
            className="about-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            THE NOMADIX STORY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We don't just plan
            <span> journeys.</span>
          </motion.h1>

          <motion.p
            className="about-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We create stories worth remembering, places worth
            discovering, and journeys you'll talk about long after
            you've returned home.
          </motion.p>

        </div>

        <div className="about-orbit about-orbit-one"></div>
        <div className="about-orbit about-orbit-two"></div>
      </section>


      {/* OUR STORY */}
      <section className="about-story">

        <motion.div
          className="about-story-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
  src={keralaImg}
  alt="Kerala landscape"
/>

          <div className="about-image-badge">
            <span>✦</span>
            Travel differently
          </div>
        </motion.div>

        <motion.div
          className="about-story-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">OUR STORY</p>

          <h2>
            Born from a love of
            <span> getting lost.</span>
          </h2>

          <p>
            NOMADIX was created for travelers who believe that a
            journey is about more than simply reaching a destination.
          </p>

          <p>
            It's about waking up somewhere new, meeting people along
            the way, trying something you've never tried before, and
            collecting moments that stay with you.
          </p>

          <p>
            From mountain roads and quiet beaches to ancient cities
            and hidden escapes, we curate journeys that make every
            destination feel personal.
          </p>
        </motion.div>

      </section>


      {/* PHILOSOPHY */}
      <section className="about-philosophy">

        <div className="about-section-heading">
          <p className="section-label">THE NOMADIX WAY</p>

          <h2>
            Travel with
            <span> intention.</span>
          </h2>

          <p>
            Three simple ideas guide every journey we create.
          </p>
        </div>

        <div className="about-values">

          <motion.div
            className="about-value-card"
            whileHover={{ y: -8, rotateX: 2 }}
          >
            <div className="value-number">01</div>
            <div className="value-icon">✦</div>

            <h3>Curated</h3>

            <p>
              We focus on meaningful places, memorable experiences,
              and thoughtfully designed itineraries.
            </p>
          </motion.div>


          <motion.div
            className="about-value-card featured-value"
            whileHover={{ y: -8, rotateX: 2 }}
          >
            <div className="value-number">02</div>
            <div className="value-icon">◎</div>

            <h3>Personal</h3>

            <p>
              Your journey should feel like yours. We design trips
              around the way you want to experience the world.
            </p>
          </motion.div>


          <motion.div
            className="about-value-card"
            whileHover={{ y: -8, rotateX: 2 }}
          >
            <div className="value-number">03</div>
            <div className="value-icon">↗</div>

            <h3>Unforgettable</h3>

            <p>
              Because the best trips aren't measured by miles
              traveled, but by memories created.
            </p>
          </motion.div>

        </div>
      </section>


      {/* WHAT WE OFFER */}
      <section className="about-offer">

        <div className="about-offer-heading">
          <p className="section-label">WHAT WE DO</p>

          <h2>
            From the first idea
            <span> to the final sunset.</span>
          </h2>
        </div>

        <div className="about-offer-list">

          <div className="offer-item">
            <span>01</span>
            <h3>Destination Discovery</h3>
            <p>
              Helping you find places that match your mood,
              interests and travel style.
            </p>
          </div>

          <div className="offer-item">
            <span>02</span>
            <h3>Curated Packages</h3>
            <p>
              Carefully designed journeys with stays,
              experiences and essentials planned for you.
            </p>
          </div>

          <div className="offer-item">
            <span>03</span>
            <h3>Travel Experiences</h3>
            <p>
              From mountain adventures to peaceful escapes,
              discover experiences beyond ordinary sightseeing.
            </p>
          </div>

          <div className="offer-item">
            <span>04</span>
            <h3>Journey Support</h3>
            <p>
              We're here before, during and after your journey
              whenever you need a little help.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>
          <p className="section-label">YOUR STORY STARTS HERE</p>

          <h2>
            Somewhere out there,
            <span> you're meant to be.</span>
          </h2>
        </div>

        <NavLink
          to="/destinations"
          className="about-cta-button"
        >
          Find Your Destination →
        </NavLink>

      </section>

    </main>
  );
}

export default About;