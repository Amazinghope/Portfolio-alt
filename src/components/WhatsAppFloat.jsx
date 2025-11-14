import { useState } from "react";
import { motion } from "framer-motion";
import Toast from '../components/Toast'

const FloatingWhatsApp = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const phoneNumber = "2348165566261"; // replace with your number
  const message = "Hi! 👋 I found your portfolio and would like to connect.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-lg rounded-full p-4 flex items-center justify-center text-white"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.88L0 24l6.36-1.6A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.8 0-3.54-.48-5.07-1.36l-.36-.21-3.77.95.98-3.66-.24-.38A9.963 9.963 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.11-7.74l-1.43-.43c-.19-.06-.42-.11-.63-.24a7.6 7.6 0 01-3.46-3.46c-.13-.21-.18-.44-.24-.63l-.43-1.43c-.06-.19-.2-.36-.38-.48-.13-.09-.27-.13-.43-.13-.08 0-.16.01-.25.03-.14.03-.27.09-.39.19-.29.21-1.14.94-1.32 1.12-.19.19-.65.68-.65 1.65 0 .97.66 1.9.75 2.03.09.14 1.29 2.06 3.13 2.81 1.84.75 1.84.5 2.16.47.32-.03 1.01-.41 1.15-.81.14-.39.14-.72.1-.81z" />
        </svg>
      </motion.button>

      {/* Toast notification */}
      <Toast message={toastVisible ? "✅ Opening WhatsApp..." : ""} show={!!toastVisible} />
    </>
  );
};

export default FloatingWhatsApp;
