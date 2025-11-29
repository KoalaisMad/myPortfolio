import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
