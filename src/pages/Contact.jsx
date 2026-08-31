import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.destination ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        destination: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-glow glow-one"></div>
        <div className="contact-glow glow-two"></div>

        <motion.p
          className="page-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          GET IN TOUCH
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's plan your
          <span> next adventure.</span>
        </motion.h1>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Whether you're dreaming of mountains, beaches or luxury escapes,
          we'd love to help you create your perfect journey.
        </motion.p>

      </section>

      {/* CONTACT CONTENT */}

      <section className="contact-section">

        <div className="contact-grid">

          {/* LEFT */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="section-label">
              START YOUR JOURNEY
            </span>

            <h2>Travel begins with a conversation.</h2>

            <p>
              Tell us your dream destination and we'll craft an unforgettable
              travel experience just for you.
            </p>

            <div className="info-card">
              <h4>📍 Based in</h4>
              <p>Bengaluru, India</p>
            </div>

            <div className="info-card">
              <h4>✈ Specialties</h4>
              <p>India • Bali • Dubai • Luxury Escapes</p>
            </div>

            <div className="info-card">
              <h4>⏰ Response Time</h4>
              <p>Within 24 Hours</p>
            </div>

          </motion.div>

          {/* FORM */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >

            <h3>Send an Enquiry</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
            >
              <option value="">Select Destination</option>
              <option>Ladakh</option>
              <option>Goa</option>
              <option>Manali</option>
              <option>Jaipur</option>
              <option>Munnar</option>
              <option>Bali</option>
              <option>Dubai</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your dream trip..."
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Enquiry →
            </button>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Enquiry sent successfully!
              </motion.div>
            )}

          </motion.form>

        </div>

      </section>

    </main>
  );
}

export default Contact;