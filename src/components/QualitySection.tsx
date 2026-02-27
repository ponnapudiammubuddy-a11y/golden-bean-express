import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import qualityImg from "@/assets/quality-inspection.jpg";
import { ShieldCheck, Award, PackageCheck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Quality Inspection", desc: "Every batch undergoes rigorous multi-stage quality testing to meet international standards." },
  { icon: Award, title: "Sorting & Grading", desc: "Precision sorting by size, color, and density ensures only the finest beans make the cut." },
  { icon: PackageCheck, title: "Premium Packaging", desc: "Vacuum-sealed, export-grade packaging preserves freshness from warehouse to destination." },
];

export default function QualitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quality" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={qualityImg} alt="Quality inspection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-dark/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Quality & Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Uncompromising Quality
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center p-8 rounded-lg border border-gold/20 bg-coffee-dark/40 backdrop-blur-sm transition-all duration-700 hover:border-gold/50 hover:bg-coffee-dark/60 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <f.icon className="w-12 h-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{f.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
