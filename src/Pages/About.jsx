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
  <p className="leading-relaxed text-lg mb-4">  I am a Fullstack Developer with experience building responsive and user-focused
     web applications. On the frontend, I work with HTML, CSS, React, and Tailwind 
     CSS to create clean and functional interfaces. </p>
     
    <p className="leading-relaxed text-lg mb-4"> On the backend, I use Node.js and Express and follow the MVC architecture to
      keep applications organized and maintainable. I also build RESTful APIs, work 
      with MongoDB, and use Git and Render for version control and deployment.</p>

<p className="leading-relaxed text-lg mb-4 ">I enjoy learning new tools and improving my skills so I can contribute to projects
 in a reliable and effective way across the full development stack.  </p>    </motion.p>
    </section>
  );
};

export default About;
