import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

function HamburgerMenu({ onClose }) {
  return (
    <div className="hamburger-menu">

      <div className="hamburger-title">
        EXPLORE NOMADIX
      </div>

      {/* MAIN PAGES */}
      <div className="hamburger-links">

        <NavLink to="/destinations" onClick={onClose}>
          <span>Destinations</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/experiences" onClick={onClose}>
          <span>Experiences</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/packages" onClick={onClose}>
          <span>Packages</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/category" onClick={onClose}>
          <span>Category</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/contact" onClick={onClose}>
          <span>Contact Us</span>
          <span>→</span>
        </NavLink>

      </div>

      <div className="hamburger-divider"></div>

      {/* INFORMATION / POLICY PAGES */}
      <div className="hamburger-links">

        <NavLink to="/about" onClick={onClose}>
          <span>About Us</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/payment-policy" onClick={onClose}>
          <span>Payment Policy</span>
          <span>→</span>
        </NavLink>

        <NavLink to="/cancellation-policy" onClick={onClose}>
          <span>Cancellation Policy</span>
          <span>→</span>
        </NavLink>

      </div>

    </div>
  );
}

export default HamburgerMenu;