import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./CancellationPolicy.css";

function CancellationPolicy() {
  return (
    <main className="cancellation-page">

      {/* HERO */}
      <section className="cancellation-hero">
        <motion.div
          className="cancellation-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="cancellation-eyebrow">NOMADIX POLICY</p>

          <h1>
            Plans can change.
            <span> We understand.</span>
          </h1>

          <p>
            Here's everything you need to know about cancellations,
            refunds and changes to your journey.
          </p>
        </motion.div>

        <div className="cancellation-orbit cancellation-orbit-one"></div>
        <div className="cancellation-orbit cancellation-orbit-two"></div>
      </section>


      {/* INTRO */}
      <section className="cancellation-intro">
        <p className="section-label">CANCELLATION POLICY</p>

        <h2>
          Travel plans aren't
          <span> always predictable.</span>
        </h2>

        <p>
          We know that sometimes plans change. Our cancellation
          policy is designed to keep the process as clear and
          straightforward as possible.
        </p>
      </section>


      {/* TIMELINE */}
      <section className="cancellation-timeline">

        <div className="cancellation-heading">
          <p className="section-label">CANCELLATION WINDOW</p>

          <h2>
            The earlier you
            <span> let us know,</span>
            the better.
          </h2>

          <p>
            Cancellation charges may depend on how close the
            cancellation is to your scheduled departure.
          </p>
        </div>

        <div className="cancellation-steps">

          <motion.div
            className="cancellation-step"
            whileHover={{ x: 6 }}
          >
            <div className="step-number">01</div>

            <div>
              <h3>30+ Days Before</h3>
              <p>
                Cancellation requests made well before departure
                may qualify for a higher refund, subject to the
                package and applicable charges.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="cancellation-step"
            whileHover={{ x: 6 }}
          >
            <div className="step-number">02</div>

            <div>
              <h3>15–29 Days Before</h3>
              <p>
                A cancellation charge may apply depending on
                bookings already made with hotels, transport
                providers and activity partners.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="cancellation-step"
            whileHover={{ x: 6 }}
          >
            <div className="step-number">03</div>

            <div>
              <h3>7–14 Days Before</h3>
              <p>
                Refund eligibility may be reduced because of
                advance commitments made for your journey.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="cancellation-step"
            whileHover={{ x: 6 }}
          >
            <div className="step-number">04</div>

            <div>
              <h3>Within 7 Days</h3>
              <p>
                Cancellations close to departure may be subject
                to significant charges or may not qualify for
                a refund.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* REFUND */}
      <section className="refund-section">

        <div className="refund-card">

          <div className="refund-icon">↻</div>

          <p className="section-label">REFUND PROCESS</p>

          <h2>
            What happens after
            <span> cancellation?</span>
          </h2>

          <div className="refund-list">

            <div>
              <span>01</span>
              <p>
                Submit your cancellation request through the
                appropriate NOMADIX contact channel.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Our team reviews your booking and applicable
                cancellation terms.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                The eligible refund amount is communicated to
                you before processing.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Approved refunds are processed through the
                applicable payment method.
              </p>
            </div>

          </div>
        </div>

      </section>


      {/* OTHER CONDITIONS */}
      <section className="cancellation-conditions">

        <div className="conditions-heading">
          <p className="section-label">GOOD TO KNOW</p>

          <h2>
            A few important
            <span> details.</span>
          </h2>
        </div>

        <div className="conditions-grid">

          <article className="condition-card">
            <div className="condition-icon">↗</div>
            <h3>Date Changes</h3>
            <p>
              Requests to change travel dates may be possible
              depending on availability and supplier conditions.
              Additional charges may apply.
            </p>
          </article>

          <article className="condition-card">
            <div className="condition-icon">!</div>
            <h3>Non-Refundable Services</h3>
            <p>
              Certain hotels, activities, transport tickets or
              special offers may have non-refundable terms.
            </p>
          </article>

          <article className="condition-card">
            <div className="condition-icon">◎</div>
            <h3>Third-Party Charges</h3>
            <p>
              Refunds can be affected by cancellation charges
              imposed by hotels, airlines, transport providers
              or activity partners.
            </p>
          </article>

        </div>
      </section>


      {/* CTA */}
      <section className="cancellation-cta">

        <div>
          <p className="section-label">STILL PLANNING?</p>

          <h2>
            Find a journey worth
            <span> keeping.</span>
          </h2>
        </div>

        <NavLink
          to="/packages"
          className="cancellation-cta-button"
        >
          Explore Packages →
        </NavLink>

      </section>

    </main>
  );
}

export default CancellationPolicy;