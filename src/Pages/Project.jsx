import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center dark:text-white"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
