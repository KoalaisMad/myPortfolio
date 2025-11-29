import React from "react";
import { motion } from "framer-motion";
import { Award, History } from "lucide-react";

const currentClubs = [
  {
    name: "Statistics Learning Society (SLS)",
    description: "My safe place for learning statistics and programming; currently leading our club projects.",
    link: "https://slstamu.vercel.app",
    color: "from-purple-400 to-pink-400",
    icon: "📊",
  },
  {
    name: "Aggie Women in Computer Science (AWICS)",
    description: "Service Officer working with kids and community outreach; expanding to a new library.",
    link: "https://www.awics.org",
    color: "from-blue-400 to-cyan-400",
    icon: "👩‍💻",
  },
  {
    name: "APHFLO",
    description: "Pan-Honors Freshman Leadership Organization – leadership development and community building within the Honors community.",
    link: "https://www.instagram.com/aggiephflo/",
    color: "from-green-400 to-teal-400",
    icon: "🎓",
  },
];

const pastClubs = [
  {
    name: "WIRED VEX Robotics",
    role: "Historian & Programming Member",
    description: "Served ~2 years. Documented progress, created design notebooks (2023–2024, 2024–2025), organized events, and competed.",
    fun: "We beat TU in our match!",
    icon: "🤖",
  },
    {
      name: "Google Developer Club (GDSC) TAMU",
      role: "Workshop Officer",
      description: "Led workshops on web dev and machine learning; promoted Google tools.",
      icon: "🌐",
    },
  {
    name: "Aggie Coding Club",
    description: "Worked on Sp/it & AggieSeek; involved in workshops.",
    icon: "💻",
  },
  {
    name: "Aggie Data Science Club",
    role: "Project Manager for Data Analytics",
    description: "Leading data analytics projects and mentoring members in data science methodologies.",
    icon: "🔬",
  },
    {
      name: "Society of Women Engineers (SWE)",
      description: "Member; participated in engineering community events.",
      icon: "⚙️",
    },
];

export default function Clubs() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Park Attractions</h2>
        <p className="text-2xl text-center text-muted-foreground mb-16">Clubs & Communities</p>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Award className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-primary">Current Involvement</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {currentClubs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, rotate: 1 }}
              >
                <div className="bg-white dark:bg-card rounded-3xl p-6 shadow-xl border-4 border-white hover:shadow-2xl transition-shadow h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 text-3xl mx-auto`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 text-center">{item.name}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <History className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-primary">Past Involvement</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastClubs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-primary mb-1">{item.name}</h4>
                      {item.role && <p className="text-sm font-semibold text-purple-600 mb-2">{item.role}</p>}
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      {item.fun && <p className="text-sm text-pink-600 font-semibold mt-2 italic">🎉 {item.fun}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
       </div>
    </section>
  );
}
