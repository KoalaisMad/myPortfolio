import React from "react";
import { Card } from "@/components/ui/card";

// Timeline component is currently commented out per request.
// The original implementation is preserved below for easy restoration.
const Timeline = () => {
  // Disabled: return null so the component renders nothing.
  return null;
};

export default Timeline;

/*
Original Timeline implementation (preserved):

const Timeline = () => {
  const events = [
    { year: "2022", title: "Started at TAMU", description: "Began Computer Science + Statistics journey at Texas A&M University" },
    { year: "2023", title: "SWE & AWICS", description: "Joined Society of Women Engineers and Aggie Women in Computer Science" },
    { year: "2024", title: "SwipeTern & Sp/it", description: "Built early full-stack applications for TamuHack and Aggie Coding Club" },
    { year: "Jan 2025", title: "Computer Vision Research", description: "Started AI-driven BRD detection research under Animal Science Department. Achieved 99.5% mAP@0.5 in cattle detection, won 1st Place at TAMU Student Research Week." },
    { year: "Feb 2025", title: "ML Protein Research", description: "Joined Shen Lab for protein & drug design with ML. Automated ProteinGym pipelines, cutting preprocessing time 40%." },
    { year: "May 2025", title: "Projects Officer - SLS", description: "Leading curriculum on Python, R, PostgreSQL. Mentoring 30+ students and maintaining SLS website." },
    { year: "Aug 2025", title: "Peer Teacher", description: "Teaching 100+ students Python programming, algorithmic thinking, and leading Experimental Physics labs." },
    { year: "Nov 2025", title: "GirlBoss Platform", description: "Won 1st Place - Best Use of Snowflake and 2nd Place - Best Use of Databricks at TAMU Datathon 2025" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          🎢 Timeline Ride
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          My journey through the years
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative pl-20 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute left-4 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <Card className="p-6 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] transition-all duration-300">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{event.year}</span>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-4xl">
          🎢
        </div>
      </div>
    </section>
  );
};

export default Timeline;

*/
