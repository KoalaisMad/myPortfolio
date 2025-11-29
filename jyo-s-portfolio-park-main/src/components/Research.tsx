import { Card } from "@/components/ui/card";
import Floating3DCard from "@/components/Floating3DCard";

const Research = () => {
  const projects = [
    {
      emoji: "🐄",
      title: "BRD Detection Railway",
      department: "Animal Science Department",
      period: "",
      description: "Detecting Bovine Respiratory Disease using computational and data-driven methods. Interdisciplinary collaboration between computing and animal science to improve livestock health monitoring.",
      achievements: [
        "Computer Vision",
        "Object Detection (YOLOv5)",
        "Instance Segmentation",
        "Data Annotation",
        "Python",
        "PyTorch",
        "Model Evaluation",
      ],
      link: null,
    },
    {
      emoji: "🧬",
      title: "Protein Discovery Coaster",
      department: "CSCE – Shen Lab",
      period: "",
      description: "Exploring protein sequence modeling, variant effect prediction, and ML pipelines on protein datasets. Working with cutting-edge computational biology and bioinformatics.",
      achievements: [
        "Protein Sequence Modeling",
        "Variant Effect Prediction",
        "ML Pipelines",
        "ESM Embeddings",
        "Python",
        "PyTorch",
        "Bioinformatics",
      ],
      link: "https://github.com/Shen-Lab",
    },
    {
      emoji: "🧠",
      title: "Cognitive Carousel",
      department: "Yamauchi Cognitive Science Lab",
      period: "",
      description: "Investigating human decision-making, learning, and cognition. Exploring the intersection of AI and cognitive science to understand how people think and learn.",
      achievements: [
        "NiLearn",
        "CONN Toolbox",
        "Behavioral Experiments",
        "Cognitive Modeling",
        "Python",
        "Data Analysis",
      ],
      link: "https://sites.google.com/tamu.edu/yamauchi-cognitive-science-lab/home",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">🔬 Research Rides</h2>
        <p className="text-xl text-center text-muted-foreground mb-16">Exploring labs across campus</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Floating3DCard key={index}>
              <Card className="p-6 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {project.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-secondary font-semibold mb-2">{project.department}</p>
                <p className="text-xs text-muted-foreground mb-3 font-medium">{project.period}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.achievements.map((skill, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary to-primary-glow text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Learn more →
                  </a>
                )}
              </Card>
            </Floating3DCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
