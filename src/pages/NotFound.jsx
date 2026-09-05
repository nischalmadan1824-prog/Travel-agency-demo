import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound-page">

      <div className="notfound-glow glow-one"></div>
      <div className="notfound-glow glow-two"></div>

      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <motion.span
          className="notfound-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          LOST ON THE JOURNEY
        </motion.span>

        <h1>
          4<span>0</span>4
        </h1>

        <h2>
          This destination
          <span> doesn't exist.</span>
        </h2>

        <p>
          Looks like you've wandered somewhere off the map.
          Let's get you back to exploring beautiful destinations.
        </p>

        <NavLink
          to="/"
          className="notfound-button"
        >
          Back to Home →
        </NavLink>

      </motion.div>

    </main>
  );
}

export default NotFound;