import { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onClose, onLogin }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim()) {
            alert("Please enter your name and email.");
            return;
        }

        const name = form.name.trim();
        const email = form.email.trim().toLowerCase();

        // Get all previously registered users
        const savedUsers = JSON.parse(
            localStorage.getItem("nomadixUsers") || "[]"
        );

        // Check if this user already exists
        const existingUser = savedUsers.find(
            (user) =>
                user.email.toLowerCase() === email &&
                user.name.toLowerCase() === name.toLowerCase()
        );

        let user;

        if (existingUser) {
            // Use the existing user with the SAME ID
            user = {
                ...existingUser,
                loggedIn: true,
            };
        } else {
            // Create a new user only if they don't exist
            user = {
                id: `user-${Date.now()}`,
                name: name,
                email: email,
                loggedIn: true,
            };

            // Save the new user
            savedUsers.push(user);

            localStorage.setItem(
                "nomadixUsers",
                JSON.stringify(savedUsers)
            );
        }

        // Save current logged-in user
        localStorage.setItem(
            "nomadixUser",
            JSON.stringify(user)
        );

        // Tell Navbar that login happened
        window.dispatchEvent(new Event("nomadixLogin"));

        onLogin(user);
    };

    return (
        <div className="login-modal-overlay">
            <div className="login-modal">

                <button
                    className="login-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className="login-modal-mark">
                    ✦
                </div>

                <span className="login-modal-label">
                    WELCOME TO NOMADIX
                </span>

                <h2>
                    Your journey
                    <br />
                    <em>starts here.</em>
                </h2>

                <p className="login-modal-text">
                    Enter your details to continue exploring and
                    booking your journeys with NOMADIX.
                </p>

                <form onSubmit={handleSubmit}>

                    <label>
                        Your Name

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Email Address

                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>

                    <button
                        type="submit"
                        className="login-modal-button"
                    >
                        Continue
                        <span>↗</span>
                    </button>

                </form>

                <button
                    className="login-modal-later"
                    onClick={onClose}
                >
                    Maybe later
                </button>

                <small className="login-modal-note">
                    You can browse NOMADIX without signing in.
                </small>

            </div>
        </div>
    );
}

export default LoginModal;