import { Card } from "@/components/ui/card";
import TicketMachine from "@/components/TicketMachine";

const Locations = () => {
  const locations = [
    { emoji: "🧋", text: "Riding through Boba Bay" },
    { emoji: "☕", text: "Relaxing at the ZACH 300E Lookout" },
    { emoji: "🏎️", text: "Racing the P-Ting Circuit (ENGR 102 & 216)" },
    { emoji: "🔬", text: "Uncovering new ideas at the Wisenbaker Research Hub" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          🎢 Where You'll Find Her in the Park
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          <div className="space-y-6">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-[0_8px_30px_hsl(var(--accent)/0.2)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent border-2 border-accent/20"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl animate-bounce-gentle" style={{ animationDelay: `${index * 0.2}s` }}>
                    {location.emoji}
                  </span>
                  <p className="text-lg font-medium">
                    {location.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <TicketMachine />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
