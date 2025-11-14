import { motion } from "framer-motion";

const skills = ["HTML", "CSS",  "Tailwind CSS", "React",  "JavaScript",  "Framer Motion", "Git", "Node.js", "Express", "Mongodb",];

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 dark:text-white"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 shadow-sm hover:scale-105 transition-transform">
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
