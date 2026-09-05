import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Home.css";

import kashmirImg from "../assets/home/kashmir.jpg";
import ladakhImg from "../assets/home/ladakh.jpg";
import goaImg from "../assets/home/goa.jpg";
import keralaImg from "../assets/home/kerala.jpg";
import rajasthanImg from "../assets/home/rajasthan.jpg";
import andamanImg from "../assets/home/andaman.jpg";

function Home() {
    const destinations = [
        {
            name: "Kashmir",
            location: "Paradise in the Himalayas",
            image: kashmirImg,
            size: "large",
        },
        {
            name: "Goa",
            location: "Sun, sand & slow days",
            image: goaImg,
            size: "small",
        },
        {
            name: "Kerala",
            location: "God's own country",
            image: keralaImg,
            size: "small",
        },
        {
            name: "Ladakh",
            location: "Where the mountains call",
            image: ladakhImg,
            size: "small",
        },
        {
            name: "Rajasthan",
            location: "Royal stories & golden sands",
            image: rajasthanImg,
            size: "small",
        },
        {
            name: "Andaman",
            location: "Into the blue",
            image: andamanImg,
            size: "wide",
        },
    ];
    const [showFeedback, setShowFeedback] = useState(false);

    const [feedbacks, setFeedbacks] = useState(() => {
        const savedFeedbacks = localStorage.getItem("nomadixFeedbacks");

        return savedFeedbacks
            ? JSON.parse(savedFeedbacks)
            : [
                {
                    id: "feedback-001",
                    userId: "traveler-001",
                    name: "Aanya",
                    location: "Bengaluru, India",
                    destination: "KASHMIR · 06 DAYS",
                    rating: 5,
                    message:
                        "Kashmir felt less like a trip and more like a memory we brought home.",
                }
            ];
    });

    const [feedbackForm, setFeedbackForm] = useState({
        name: "",
        location: "",
        destination: "",
        rating: 5,
        message: "",
    });
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

        const newFeedback = {
            id: `feedback-${Date.now()}`,

            userId: currentUser.id,

            name: feedbackForm.name,
            location: feedbackForm.location,

            destination:
                feedbackForm.destination.toUpperCase() +
                " · NOMADIX",

            rating: Number(feedbackForm.rating),

            message: feedbackForm.message,
        };

        const updatedFeedbacks = [
            ...feedbacks,
            newFeedback,
        ];

        setFeedbacks(updatedFeedbacks);

        localStorage.setItem(
            "nomadixFeedbacks",
            JSON.stringify(updatedFeedbacks)
        );

        setFeedbackForm({
            name: "",
            location: "",
            destination: "",
            rating: 5,
            message: "",
        });

        setShowFeedback(false);
    };
    const handleDeleteFeedback = (feedbackId) => {
        const feedbackToDelete = feedbacks.find(
            (feedback) => feedback.id === feedbackId
        );

        if (!feedbackToDelete) return;

        const canDelete =
            currentUser.role === "admin" ||
            currentUser.role === "owner" ||
            feedbackToDelete.userId === currentUser.id;

        if (!canDelete) {
            alert("You can only delete your own feedback.");
            return;
        }

        const confirmed = window.confirm(
            "Are you sure you want to delete this feedback?"
        );

        if (!confirmed) return;

        const updatedFeedbacks = feedbacks.filter(
            (feedback) => feedback.id !== feedbackId
        );

        setFeedbacks(updatedFeedbacks);

        localStorage.setItem(
            "nomadixFeedbacks",
            JSON.stringify(updatedFeedbacks)
        );
    };
    const [currentUser] = useState(() => {
        const savedUser = localStorage.getItem("nomadixUser");

        return savedUser
            ? JSON.parse(savedUser)
            : {
                id: "demo-user",
                name: "Demo User",
                role: "user",
            };
    });

    return (
        <main className="home-page">

            {/* ================= IMAGE HERO ================= */}

            <section className="home-gallery">

                <div className="gallery-intro">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        INDIA & BEYOND
                    </motion.span>
                </div>
                <motion.div
                    className="travel-badge"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="badge-ring">
                        <span>✦</span>
                        <strong>NOMADIX</strong>
                        <small>CURATED JOURNEYS</small>
                        <span>✦</span>
                    </div>
                </motion.div>

                <div className="destination-mosaic">

                    {destinations.map((destination, index) => (
                        <motion.div
                            className={`home-destination ${destination.size}`}
                            key={destination.name}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.015,
                                rotateX: 1.5,
                                rotateY: -1.5,
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >

                            <img
                                src={destination.image}
                                alt={destination.name}
                            />

                            <div className="destination-shade"></div>

                            <div className="destination-caption">

                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <h2>{destination.name}</h2>

                                    <p>
                                        {destination.location}
                                    </p>
                                </div>

                                <NavLink to="/destinations">
                                    Explore →
                                </NavLink>

                            </div>

                        </motion.div>
                    ))}

                </div>

                <motion.div
                    className="gallery-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span>SCROLL TO DISCOVER</span>
                    <div></div>
                </motion.div>

            </section>

            {/* ================= INTRO ================= */}

            {/* ================= NOMADIX WAY ================= */}

            <section className="home-intro">

                {/* Decorative elements */}
                <div className="intro-orbit intro-orbit-one"></div>
                <div className="intro-orbit intro-orbit-two"></div>

                <div className="intro-star intro-star-one">✦</div>
                <div className="intro-star intro-star-two">✦</div>

                <div className="intro-layout">

                    {/* LEFT CONTENT */}

                    <div className="intro-main">

                        <motion.p
                            className="home-section-label"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            THE NOMADIX WAY
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Travel isn't just
                            <br />
                            about the
                            <em> destination.</em>
                        </motion.h1>

                        <motion.p
                            className="home-intro-text"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.8 }}
                        >
                            It's about the roads you take, the people you meet,
                            the stories you collect and the moments you never
                            planned for.
                        </motion.p>

                        <motion.div
                            className="intro-route"
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, duration: 1 }}
                        >
                            <span></span>
                            <b>✦</b>
                            <span></span>
                        </motion.div>

                    </div>


                    {/* RIGHT IMAGE */}

                    <motion.div
                        className="intro-visual"
                        initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <div className="intro-image-ring"></div>

                        <div className="intro-image-card">

                            <img
                                src={kashmirImg}
                                alt="Kashmir"
                            />

                            <div className="intro-image-overlay">
                                <span>01</span>

                                <div>
                                    <strong>KASHMIR</strong>
                                    <small>HEAVEN ON EARTH</small>
                                </div>
                            </div>

                        </div>

                        <div className="intro-badge">
                            <span>✦</span>
                            <strong>NOMADIX</strong>
                            <small>FOR EXPLORERS</small>
                        </div>

                    </motion.div>

                </div>


                {/* FEATURES */}

                <div className="intro-features">

                    <motion.div
                        className="intro-feature"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            rotateX: 2,
                            rotateY: -2
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="feature-number">01</span>

                        <div className="feature-icon">
                            ◇
                        </div>

                        <div>
                            <h3>Curated Journeys</h3>

                            <p>
                                Thoughtfully selected destinations
                                worth remembering.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="intro-feature"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            rotateX: 2,
                            rotateY: 2
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.12,
                            duration: 0.6
                        }}
                    >
                        <span className="feature-number">02</span>

                        <div className="feature-icon">
                            ✦
                        </div>

                        <div>
                            <h3>Real Experiences</h3>

                            <p>
                                Discover places through local stories,
                                culture and people.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="intro-feature"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            rotateX: 2,
                            rotateY: -2
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.24,
                            duration: 0.6
                        }}
                    >
                        <span className="feature-number">03</span>

                        <div className="feature-icon">
                            ○
                        </div>

                        <div>
                            <h3>Easy Planning</h3>

                            <p>
                                Less time planning,
                                more time actually travelling.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </section>

            {/* ================= CATEGORY PREVIEW ================= */}

            <div className="category-strip">

                <NavLink to="/category" className="category-item">
                    <span>01</span>

                    <div className="category-content">
                        <h3>Mountains</h3>
                        <p>Chasing peaks, clouds & quiet places.</p>
                    </div>

                    <div className="category-preview">
                        <img src={ladakhImg} alt="Mountains" />
                    </div>

                    <div className="category-icon">🏔️</div>

                    <b>→</b>
                </NavLink>


                <NavLink to="/category" className="category-item">
                    <span>02</span>

                    <div className="category-content">
                        <h3>Beaches</h3>
                        <p>Sunsets, sea breeze & slow days.</p>
                    </div>

                    <div className="category-preview">
                        <img src={goaImg} alt="Beaches" />
                    </div>

                    <div className="category-icon">🌊</div>

                    <b>→</b>
                </NavLink>


                <NavLink to="/category" className="category-item">
                    <span>03</span>

                    <div className="category-content">
                        <h3>Heritage</h3>
                        <p>Stories, culture & places frozen in time.</p>
                    </div>

                    <div className="category-preview">
                        <img src={rajasthanImg} alt="Heritage" />
                    </div>

                    <div className="category-icon">🏛️</div>

                    <b>→</b>
                </NavLink>


                <NavLink to="/category" className="category-item">
                    <span>04</span>

                    <div className="category-content">
                        <h3>Nature</h3>
                        <p>Into the wild, beyond the ordinary.</p>
                    </div>

                    <div className="category-preview">
                        <img src={keralaImg} alt="Nature" />
                    </div>

                    <div className="category-icon">🌿</div>

                    <b>→</b>
                </NavLink>

            </div>
            {/* ================= POPULAR JOURNEYS ================= */}

            <section className="popular-journeys">

                <div className="journeys-heading">

                    <div>
                        <span className="home-section-label">
                            WANDER A LITTLE
                        </span>

                        <h2>
                            Popular
                            <em> journeys.</em>
                        </h2>
                    </div>

                    <p>
                        Handpicked escapes for your next
                        unforgettable story.
                    </p>

                </div>


                <div className="journey-grid">

                    {/* KASHMIR */}

                    <motion.article
                        className="journey-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="journey-image">

                            <img
                                src={kashmirImg}
                                alt="Kashmir journey"
                            />

                            <span className="journey-tag">
                                MOST LOVED
                            </span>

                        </div>

                        <div className="journey-content">

                            <div className="journey-meta">
                                <span>06 DAYS</span>
                                <span>05 NIGHTS</span>
                            </div>

                            <h3>Kashmir</h3>

                            <p>
                                Lakes, mountains, gardens and
                                unforgettable Himalayan views.
                            </p>

                            <div className="journey-bottom">

                                <div>
                                    <small>FROM</small>
                                    <strong>₹18,999</strong>
                                </div>

                                <NavLink to="/destinations">
                                    Explore →
                                </NavLink>

                            </div>

                        </div>

                    </motion.article>


                    {/* GOA */}

                    <motion.article
                        className="journey-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.12,
                            duration: 0.7
                        }}
                    >

                        <div className="journey-image">

                            <img
                                src={goaImg}
                                alt="Goa journey"
                            />

                            <span className="journey-tag">
                                BEACH ESCAPE
                            </span>

                        </div>

                        <div className="journey-content">

                            <div className="journey-meta">
                                <span>05 DAYS</span>
                                <span>04 NIGHTS</span>
                            </div>

                            <h3>Goa</h3>

                            <p>
                                Golden beaches, coastal sunsets
                                and easy-going island days.
                            </p>

                            <div className="journey-bottom">

                                <div>
                                    <small>FROM</small>
                                    <strong>₹12,999</strong>
                                </div>

                                <NavLink to="/destinations">
                                    Explore →
                                </NavLink>

                            </div>

                        </div>

                    </motion.article>


                    {/* KERALA */}

                    <motion.article
                        className="journey-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.24,
                            duration: 0.7
                        }}
                    >

                        <div className="journey-image">

                            <img
                                src={keralaImg}
                                alt="Kerala journey"
                            />

                            <span className="journey-tag">
                                NATURE ESCAPE
                            </span>

                        </div>

                        <div className="journey-content">

                            <div className="journey-meta">
                                <span>06 DAYS</span>
                                <span>05 NIGHTS</span>
                            </div>

                            <h3>Kerala</h3>

                            <p>
                                Backwaters, green landscapes and
                                slow moments in God's own country.
                            </p>

                            <div className="journey-bottom">

                                <div>
                                    <small>FROM</small>
                                    <strong>₹16,999</strong>
                                </div>

                                <NavLink to="/destinations">
                                    Explore →
                                </NavLink>

                            </div>

                        </div>

                    </motion.article>

                </div>


                <div className="journeys-footer">

                    <NavLink
                        to="/destinations"
                        className="journeys-all"
                    >
                        Explore all journeys
                        <span>↗</span>
                    </NavLink>

                </div>

            </section>
            {/* ================= TRAVELER STORIES ================= */}

            <section className="traveler-stories">

                <div className="stories-decoration stories-decoration-one">
                    ✦
                </div>

                <div className="stories-decoration stories-decoration-two">
                    ◌
                </div>


                {/* HEADING */}

                <div className="stories-heading">

                    <div>
                        <span className="home-section-label">
                            FROM THE ROAD
                        </span>

                        <h2>
                            Traveler
                            <em> stories.</em>
                        </h2>
                    </div>

                    <button
                        className="feedback-open-button"
                        onClick={() => setShowFeedback(true)}
                    >
                        Share your story
                        <span>↗</span>
                    </button>

                </div>


                {/* FEEDBACK CARDS */}

                <div className="stories-list">

                    <AnimatePresence>
                        {feedbacks.map((feedback, index) => (

                            <motion.article
                                className="story-card"
                                key={`${feedback.name}-${index}`}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.97,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: Math.min(index * 0.08, 0.3),
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                            >

                                <div className="story-mark">
                                    “
                                </div>


                                <div className="story-content">

                                    <span className="story-destination">
                                        {feedback.destination}
                                    </span>

                                    <blockquote>
                                        {feedback.message}
                                    </blockquote>

                                    <div className="story-rating">
                                        {"★".repeat(Number(feedback.rating))}
                                        {"☆".repeat(5 - Number(feedback.rating))}
                                    </div>

                                    <div className="story-person">

                                        <div className="story-avatar">
                                            {feedback.name.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>{feedback.name}</strong>
                                            <span>{feedback.location}</span>
                                        </div>

                                    </div>

                                </div>


                                <div className="story-number">
                                    {String(index + 1).padStart(2, "0")}
                                    <span>
                                        {" / "}
                                        {String(feedbacks.length).padStart(2, "0")}
                                    </span>
                                </div>
                                {(
                                    currentUser.role === "admin" ||
                                    currentUser.role === "owner" ||
                                    feedback.userId === currentUser.id
                                ) && (
                                        <button
                                            className="story-delete"
                                            onClick={() =>
                                                handleDeleteFeedback(feedback.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    )}
                            </motion.article>

                        ))}
                    </AnimatePresence>

                </div>


                {/* FEEDBACK MODAL */}

                <AnimatePresence>

                    {showFeedback && (

                        <motion.div
                            className="feedback-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowFeedback(false)}
                        >

                            <motion.div
                                className="feedback-modal"
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 30,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 20,
                                }}
                                transition={{ duration: 0.35 }}
                                onClick={(e) => e.stopPropagation()}
                            >

                                <button
                                    className="feedback-close"
                                    onClick={() => setShowFeedback(false)}
                                    aria-label="Close feedback form"
                                >
                                    ×
                                </button>


                                <span className="home-section-label">
                                    SHARE THE JOURNEY
                                </span>

                                <h3>
                                    Tell us about
                                    <br />
                                    your <em>adventure.</em>
                                </h3>


                                <form onSubmit={handleFeedbackSubmit}>

                                    <div className="feedback-row">

                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            value={feedbackForm.name}
                                            required
                                            onChange={(e) =>
                                                setFeedbackForm({
                                                    ...feedbackForm,
                                                    name: e.target.value,
                                                })
                                            }
                                        />

                                        <input
                                            type="text"
                                            placeholder="City / Location"
                                            value={feedbackForm.location}
                                            required
                                            onChange={(e) =>
                                                setFeedbackForm({
                                                    ...feedbackForm,
                                                    location: e.target.value,
                                                })
                                            }
                                        />

                                    </div>


                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        value={feedbackForm.destination}
                                        required
                                        onChange={(e) =>
                                            setFeedbackForm({
                                                ...feedbackForm,
                                                destination: e.target.value,
                                            })
                                        }
                                    />


                                    <div className="feedback-rating">

                                        <label>Your rating</label>

                                        <div className="rating-stars">

                                            {[1, 2, 3, 4, 5].map((star) => (

                                                <button
                                                    type="button"
                                                    key={star}
                                                    className={
                                                        star <= feedbackForm.rating
                                                            ? "selected"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setFeedbackForm({
                                                            ...feedbackForm,
                                                            rating: star,
                                                        })
                                                    }
                                                >
                                                    ★
                                                </button>

                                            ))}

                                        </div>

                                    </div>


                                    <textarea
                                        placeholder="Write your travel experience..."
                                        rows="4"
                                        value={feedbackForm.message}
                                        required
                                        onChange={(e) =>
                                            setFeedbackForm({
                                                ...feedbackForm,
                                                message: e.target.value,
                                            })
                                        }
                                    />


                                    <button
                                        type="submit"
                                        className="feedback-submit"
                                    >
                                        Publish your story
                                        <span>→</span>
                                    </button>

                                </form>

                            </motion.div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="home-cta">

                <div className="cta-inner">

                    <span className="home-section-label">
                        YOUR NEXT STORY
                    </span>

                    <h2>
                        Where will
                        <br />
                        you go next?
                    </h2>

                    <NavLink
                        to="/destinations"
                        className="cta-button"
                    >
                        Start exploring
                    </NavLink>

                </div>

            </section>

        </main>
    );
}

export default Home;