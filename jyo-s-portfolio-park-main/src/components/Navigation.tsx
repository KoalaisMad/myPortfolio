import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Mail } from "lucide-react";
import { Gamepad2, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/#arcade-zone", label: "Arcade Zone", icon: Gamepad2 },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 py-2 md:py-0">
            <Link to="/" className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 md:mb-0">
              ᥫ᭡ Jyo's LAND
            </Link>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center w-full md:w-auto">
              {links.map((link) => {
                if (link.path === '/#arcade-zone') {
                  return (
                    <Link
                      key={link.path}
                      to="/#arcade-zone"
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-black dark:text-white"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.label}</span>
                      </motion.div>
                    </Link>
                  );
                } else {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-black dark:text-white"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.label}</span>
                      </motion.div>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                }
              })}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 w-full md:w-auto rounded-lg transition-colors text-black dark:text-white font-semibold hover:bg-primary/10"
                aria-label="Download Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
    </motion.nav>
  );
};

export default Navigation;
