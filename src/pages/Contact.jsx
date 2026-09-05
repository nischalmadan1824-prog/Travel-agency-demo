import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const newMessage = {
      id: `MSG-${Date.now()}`,
      ...form,
      submittedAt: new Date().toISOString(),
    };

    const existingMessages = JSON.parse(
      localStorage.getItem("nomadixMessages") || "[]"
    );

    existingMessages.push(newMessage);

    localStorage.setItem(
      "nomadixMessages",
      JSON.stringify(existingMessages)
    );

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <motion.p
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            LET'S TALK TRAVEL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your next journey
            <span> starts here.</span>
          </motion.h1>

          <motion.p
            className="contact-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have a question, a travel idea, or simply want to talk
            about your next escape? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="contact-hero-orbit orbit-one"></div>
        <div className="contact-hero-orbit orbit-two"></div>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-main">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">REACH NOMADIX</p>

          <h2>
            Let's plan something
            <span> unforgettable.</span>
          </h2>

          <p className="contact-description">
            Whether you're looking for a peaceful escape, an
            adventurous expedition, or a completely custom journey,
            our team is here to help.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>hello@nomadix.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">☎</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

          </div>

          <div className="contact-note">
            <span>✦</span>
            <p>
              We usually respond within 24 hours.
            </p>
          </div>
        </motion.div>


        {/* FORM */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-heading">
            <p>START A CONVERSATION</p>
            <h2>Tell us about your trip.</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {submitted && (
  <div className="contact-success">
    <span>✓</span>
    <div>
      <strong>Message sent successfully!</strong>
      <p>We'll get back to you within 24 hours.</p>
    </div>
  </div>
)}

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What can we help you with?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your travel plans..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <span>→</span>
            </button>

          </form>
        </motion.div>

      </section>


      {/* QUICK LINKS */}
      <section className="contact-cta">
        <div>
          <p className="section-label">READY TO EXPLORE?</p>
          <h2>Find your next destination.</h2>
        </div>

        <NavLink to="/destinations" className="contact-explore-button">
          Explore Destinations →
        </NavLink>
      </section>

    </main>
  );
}

export default Contact;