import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="Back to top"
    >
      ↑
    </motion.button>
  ) : null;
};

export default BackToTop;
