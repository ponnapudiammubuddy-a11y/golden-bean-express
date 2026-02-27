import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Marcus Weber", role: "Import Manager, Berlin", text: "ZENVIA IMPEX consistently delivers the finest Indian coffee. Their Arabica beans are exceptional — rich aroma, clean cup, every single time." },
  { name: "Sophie Laurent", role: "Roastery Owner, Paris", text: "Working with ZENVIA has transformed our sourcing. The quality control is impeccable and their export process is seamless." },
  { name: "Takeshi Yamamoto", role: "Coffee Buyer, Tokyo", text: "Reliable, premium quality, and outstanding communication. ZENVIA IMPEX is our trusted partner for Indian specialty coffee." },
  { name: "Elena Rossi", role: "Procurement Director, Milan", text: "The green coffee beans we source from ZENVIA are consistently graded at the highest level. A truly professional export partner." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-24 bg-cream-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="w-16 h-16 text-gold/20 mx-auto mb-6" />

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 text-center transition-all duration-700 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-8 font-light">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
