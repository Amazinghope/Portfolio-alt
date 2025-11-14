import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../components/Toast";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const phoneNumber = "2348165566261"; // replace with your WhatsApp number

  const handleSend = () => {
    if (!message.trim()) {
      showToast("⚠️ Please enter a message first!");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    showToast("✅ Opening WhatsApp...");
    setMessage("");
  };

  const showToast = (msg) => {
    setToastVisible(msg);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 dark:text-white"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-300 mb-8"
      >
        Want to collaborate or just say hi? Send me a WhatsApp message below 👇
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />

        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          💬 Send via WhatsApp
        </button>
      </motion.div>

      {/* Toast notification */}
      <Toast message={toastVisible} show={!!toastVisible} />
    </section>
  );
};

export default Contact;
