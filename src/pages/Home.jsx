import { motion, useMotionValue, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Home.css";
import ladakhImg from "../assets/destinations/ladakh.jpg";
import goaImg from "../assets/destinations/goa.jpg";
import hampiImg from "../assets/destinations/hampi.jpg";
import munnarImg from "../assets/destinations/munnar.jpg";
import heroBg from "../assets/hero/hero-bg.jpg";
function Home() {
    const moods = [
        {
            icon: "🏔️",
            title: "Adventure",
            description: "Chase thrills, mountains and unforgettable roads.",
            places: "Ladakh · Manali · Rishikesh",
        },
        {
            icon: "🌊",
            title: "Beach & Chill",
            description: "Sunsets, waves and peaceful coastal escapes.",
            places: "Goa · Gokarna · Varkala",
        },
        {
            icon: "🌿",
            title: "Nature Escape",
            description: "Disconnect from the noise and breathe freely.",
            places: "Coorg · Munnar · Wayanad",
        },
        {
            icon: "🏛️",
            title: "Culture",
            description: "Walk through history, stories and traditions.",
            places: "Hampi · Jaipur · Mysuru",
        },
        {
            icon: "🕉️",
            title: "Spiritual",
            description: "Find peace through meaningful journeys.",
            places: "Varanasi · Rishikesh · Ujjain",
        },
        {
            icon: "✨",
            title: "Luxury",
            description: "Premium stays and unforgettable experiences.",
            places: "Udaipur · Dubai · Bali",
        },
    ];
    const trendingDestinations = [
        {
            name: "Ladakh",
            location: "Ladakh, India",
            tag: "Adventure",
            image: ladakhImg,
        },
        {
            name: "Goa",
            location: "Goa, India",
            tag: "Beach Escape",
            image: goaImg,
        },
        {
            name: "Hampi",
            location: "Karnataka, India",
            tag: "Culture",
            image: hampiImg,
        },
        {
            name: "Munnar",
            location: "Kerala, India",
            tag: "Nature",
            image: munnarImg,
        },
    ];
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const contentX = useTransform(mouseX, [-500, 500], [12, -12]);
    const contentY = useTransform(mouseY, [-500, 500], [8, -8]);
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;

        mouseX.set(e.clientX - innerWidth / 2);
        mouseY.set(e.clientY - innerHeight / 2);
    };

    return (
        <main className="home">
            {/* ================= HERO SECTION ================= */}
            <section
                className="hero"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
                onMouseMove={handleMouseMove}


            >
                {/* Dark cinematic overlays */}
                <div className="hero-dark-overlay"></div>
                <div className="hero-bottom-overlay"></div>

                {/* Aurora lights */}
                <div className="aurora aurora-one"></div>
                <div className="aurora aurora-two"></div>

                {/* Stars */}
                <div className="stars">
                    {Array.from({ length: 25 }).map((_, index) => (
                        <span key={index}></span>
                    ))}
                </div>

                {/* Decorative flight path */}
                <div className="flight-path">
                    <div className="flight-line"></div>
                    <motion.div
                        className="plane-icon"
                        animate={{
                            y: [0, -8, 0],
                            rotate: [-3, 3, -3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ✈
                    </motion.div>
                </div>

                <div className="hero-content">
                    <motion.p
                        className="hero-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        WELCOME TO NOMADIX
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Discover India.
                        <span>Explore Beyond.</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        From majestic mountains to serene beaches and hidden gems,
                        discover unforgettable journeys crafted for every kind of traveler.
                    </motion.p>

                    <motion.div
                        className="hero-content"
                        style={{
                            x: contentX,
                            y: contentY,
                        }}

                    >
                        <NavLink to="/destinations" className="primary-btn">
                            Explore Destinations →
                        </NavLink>

                        <button className="watch-btn">
                            <span>▷</span>
                            Watch Video
                        </button>
                    </motion.div>
                </div>

                {/* Scroll */}
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                    <span>SCROLL TO EXPLORE</span>
                </div>
            </section>

            {/* ================= EXPLORE BY MOOD ================= */}
            <section className="mood-section">
                <div className="section-heading">
                    <p className="section-label">FIND YOUR PERFECT JOURNEY</p>

                    <h2>
                        Explore by your
                        <span> mood.</span>
                    </h2>

                    <p>
                        Every traveler is different. Choose the experience that feels
                        right for you.
                    </p>
                </div>

                <div className="mood-grid">
                    {moods.map((mood, index) => (
                        <motion.div
                            className="mood-card"
                            key={mood.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                        >
                            <div className="mood-icon">{mood.icon}</div>

                            <h3>{mood.title}</h3>

                            <p>{mood.description}</p>

                            <span className="mood-places">
                                {mood.places}
                            </span>

                            <NavLink to="/destinations" className="mood-link">
                                Explore →
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* ================= TRENDING DESTINATIONS ================= */}

            <section className="trending-section">
                <div className="trending-header">
                    <div>
                        <p className="section-label">MOST LOVED JOURNEYS</p>

                        <h2>
                            Trending
                            <span> destinations.</span>
                        </h2>
                    </div>

                    <NavLink to="/destinations" className="view-all-btn">
                        View all destinations →
                    </NavLink>
                </div>

                <div className="trending-grid">

                    {trendingDestinations.map((destination, index) => (
                        <motion.div
                            className={`destination-card destination-${index}`}
                            key={destination.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                rotateX: 2,
                                rotateY: -2,
                            }}
                        >

                            <img
                                src={destination.image}
                                alt={destination.name}
                            />

                            <div className="destination-overlay"></div>

                            <div className="destination-content">
                                <span className="destination-tag">
                                    {destination.tag}
                                </span>

                                <h3>{destination.name}</h3>

                                <p>📍 {destination.location}</p>

                                <NavLink
                                    to="/destinations"
                                    className="destination-explore"
                                >
                                    Explore destination →
                                </NavLink>
                            </div>
                        </motion.div>
                    ))}


                </div>
            </section>
            {/* ================= WHY NOMADIX ================= */}

            <section className="why-section">
                <motion.div
                    className="why-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">WHY TRAVEL WITH US</p>

                    <h2>
                        More than a trip.
                        <span> A memory.</span>
                    </h2>

                    <p>
                        NOMADIX helps you discover extraordinary destinations and
                        unforgettable experiences across India and beyond.
                    </p>
                </motion.div>

                <div className="why-grid">
                    {[
                        {
                            icon: "✦",
                            title: "Curated Journeys",
                            text: "Carefully selected destinations for unforgettable experiences.",
                        },
                        {
                            icon: "◉",
                            title: "Hidden Gems",
                            text: "Discover places beyond the usual tourist destinations.",
                        },
                        {
                            icon: "✈",
                            title: "Travel Beyond",
                            text: "From India to breathtaking destinations around the world.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            className="why-card"
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                        >
                            <div className="why-icon">{item.icon}</div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                            <div className="card-line"></div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );

}

export default Home;