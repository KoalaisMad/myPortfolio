import { motion } from "framer-motion";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;
