import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Leaf, Factory, ClipboardCheck, Package, Ship } from "lucide-react";

const steps = [
  { icon: Leaf, title: "Sourcing", desc: "Direct partnerships with premium Indian coffee estates" },
  { icon: Factory, title: "Processing", desc: "State-of-the-art washing, drying & hulling facilities" },
  { icon: ClipboardCheck, title: "Quality Check", desc: "Multi-level grading and cupping evaluations" },
  { icon: Package, title: "Packaging", desc: "Export-grade vacuum-sealed packaging" },
  { icon: Ship, title: "Shipping", desc: "Global logistics with temperature-controlled transport" },
];

export default function ExportProcess() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="export" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Export Process
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.title}
                className={`relative flex items-center mb-16 last:mb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : isLeft ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Desktop layout */}
                <div className={`hidden md:flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-5/12 ${isLeft ? "text-right pr-12" : "text-left pl-12"}`}>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                  <div className="w-2/12 flex justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold">
                      <step.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="w-5/12" />
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold">
                      <step.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
