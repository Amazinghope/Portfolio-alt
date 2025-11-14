import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-fit rounded-3xl" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex gap-4">
          <a href={project.live} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
            Live
          </a>
          <a href={project.repo} target="_blank" className="text-gray-600 dark:text-gray-300 hover:underline">
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
