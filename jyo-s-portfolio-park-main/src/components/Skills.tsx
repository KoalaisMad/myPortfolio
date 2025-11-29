import React from 'react';
import { motion } from 'framer-motion';


export default function Skills() {
  const skillCategories = [
    {
      category: 'Data Science & ML',
      skills: ['Python', 'R', 'SQL', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Software Engineering',
      skills: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Haskell', 'Node.js', 'Express', 'REST APIs'],
    },
    {
      category: 'Full-Stack & Frontend',
      skills: ['React', 'React Native', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Google Colab', 'Notion', 'Docker', 'Linux', 'PostgreSQL', 'Firebase', 'Conda', 'SLURM', 'VS Code', 'Figma'],
    },
    {
      category: 'Core Strengths',
      skills: ['Machine Learning', 'Full-Stack Development', 'Computer Vision', 'HPC Workflows'],
    },
  ];

  // attractions removed per request

  return (
    <section id="skills" className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">

          {/* Left: Header + Attractions (stacked) */}
          <div className="md:col-span-1">
            <motion.div initial={{ x: -12, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Skills & Attractions</h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded mt-4" />
              <p className="mt-3 text-sm text-muted-foreground">Core tools and zones where I design, build, and ship.</p>
            </motion.div>

            {/* attractions removed — header remains */}
          </div>

          {/* Right: Skill categories (stacked animated pills per user's format) */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
                    <h4 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: catIdx * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full shadow-md border-2 border-pink-200 dark:border-pink-800/30"
                        >
                          <span className="text-sm font-semibold">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* (Tree visualization removed) */}

      </div>
    </section>
  );
}
