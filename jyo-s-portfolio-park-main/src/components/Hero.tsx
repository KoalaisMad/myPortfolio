import Spline from '@splinetool/react-spline';
import React from "react";
import TypingText from "./TypingText";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";


const Hero = () => {
  const navigate = useNavigate();
  const goToProjects = () => {
    navigate("/projects");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  // Ref for Spline
  const splineRef = React.useRef(null);

  // Handler to make robot look at projects
  const handleProjectsHover = () => {
    if (splineRef.current) {
      // Example: move camera or trigger animation
      // Replace 'LookAtProjects' with your Spline event name
      splineRef.current.emitEvent('mouseHover', 'LookAtProjects');
    }
  };
  const handleProjectsUnhover = () => {
    if (splineRef.current) {
      // Example: reset camera or animation
      splineRef.current.emitEvent('mouseHover', 'Idle');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.15),transparent_50%)]" />
      </div>
      {/* Top Welcome Section (not fixed) */}
      <div className="w-full pt-20 md:pt-24 pb-4 z-20 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 px-4 mt-4 md:mt-6">
          <div className="flex-1 min-w-0 max-w-lg lg:max-w-none flex flex-col items-center justify-center text-center lg:ml-8">
            <div className="mb-2">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary drop-shadow mb-2 font-comic">Howdy!</span>
            </div>
            <div
              className="w-full"
              onMouseMove={e => {
                if (splineRef.current) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  splineRef.current.emitEvent('mouseMove', { x, y });
                }
              }}
              onMouseLeave={() => {
                if (splineRef.current) {
                  splineRef.current.emitEvent('mouseLeave');
                }
              }}
            >
             <TypingText className="text-base sm:text-lg md:text-xl mb-4 text-muted-foreground max-w-md lg:max-w-3xl mx-auto font-comic px-2">
  {"I'm Jyo and here is my friend Kyro!\nHe'll guide you through my LALA Land!"}
</TypingText>


            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
              <Button
                size="lg"
                onClick={goToProjects}
                onMouseMove={e => {
                  if (splineRef.current) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    splineRef.current.emitEvent('mouseMove', { x, y });
                  }
                }}
                onMouseLeave={() => {
                  if (splineRef.current) {
                    splineRef.current.emitEvent('mouseLeave');
                  }
                }}
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all w-full sm:w-auto"
              >
                View Projects 🎟️
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={goToContact}
                onMouseMove={e => {
                  if (splineRef.current) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    splineRef.current.emitEvent('mouseMove', { x, y });
                  }
                }}
                onMouseLeave={() => {
                  if (splineRef.current) {
                    splineRef.current.emitEvent('mouseLeave');
                  }
                }}
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-secondary to-[hsl(25_88%_70%)] hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)] transition-all w-full sm:w-auto"
              >
                Contact Me 🎟️
              </Button>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center items-center w-full">
                <a
                  href="https://www.linkedin.com/in/jyoshitha-madhavarapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/KoalaisMad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-semibold hidden sm:inline">GitHub</span>
                </a>
              </div>
          </div>
          <div className="flex-1 min-w-0 flex items-center justify-center lg:ml-[-40px]">
            <div className="w-full max-w-[90vw] sm:max-w-[320px] md:max-w-[400px] aspect-square overflow-visible flex items-center justify-center">
              <Spline scene="https://prod.spline.design/rQLxnxI9l6038NQN/scene.splinecode" className="w-full h-full" style={{ minHeight: '220px', minWidth: '220px' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Hero text and content below robot */}
      <div className="container mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 2 }}>
        <div className="mt-32" />
        <motion.div
          className="text-6xl md:text-7xl mb-8"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Dramatic page break separator */}
      <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 relative">
        {/* Fade effect */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background/0 via-background/80 to-background/100 pointer-events-none" />
        {/* Bold gradient divider */}
        <div className="w-full flex justify-center items-center">
          <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 shadow-lg" />
        </div>
        {/* Extra vertical space */}
        <div className="h-16" />
      </div>
      {/* Welcome to LALA Land Board (after page break) */}
      <div className="w-full flex justify-center items-center py-8 md:py-16 px-4">
        <motion.div
          className="relative bg-gradient-to-r from-pink-200 via-yellow-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white dark:border-gray-700 px-4 sm:px-6 md:px-8 py-6 md:py-10 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto text-center"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Lights */}
          <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`inline-block w-2 h-2 md:w-4 md:h-4 rounded-full shadow-lg ${i % 2 === 0 ? 'bg-pink-400' : 'bg-yellow-300'} animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-black dark:text-white drop-shadow mb-2 md:mb-4 font-comic">Welcome to LALA Land!</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-comic">Enjoy the ride, explore the park, and let Kyro guide you!</p>
          {/* Bottom lights */}
          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`inline-block w-2 h-2 md:w-4 md:h-4 rounded-full shadow-lg ${i % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-300'} animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
