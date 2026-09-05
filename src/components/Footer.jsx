import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="nomadix-footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            NOMADIX
          </NavLink>

          <p>
            Curated journeys for curious souls.
            <br />
            Go farther. Feel more. Remember everything.
          </p>

          <span className="footer-location">
            INDIA · BEYOND · EVERYWHERE
          </span>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h4>EXPLORE</h4>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* Information */}
        <div className="footer-column">
          <h4>INFORMATION</h4>

          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/payment-policy">Payment Policy</NavLink>
          <NavLink to="/cancellation-policy">
            Cancellation Policy
          </NavLink>
        </div>

        {/* Connect */}
        <div className="footer-column footer-connect">
          <h4>LET'S CONNECT</h4>

          <p>
            Have a destination in mind?
            <br />
            Let's make it a journey.
          </p>

          <NavLink to="/contact" className="footer-contact-button">
            Start a conversation <span>↗</span>
          </NavLink>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} NOMADIX. ALL RIGHTS RESERVED.
        </span>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            FB
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            YT
          </a>
        </div>

        <span className="footer-made">
          MADE FOR THE JOURNEY
        </span>

      </div>
    </footer>
  );
}

export default Footer;