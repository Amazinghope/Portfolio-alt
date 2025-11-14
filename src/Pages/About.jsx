import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 max-w-3xl mx-auto text-center 
     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-5 rounded-lg">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-300 "
      >
        I’m a passionate Fullstack Developer with a love for building modern, responsive web 
        applications. I specialize in crafting intuitive user interfaces and seamless user 
        experiences using React and Tailwind CSS. Continuously learning and exploring new technologies,
         I strive to create applications that are both functional and visually engaging.      </motion.p>
    </section>
  );
};

export default About;
