import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Floating3DCard from "@/components/Floating3DCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      emoji: "🛡️",
      screenshot: "Screenshot 2025-11-28 at 8.44.26 PM.png",
      title: "GirlBoss",
      subtitle: "AI Women's Safety Navigation Platform",
      description: "Built end-to-end real-time Safety Score pipeline using Databricks + Snowflake. Integrated crime data, lighting, weather, routing metadata, and device factors. Developed Next.js frontend with dynamic maps, route overlays, chatbot, and live score visualization. Won 1st Place – Best Use of Snowflake and 2nd Place – Best Use of Databricks at TAMU Datathon 2025.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Databricks", "Snowflake", "Google Maps API"],
      link: "https://girlbosssafety.us",
      github: "https://github.com/KoalaisMad/GirlBoss",
      featured: true
    },
    {
      emoji: "💼",
      screenshot: "Screenshot 2025-11-28 at 8.57.11 PM.png",
      title: "SwipeTern",
      subtitle: "Internship Matching Platform",
      description: "Created an internship-matching app with a Tinder-style swipe interface, facilitating 50+ recruiter–student matches during TamuHack. Delivered production-ready front end in React Native/Figma and implemented Firebase for secure login + profile management.",
      tech: ["React Native", "Expo", "Figma", "Firebase"],
      link: "https://devpost.com/software/lalala-kzb9fw",
      github: "https://github.com/obinnanprogrammed/tamuhack2024",
      featured: false
    },
    {
      emoji: "🍎",
      screenshot: "Screenshot 2025-11-28 at 6.23.18 PM.png" ,
      title: "NutriScan",
      subtitle: "AI Meal Planning & Grocery Assistant",
      description: "Engineered a meal planning application generating personalized meal plans based on dietary restrictions, allergies, and calorie goals. Leveraged OCR technology to extract grocery lists from receipt images. Utilized extensive Kaggle datasets with 2M+ recipes and nutritional values for accurate meal plans.",
      tech: ["Python", "OCR", "Machine Learning", "Kaggle Datasets"],
      github: "https://github.com/KoalaisMad/NutriScan",
      featured: false
    },
    // {
    //   emoji: "🤖",
    //   title: "RambotAI",
    //   subtitle: "AI Educational Assistant Chatbot",
    //   description: "AI chatbot designed to assist educators with study material, utilizing a Generative AI model. Implemented RAG based on teaching standards with user authentication and multi-language support. Added feedback mechanism to continuously improve performance.",
    //   tech: ["Python", "RAG", "Generative AI", "NLP"],
    //   // link: "https://rambotai.example.com",
    //   featured: false
    // },
    {
      emoji: "💰",
      screenshot: "Screenshot 2025-11-28 at 6.30.27 PM.png",
      title: "Sp/it",
      subtitle: "Roommate Finance & Task Manager",
      description: "Assisted in creating a roommate-companion app to efficiently enhance task sharing and finances. Created chat feature, task calendar, and more. Designed Figma mock-up and contributed to website design.",
      tech: ["React", "Node.js", "Figma"],
      github: "https://github.com/Split-Project",
      featured: false
    }
  ];

  return (
    <section id="projects" className="pt-24 md:pt-32 pb-12 md:pb-24 min-h-screen relative bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-primary drop-shadow-sm">
              🎢 Project Carousel Ride
            </h2>
            <span className="block w-2/3 h-1 rounded-full bg-primary/30 mb-6 md:mb-8"></span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-16">
            Take a ride through my creations
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Floating3DCard>
                <Card className="p-4 sm:p-6 md:p-8 hover:scale-[1.03] hover:shadow-[0_16px_48px_hsl(var(--pink-500)/0.25)] transition-all duration-300 border border-pink-300 bg-white/80 dark:bg-background/80 backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">{project.emoji}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-secondary font-semibold mb-3 sm:mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-primary/10 text-primary shadow-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                        aria-label={`Visit ${project.title} site`}
                      >
                        <Button className="gap-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white border-2 border-pink-300 hover:from-pink-500 hover:to-pink-400 hover:border-pink-500 w-full sm:w-auto text-sm">
                          <ExternalLink className="w-4 h-4" />
                          Visit Site
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={0}
                        aria-label={`View ${project.title} code on GitHub`}
                      >
                        <Button variant="outline" className="gap-2 border-2 border-pink-300 text-pink-600 hover:border-pink-500 hover:text-pink-500 w-full sm:w-auto text-sm">
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-muted-foreground shadow-lg border border-primary/30 overflow-hidden">
                    {project.title === "GirlBoss" ? (
                      <img
                        src={`/${project.screenshot}`}
                        alt={project.title + ' screenshot'}
                        className="w-full h-full object-cover rounded-xl shadow-md border border-primary/20 transition-transform duration-300 hover:scale-105"
                        style={{ transform: 'scale(1.25)', background: 'rgba(255,255,255,0.04)' }}
                      />
                    ) : (
                      <img
                        src={`/${project.screenshot}`}
                        alt={project.title + ' screenshot'}
                        className="w-full h-full object-cover rounded-xl shadow-md border border-primary/20 transition-transform duration-300 hover:scale-105"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                    )}
                  </div>
                </div>
              </div>
              </Card>
            </Floating3DCard>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
