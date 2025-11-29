import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Locations from "@/components/Locations";
import ArcadeZone from "@/components/ArcadeZone";
import Clubs from "@/components/Clubs";
import Research from "@/components/Research";
import Timeline from "@/components/Timeline";

const Home = () => {
    // Scroll to #arcade-zone if hash is present
    useEffect(() => {
      if (window.location.hash === "#arcade-zone") {
        const el = document.getElementById("arcade-zone");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <Hero />
      <About />
      <Skills />
      <Locations />
      <Clubs />
      <Research />
      <Timeline />
      <ArcadeZone />
    </motion.div>
  );
};

export default Home;
