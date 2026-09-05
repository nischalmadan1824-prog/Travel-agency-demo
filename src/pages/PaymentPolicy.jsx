import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./PaymentPolicy.css";

function PaymentPolicy() {
  return (
    <main className="payment-page">

      {/* HERO */}
      <section className="payment-hero">
        <motion.div
          className="payment-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="payment-eyebrow">NOMADIX POLICY</p>

          <h1>
            Simple, clear &
            <span> transparent.</span>
          </h1>

          <p>
            Everything you need to know about payments before
            your journey begins.
          </p>
        </motion.div>

        <div className="payment-orbit payment-orbit-one"></div>
        <div className="payment-orbit payment-orbit-two"></div>
      </section>


      {/* INTRO */}
      <section className="payment-intro">
        <p className="section-label">PAYMENT POLICY</p>

        <h2>
          Your journey should be
          <span> stress-free.</span>
        </h2>

        <p>
          At NOMADIX, we believe booking your trip should be as
          simple as the journey itself. Our payment process is
          designed to be straightforward and easy to understand.
        </p>
      </section>


      {/* POLICY CARDS */}
      <section className="payment-policies">

        <motion.article
          className="payment-card"
          whileHover={{ y: -6 }}
        >
          <span className="payment-number">01</span>
          <div className="payment-icon">₹</div>

          <h3>Booking Payment</h3>

          <p>
            A booking is confirmed once the required payment has
            been completed through the available payment options.
          </p>
        </motion.article>


        <motion.article
          className="payment-card featured-payment"
          whileHover={{ y: -6 }}
        >
          <span className="payment-number">02</span>
          <div className="payment-icon">✓</div>

          <h3>Confirmation</h3>

          <p>
            Once your payment is successfully recorded, NOMADIX
            will provide your booking confirmation and journey
            details.
          </p>
        </motion.article>


        <motion.article
          className="payment-card"
          whileHover={{ y: -6 }}
        >
          <span className="payment-number">03</span>
          <div className="payment-icon">◌</div>

          <h3>Balance Payment</h3>

          <p>
            If your selected package requires a remaining balance,
            the due amount and payment timeline will be communicated
            before your trip.
          </p>
        </motion.article>

      </section>


      {/* PAYMENT METHODS */}
      <section className="payment-methods">

        <div className="payment-methods-heading">
          <p className="section-label">PAYMENT OPTIONS</p>

          <h2>
            Choose what works
            <span> for you.</span>
          </h2>
        </div>

        <div className="payment-method-list">

          <div className="payment-method">
            <div className="method-icon">UPI</div>
            <div>
              <h3>UPI Payments</h3>
              <p>
                Convenient digital payments through supported UPI
                applications.
              </p>
            </div>
          </div>

          <div className="payment-method">
            <div className="method-icon">▣</div>
            <div>
              <h3>Debit / Credit Card</h3>
              <p>
                Pay securely using an eligible debit or credit card.
              </p>
            </div>
          </div>

          <div className="payment-method">
            <div className="method-icon">↔</div>
            <div>
              <h3>Bank Transfer</h3>
              <p>
                Direct bank transfer may be available for selected
                bookings.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* IMPORTANT NOTES */}
      <section className="payment-notes">

        <div className="payment-note-heading">
          <p className="section-label">BEFORE YOU PAY</p>

          <h2>
            A few things
            <span> to remember.</span>
          </h2>
        </div>

        <div className="payment-note-list">

          <div className="payment-note">
            <span>01</span>
            <p>
              Please check your selected package, destination,
              dates and traveler details before completing payment.
            </p>
          </div>

          <div className="payment-note">
            <span>02</span>
            <p>
              Keep your payment confirmation and booking reference
              for future communication.
            </p>
          </div>

          <div className="payment-note">
            <span>03</span>
            <p>
              Additional charges may apply if you request services
              outside your selected package.
            </p>
          </div>

          <div className="payment-note">
            <span>04</span>
            <p>
              Payment terms can vary depending on the destination
              and package selected.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="payment-cta">

        <div>
          <p className="section-label">READY TO GO?</p>

          <h2>
            Your next adventure is
            <span> waiting.</span>
          </h2>
        </div>

        <NavLink
          to="/packages"
          className="payment-cta-button"
        >
          Explore Packages →
        </NavLink>

      </section>

    </main>
  );
}

export default PaymentPolicy;