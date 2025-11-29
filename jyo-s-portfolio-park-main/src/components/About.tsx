import { Card } from "@/components/ui/card";

const About = () => {
  const attractions = [
    {
      emoji: "🎢",
      title: "CS Adventure Trail",
      description: "A strong foundation in software engineering, algorithms, and systems programming that fuels her love for building and experimenting."
    },
    {
      emoji: "🎡",
      title: "ML & Intelligent Systems Zone",
      description: "Developing machine learning pipelines, real-time safety scoring systems, and intelligent applications powered by Databricks, Snowflake, and modern AI workflows."
    },
    {
      emoji: "🎠",
      title: "Full-Stack Builder Alley",
      description: "Creating polished, end-to-end experiences using Next.js, React, Node/Express, MongoDB, SQL, and cloud deployment tools—bringing ideas from concept to production."
    },
    {
      emoji: "🎪",
      title: "Community & Leadership Plaza",
      description: "Leading projects, mentoring peers, hosting workshops, and expanding outreach through SLS, AWICS, SWE, and the broader TAMU engineering community."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Park Map
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore the attractions of my journey ✨
          </p>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Jyo (Jyoshitha Madhavarapu) is a Computer Science student at Texas A&M University passionate about 
            applied machine learning, intelligent systems, and building real-world products from scratch. She blends 
            engineering creativity with practical problem-solving—especially when it comes to safety, data-driven tools, 
            and full-stack applications that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {attractions.map((attraction, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-2 border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {attraction.emoji}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {attraction.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {attraction.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
