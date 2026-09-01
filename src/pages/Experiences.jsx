import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Experiences.css";

import mountainsImg from "../assets/experiences/mountains.jpg";
import beachImg from "../assets/experiences/beach.jpg";
import campingImg from "../assets/experiences/camping.jpg";
import heritageImg from "../assets/experiences/heritage.jpg";

function Experiences() {
    const experiences = [
        {
            title: "Mountain Adventures",
            category: "ADVENTURE",
            description:
                "Trek through breathtaking landscapes, explore hidden trails and experience the mountains like never before.",
            image: mountainsImg,
        },
        {
            title: "Beach Escapes",
            category: "RELAXATION",
            description:
                "Slow down, chase sunsets and enjoy peaceful moments beside the sea.",
            image: beachImg,
        },
        {
            title: "Camp Under The Stars",
            category: "CAMPING",
            description:
                "Escape the city and spend unforgettable nights surrounded by nature.",
            image: campingImg,
        },
        {
            title: "Stories From The Past",
            category: "HERITAGE",
            description:
                "Walk through ancient cities, magnificent architecture and stories that shaped India.",
            image: heritageImg,
        },
    ];

    return (
        <main className="experiences-page">

            {/* ================= HERO ================= */}

            <section className="experiences-hero">

                <div className="experience-glow glow-one"></div>
                <div className="experience-glow glow-two"></div>

                <motion.p
                    className="page-label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    TRAVEL YOUR WAY
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Make the journey
                    <span> unforgettable.</span>
                </motion.h1>

                <motion.p
                    className="experiences-description"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Travel isn't just about where you go. It's about what you
                    experience along the way.
                </motion.p>

            </section>

            {/* ================= FEATURED EXPERIENCE ================= */}

            <section className="experiences-section">

                <motion.div
                    className="featured-experience"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <img
                        src={mountainsImg}
                        alt="Mountain adventure"
                    />

                    <div className="featured-overlay"></div>

                    <div className="featured-content">

                        <span>01 — SIGNATURE EXPERIENCE</span>

                        <h2>
                            Into the
                            <strong> Wild.</strong>
                        </h2>

                        <p>
                            Leave the ordinary behind and discover India's most
                            breathtaking mountain landscapes.
                        </p>

                       <NavLink
  to="/contact"
  className="experience-action-button"
>
  Explore Experience →
</NavLink>

                    </div>

                </motion.div>

                {/* ================= EXPERIENCE CARDS ================= */}

                <div className="experiences-grid">

                    {experiences.slice(1).map((experience, index) => (

                        <motion.article
                            className="experience-card"
                            key={experience.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                        >

                            <div className="experience-image">

                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                />

                                <div className="experience-image-overlay"></div>

                                <span className="experience-number">
                                    0{index + 2}
                                </span>

                            </div>

                            <div className="experience-info">

                                <span className="experience-category">
                                    {experience.category}
                                </span>

                                <h3>{experience.title}</h3>

                                <p>{experience.description}</p>

                                <NavLink
  to="/contact"
  className="experience-action-button"
>
  Discover →
</NavLink>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Experiences;