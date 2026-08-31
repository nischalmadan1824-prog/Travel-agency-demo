import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            NOM<span>ADIX</span>
          </h2>

          <p>
            Discover India. Explore beyond. Create memories that stay with you
            long after the journey ends.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/destinations">Destinations</NavLink>
            <NavLink to="/experiences">Experiences</NavLink>
            <NavLink to="/packages">Packages</NavLink>
          </div>

          <div>
            <h4>Connect</h4>

            <NavLink to="/contact">Contact</NavLink>
            <a href="mailto:hello@nomadix.com">hello@nomadix.com</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NOMADIX. Crafted for travelers.</p>

        <p>Explore. Wander. Repeat.</p>
      </div>
    </footer>
  );
}

export default Footer;