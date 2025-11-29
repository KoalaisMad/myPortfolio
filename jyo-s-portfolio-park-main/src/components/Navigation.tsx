import { Link, useLocation } from "react-router-dom";
import { Briefcase, Mail, Menu, X, Gamepad2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/#arcade-zone", label: "Arcade Zone", icon: Gamepad2 },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo (left) */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-black dark:text-white hover:text-primary transition-colors"
          >
            ᥫ᭡ Jyo's LAND
          </Link>

          {/* Desktop Menu (RIGHT SIDE, WITH SPACE) */}
          <div className="hidden md:flex items-center gap-6 pr-4">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const isHash = link.path.startsWith("/#");

              return (
                <Link key={link.path} to={link.path} className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2 px-3 py-2 rounded-lg
                      text-black dark:text-white
                      bg-transparent hover:bg-transparent
                      transition-all
                    "
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </motion.div>

                  {/* underline */}
                  {!isHash && isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                flex items-center gap-2 px-3 py-2 rounded-lg
                text-black dark:text-white font-semibold
                bg-transparent hover:bg-transparent
                transition-all
              "
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-black dark:text-white hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar - BLUE */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed top-0 left-0 h-screen w-4/5 max-w-xs
              bg-blue-500/90 dark:bg-blue-900/90
              backdrop-blur-xl shadow-xl z-[60] md:hidden flex flex-col
              text-white
            "
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
              <span className="text-xl font-bold">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/15 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}

              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/15 transition-colors font-semibold"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Resume</span>
              </a>
              <a>   
              
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
