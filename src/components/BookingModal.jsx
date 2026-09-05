import { useState } from "react";
import "./BookingModal.css";

function BookingModal({ destination, onClose }) {
    const [step, setStep] = useState(1);

    const [details, setDetails] = useState({
        name: "",
        email: "",
        phone: "",
        travelers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleContinue = (e) => {
        e.preventDefault();

        if (!details.name || !details.email || !details.phone) {
            alert("Please fill in all details.");
            return;
        }

        setStep(2);
    };

    const handleConfirm = () => {
        const savedUser = localStorage.getItem("nomadixUser");
        const user = savedUser ? JSON.parse(savedUser) : null;

        const booking = {
            id: `NM-${Date.now()}`,

            // Link booking to the logged-in user
            userId: user?.id,
            name: user?.name,
            email: user?.email,

            destination: destination.name,
            price: destination.price,

            ...details,

            bookedAt: new Date().toISOString(),
        };

        const existingBookings = JSON.parse(
            localStorage.getItem("nomadixBookings") || "[]"
        );

        existingBookings.push(booking);

        localStorage.setItem(
            "nomadixBookings",
            JSON.stringify(existingBookings)
        );
        window.dispatchEvent(new Event("nomadixBooking"));

        setStep(3);
    };

    return (
        <div className="booking-modal-overlay" onClick={onClose}>
            <div
                className="booking-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="booking-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                {step === 1 && (
                    <>
                        <span className="booking-modal-label">
                            NOMADIX BOOKING
                        </span>

                        <h2>
                            Plan your
                            <br />
                            <em>{destination.name} journey.</em>
                        </h2>

                        <p className="booking-modal-subtitle">
                            Enter your details to continue with your booking.
                        </p>

                        <form onSubmit={handleContinue}>

                            <label>
                                Full Name
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={details.name}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={details.email}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Phone Number
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={details.phone}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Number of Travelers
                                <input
                                    type="number"
                                    name="travelers"
                                    min="1"
                                    value={details.travelers}
                                    onChange={handleChange}
                                />
                            </label>

                            <button
                                type="submit"
                                className="booking-modal-button"
                            >
                                Continue
                                <span>↗</span>
                            </button>

                        </form>
                    </>
                )}

                {step === 2 && (
                    <>
                        <span className="booking-modal-label">
                            REVIEW YOUR JOURNEY
                        </span>

                        <h2>
                            Almost
                            <br />
                            <em>there.</em>
                        </h2>

                        <div className="booking-review">

                            <div>
                                <span>DESTINATION</span>
                                <strong>{destination.name}</strong>
                            </div>

                            <div>
                                <span>TRAVELER</span>
                                <strong>{details.name}</strong>
                            </div>

                            <div>
                                <span>TRAVELERS</span>
                                <strong>{details.travelers}</strong>
                            </div>

                            <div>
                                <span>PACKAGE</span>
                                <strong>{destination.price} / person</strong>
                            </div>

                        </div>

                        <button
                            className="booking-modal-button"
                            onClick={handleConfirm}
                        >
                            Confirm booking
                            <span>↗</span>
                        </button>

                        <button
                            className="booking-back-button"
                            onClick={() => setStep(1)}
                        >
                            ← Edit details
                        </button>

                    </>
                )}

                {step === 3 && (
                    <div className="booking-success">

                        <span className="booking-success-icon">
                            ✓
                        </span>

                        <span className="booking-modal-label">
                            BOOKING REQUEST RECEIVED
                        </span>

                        <h2>
                            You're going
                            <br />
                            to <em>{destination.name}!</em>
                        </h2>

                        <p>
                            Your booking request has been saved successfully.
                            Our team can review the details and confirm the
                            final package.
                        </p>

                        <button
                            className="booking-modal-button"
                            onClick={onClose}
                        >
                            Done
                            <span>✓</span>
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
}

export default BookingModal;