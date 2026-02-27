import aboutFarm from "@/assets/about-farm.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Countries Exported" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

function StatCounter({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCounter(value, isVisible);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`overflow-hidden rounded-lg shadow-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img src={aboutFarm} alt="Coffee farm in India" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Coffee <br />Excellence Since 2014
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At ZENVIA IMPEX LLP, we are dedicated to sourcing the finest coffee beans from India's premier growing regions. Our commitment to ethical farming practices and sustainable sourcing ensures every bean meets the highest international standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work directly with coffee farmers, ensuring fair trade practices while delivering premium quality coffee to global markets. Our state-of-the-art processing facilities guarantee consistency and excellence in every shipment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
