import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";
import Category from "./pages/Category";
import About from "./pages/About";
import PaymentPolicy from "./pages/PaymentPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    let loginTimer;

    const scheduleLoginPopup = () => {
      if (localStorage.getItem("nomadixUser")) return;

      loginTimer = setTimeout(() => {
        if (!localStorage.getItem("nomadixUser")) {
          setShowLogin(true);
        }
      }, 5000);
    };

    // Show popup 5 seconds after opening site if logged out
    scheduleLoginPopup();

    // Show popup 5 seconds after logout
    const handleLogout = () => {
      clearTimeout(loginTimer);
      setShowLogin(false);
      scheduleLoginPopup();
    };

    window.addEventListener("nomadixLogout", handleLogout);

    return () => {
      clearTimeout(loginTimer);
      window.removeEventListener("nomadixLogout", handleLogout);
    };
  }, []);

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey/:destinationId" element={<Journey />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route
          path="/cancellation-policy"
          element={<CancellationPolicy />} />
        <Route path="*" element={<NotFound />}
        />
      </Routes>

      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => {
            setShowLogin(false);
          }}
          onLogin={() => {
            setShowLogin(false);
          }}
        />
      )}

    </BrowserRouter>
  );
}

export default App;