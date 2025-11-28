import { useState } from "react";
import { motion } from "framer-motion";
import ResumeModal from "../components/Resume";
import Toast from "../components/Toast";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastVisible(msg);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <section id="hero" className="flex flex-col items-center  justify-center min-h-screen text-center 
    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
      >
        Hi, I'm <span className="text-blue-600 underline decoration-amber-700"> Idoteyin Ubaha</span>
          <span className="text-amber-600 italic">aka AmazingHope</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 mb-8"
      >
        Full-Stack Developer | React, HTML & CSS | Node.js & APIs | Responsive Web Apps
      </motion.p>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setShowResume(true);
            showToast("📄 Opening resume...");
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          📄 View Resume
        </button>

        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
        >
          View Projects
        </a>
      </div>

      {/* Resume Modal */}
      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />

      {/* Toast */}
      <Toast message={toastVisible} show={!!toastVisible} />
    </section>
  );
};

export default Hero;
