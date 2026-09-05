import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "../components/BookingModal";
import { NavLink, useParams } from "react-router-dom";
import destinations from "../data/destinations";
import LoginModal from "../components/LoginModal";
import "./Journey.css";

function Journey() {
    const { destinationId } = useParams();
    const [bookingOpen, setBookingOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const destination =
        destinations.find((item) => item.id === destinationId) ||
        destinations[0];
        const handleBookJourney = () => {
  const user = localStorage.getItem("nomadixUser");

  if (user) {
    setBookingOpen(true);
  } else {
    setLoginOpen(true);
  }
};

    const itinerary = [
        {
            day: "01",
            title: `Arrival in ${destination.name}`,
            text: `Begin your journey from ${destination.startingPoint} and travel towards ${destination.name}. Settle in, relax and get ready for the days ahead.`,
        },
        {
            day: "02",
            title: "Discover the local side",
            text: `Explore some of the most memorable places around ${destination.name}. Take your time, enjoy the scenery and experience the local atmosphere.`,
        },
        {
            day: "03",
            title: "Into the experience",
            text: `A day designed around the highlights of this journey, with sightseeing, local experiences and plenty of time to explore.`,
        },
        {
            day: "04",
            title: "Stories beyond the usual",
            text: "Step away from the ordinary tourist route and discover the places and moments that make a trip memorable.",
        },
        {
            day: "05",
            title: "A day to remember",
            text: `Spend another beautiful day exploring ${destination.name}, capturing memories and enjoying the journey at your own pace.`,
        },
        {
            day: "06",
            title: "The journey home",
            text: "Enjoy a relaxed final morning before beginning your return journey with memories to take back home.",
        },
    ];

    return (
        <main className="journey-page">

            {/* =====================================
          HERO
          ===================================== */}

            <section className="journey-hero">

                <img
                    src={destination.image}
                    alt={destination.name}
                    className="journey-hero-image"
                />

                <div className="journey-hero-overlay" />

                <div className="journey-hero-content">

                    <motion.span
                        className="journey-eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        NOMADIX JOURNEY · {destination.category.toUpperCase()}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        {destination.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {destination.tagline}
                    </motion.p>

                </div>

                <div className="journey-hero-number">
                    <span>01</span>
                    <small>THE JOURNEY</small>
                </div>

            </section>

            {/* =====================================
          PACKAGE SUMMARY
          ===================================== */}

            <section className="journey-summary">

                <div className="journey-summary-intro">

                    <span className="journey-label">
                        YOUR NEXT STORY
                    </span>

                    <h2>
                        {destination.name}
                        <br />
                        <em>awaits.</em>
                    </h2>

                    <p>
                        {destination.description}
                    </p>

                </div>

                <div className="journey-facts">

                    <div className="journey-fact">
                        <span>◷</span>
                        <small>DURATION</small>
                        <strong>{destination.duration}</strong>
                    </div>

                    <div className="journey-fact">
                        <span>⌖</span>
                        <small>STARTING FROM</small>
                        <strong>{destination.startingPoint}</strong>
                    </div>

                    <div className="journey-fact">
                        <span>₹</span>
                        <small>PACKAGE FROM</small>
                        <strong>{destination.price}</strong>
                    </div>

                </div>

            </section>

            {/* =====================================
          HIGHLIGHTS
          ===================================== */}

            <section className="journey-highlights">

                <div className="journey-section-heading">

                    <span className="journey-label">
                        HIGHLIGHTS
                    </span>

                    <h2>
                        Moments you'll
                        <br />
                        <em>remember.</em>
                    </h2>

                </div>

                <div className="journey-highlight-grid">

                    {destination.highlights.map((highlight, index) => (
                        <motion.div
                            className="journey-highlight"
                            key={highlight}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -7,
                                rotateY: -2,
                            }}
                        >
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{highlight}</h3>

                            <b>↗</b>
                        </motion.div>
                    ))}

                </div>

            </section>

            {/* =====================================
          ITINERARY
          ===================================== */}

            <section className="journey-itinerary">

                <div className="journey-section-heading">

                    <span className="journey-label">
                        THE ROAD AHEAD
                    </span>

                    <h2>
                        Your journey,
                        <br />
                        <em>day by day.</em>
                    </h2>

                </div>

                <div className="itinerary-list">

                    {itinerary.map((item, index) => (
                        <motion.article
                            className="itinerary-item"
                            key={item.day}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.06,
                            }}
                        >

                            <div className="itinerary-day">
                                DAY
                                <strong>{item.day}</strong>
                            </div>

                            <div className="itinerary-content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>

                            <span className="itinerary-arrow">↗</span>

                        </motion.article>
                    ))}

                </div>

            </section>

            {/* =====================================
          INCLUDED
          ===================================== */}

            <section className="journey-included">

                <div className="journey-included-image">

                    <img
                        src={destination.image}
                        alt={`${destination.name} experience`}
                    />

                    <div className="included-image-caption">
                        <span>TRAVEL WITH NOMADIX</span>
                        <strong>Make the ordinary<br />extraordinary.</strong>
                    </div>

                </div>

                <div className="journey-included-content">

                    <span className="journey-label">
                        WHAT'S INCLUDED
                    </span>

                    <h2>
                        Everything you
                        <br />
                        need. <em>Nothing extra.</em>
                    </h2>

                    <div className="included-list">

                        {destination.includes.map((item) => (
                            <div key={item}>
                                <span>✓</span>
                                <p>{item}</p>
                            </div>
                        ))}

                        <div>
                            <span>✓</span>
                            <p>Nomadix trip assistance</p>
                        </div>

                    </div>

                    <div className="included-note">
                        <span>PLEASE NOTE</span>
                        <p>
                            Package details and inclusions shown here are
                            sample portfolio content and can be customized
                            for your actual travel packages.
                        </p>
                    </div>

                </div>

            </section>

            {/* =====================================
          BOOKING
          ===================================== */}

            <section className="journey-booking">

                <div className="booking-orbit">
                    <span>✦</span>
                </div>

                <span className="journey-label">
                    READY TO GO?
                </span>

                <h2>
                    Your next story
                    <br />
                    starts <em>here.</em>
                </h2>

                <div className="booking-price">

                    <small>PACKAGE FROM</small>

                    <strong>{destination.price}</strong>

                    <span>/ person</span>

                </div>

                <button
  className="journey-book-button"
  onClick={handleBookJourney}
>
  Book this journey
  <span>↗</span>
</button>

                <p className="booking-note">
                    You'll be able to review your details before booking.
                </p>

            </section>

            {/* =====================================
          FAQ
          ===================================== */}

            <section className="journey-faq">

                <div className="journey-section-heading">

                    <span className="journey-label">
                        QUESTIONS
                    </span>

                    <h2>
                        Before you
                        <br />
                        <em>go.</em>
                    </h2>

                </div>

                <div className="faq-list">

                    <details>
                        <summary>
                            What does the package include?
                            <span>+</span>
                        </summary>

                        <p>
                            The package includes the services listed in
                            the What's Included section. Final package
                            inclusions can be customized for the actual trip.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Can I customize this journey?
                            <span>+</span>
                        </summary>

                        <p>
                            Yes. NOMADIX can offer customized durations,
                            activities and travel arrangements based on
                            the final package requirements.
                        </p>
                    </details>

                    <details>
                        <summary>
                            How does booking work?
                            <span>+</span>
                        </summary>

                        <p>
                            Select Book this journey and provide your
                            travel details. The final booking flow will
                            confirm availability and package details.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Can I cancel my booking?
                            <span>+</span>
                        </summary>

                        <p>
                            Cancellation conditions depend on the package
                            and booking date. See the NOMADIX Cancellation
                            Policy for the applicable terms.
                        </p>
                    </details>

                </div>

            </section>

            {/* =====================================
          BACK TO DESTINATIONS
          ===================================== */}

            <section className="journey-back">

                <span className="journey-label">
                    KEEP EXPLORING
                </span>

                <h2>
                    There's more
                    <br />
                    <em>out there.</em>
                </h2>

                <NavLink
                    to="/destinations"
                    className="journey-back-button"
                >
                    Back to destinations
                    <span>↗</span>
                </NavLink>

            </section>
            {bookingOpen && (
                <BookingModal
                    destination={destination}
                    onClose={() => setBookingOpen(false)}
                />
            )}
            {loginOpen && (
  <LoginModal
    onClose={() => setLoginOpen(false)}
    onLogin={() => {
      setLoginOpen(false);
      setBookingOpen(true);
    }}
  />
)}

        </main>
    );
}

export default Journey;