import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigate = useNavigate();

  // Load logged-in user
  useEffect(() => {
    const loadUserData = () => {
      const savedUser = localStorage.getItem("nomadixUser");
      const savedBookings = localStorage.getItem("nomadixBookings");

      const currentUser = savedUser ? JSON.parse(savedUser) : null;

      const allBookings = savedBookings
        ? JSON.parse(savedBookings)
        : [];
      setUser(currentUser);

      // Check that the booking belongs to the logged-in user
      if (currentUser) {
        const userBookings = allBookings.filter(
          (booking) =>
            booking.email?.toLowerCase().trim() ===
            currentUser.email?.toLowerCase().trim() &&
            booking.name?.toLowerCase().trim() ===
            currentUser.name?.toLowerCase().trim()
        );

        setBookings(userBookings);
      } else {
        setBookings([]);
      }
    };

    loadUserData();

    window.addEventListener("storage", loadUserData);
    window.addEventListener("nomadixLogin", loadUserData);
    const handleBooking = () => {
      const savedUser = localStorage.getItem("nomadixUser");
      const savedBookings = JSON.parse(
        localStorage.getItem("nomadixBookings") || "[]"
      );

      if (savedUser) {
        const currentUser = JSON.parse(savedUser);

        setUser(currentUser);

        setBookings(
          savedBookings.filter(
            (booking) =>
              booking.email?.toLowerCase().trim() ===
              currentUser.email?.toLowerCase().trim() &&
              booking.name?.toLowerCase().trim() ===
              currentUser.name?.toLowerCase().trim()
          )
        );
      }
    };
    window.addEventListener("nomadixBooking", handleBooking);

    return () => {
      window.removeEventListener("storage", loadUserData);
      window.removeEventListener("nomadixLogin", loadUserData);
      window.removeEventListener("nomadixBooking", handleBooking);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = search.trim();

    if (!searchText) return;

    navigate(
      `/destinations?search=${encodeURIComponent(searchText)}`
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("nomadixUser");

    setUser(null);
    setBookings([]);
    setProfileOpen(false);

    // Tell App.jsx that the user logged out
    window.dispatchEvent(new Event("nomadixLogout"));
  };

  return (
    <header className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="navbar-logo">
        NOMADIX
      </NavLink>

      {/* SEARCH */}
      <div className="search-container">

        <button
          className="mobile-search-button"
          onClick={() => {
            setMobileSearchOpen(true);
            setMenuOpen(false);
            setProfileOpen(false);
          }}
          aria-label="Open search"
        >
          ⌕
        </button>

        <form
          className="navbar-search"
          onSubmit={handleSearch}
        >
          <span>⌕</span>

          <input
            type="search"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

      </div>

      {/* NAVIGATION */}
      <nav className="navbar-links">
        <NavLink to="/destinations">Destinations</NavLink>
        <NavLink to="/experiences">Experiences</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      {/* PROFILE */}

      <div className="navbar-profile">

        <button
          className="profile-button"
          onClick={() => setProfileOpen(!profileOpen)}
          aria-label="Open profile"
        >
          <span className="profile-icon">
            ♙
          </span>
        </button>

        {profileOpen && (
          <div className="profile-dropdown">

            {user ? (
              <>
                <div className="profile-header">

                  <div className="profile-avatar">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>

                </div>

                <div className="profile-divider" />

                <div className="profile-section">

                  <span className="profile-label">
                    MY DETAILS
                  </span>

                  <div className="profile-detail">
                    <small>NAME</small>
                    <strong>{user.name}</strong>
                  </div>

                  <div className="profile-detail">
                    <small>EMAIL</small>
                    <strong>{user.email}</strong>
                  </div>

                </div>

                <div className="profile-divider" />

                <div className="profile-section">

                  <span className="profile-label">
                    MY BOOKING
                  </span>

                  {bookings.length > 0 ? (
                    <div className="profile-bookings-list">
                      {bookings.map((booking) => (
                        <div
                          className="profile-booking"
                          key={booking.id}
                        >
                          <div className="booking-destination">
                            <span>✦</span>
                            <strong>{booking.destination}</strong>
                          </div>

                          <div className="profile-detail">
                            <small>BOOKING ID</small>
                            <strong>{booking.id}</strong>
                          </div>

                          <div className="profile-detail">
                            <small>TRAVELERS</small>
                            <strong>{booking.travelers}</strong>
                          </div>

                          <div className="profile-detail">
                            <small>PACKAGE</small>
                            <strong>{booking.price}</strong>
                          </div>

                          <div className="profile-detail">
                            <small>BOOKED ON</small>
                            <strong>
                              {new Date(booking.bookedAt).toLocaleDateString("en-IN")}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-booking">No bookings yet.</p>
                  )}

                </div>

                <button
                  className="profile-logout"
                  onClick={handleLogout}
                >
                  Log out
                  <span>↗</span>
                </button>
              </>
            ) : (
              /* LOGGED OUT */
              <div className="profile-login">

                <div className="profile-login-icon">
                  ♙
                </div>

                <span className="profile-label">
                  NOMADIX TRAVELER
                </span>

                <h3>
                  Welcome back.
                </h3>

                <p>
                  Sign in to manage your details
                  and view your bookings.
                </p>

                <button
                  className="profile-login-button"
                  onClick={() => {
                    setProfileOpen(false);
                    setLoginOpen(true);
                  }}
                >
                  Login / Sign in
                  <span>↗</span>
                </button>

              </div>
            )}

          </div>
        )}

      </div>
      {/* MOBILE SEARCH */}
      {mobileSearchOpen && (
        <div className="mobile-search-overlay">

          <form
            className="mobile-search-form"
            onSubmit={(e) => {
              handleSearch(e);
              setMobileSearchOpen(false);
            }}
          >

            <input
              autoFocus
              type="search"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="submit"
              className="mobile-search-submit"
            >
              Search
            </button>

            <button
              type="button"
              className="mobile-search-close"
              onClick={() => setMobileSearchOpen(false)}
            >
              ×
            </button>

          </form>

        </div>
      )}


      {/* HAMBURGER */}
      <button
        className={`menu-button ${menuOpen ? "active" : ""
          }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MENU */}
      {menuOpen && (
        <div className="menu-dropdown">

          <p className="menu-label">
            EXPLORE NOMADIX
          </p>

          {/* MAIN PAGES */}

          <NavLink
            to="/destinations"
            onClick={() => setMenuOpen(false)}
          >
            Destinations <span>→</span>
          </NavLink>

          <NavLink
            to="/experiences"
            onClick={() => setMenuOpen(false)}
          >
            Experiences <span>→</span>
          </NavLink>

          <NavLink
            to="/packages"
            onClick={() => setMenuOpen(false)}
          >
            Packages <span>→</span>
          </NavLink>

          <NavLink
            to="/category"
            onClick={() => setMenuOpen(false)}
          >
            Category <span>→</span>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us <span>→</span>
          </NavLink>

          <div className="menu-divider"></div>

          {/* INFORMATION / POLICY */}

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About Us <span>→</span>
          </NavLink>

          <NavLink
            to="/payment-policy"
            onClick={() => setMenuOpen(false)}
          >
            Payment Policy <span>→</span>
          </NavLink>

          <NavLink
            to="/cancellation-policy"
            onClick={() => setMenuOpen(false)}
          >
            Cancellation Policy <span>→</span>
          </NavLink>

        </div>
      )}

      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onLogin={(loggedInUser) => {
            // Update logged-in user
            setUser(loggedInUser);

            // Get all saved bookings
            const savedBookings = JSON.parse(
              localStorage.getItem("nomadixBookings") || "[]"
            );

            // Show only bookings belonging to this user
            const userBookings = savedBookings.filter(
              (booking) =>
                booking.userId === loggedInUser.id &&
                booking.email === loggedInUser.email &&
                booking.name === loggedInUser.name
            );

            setBookings(userBookings);

            // Close login modal
            setLoginOpen(false);
          }}
        />
      )}
    </header>
  );
}

export default Navbar;