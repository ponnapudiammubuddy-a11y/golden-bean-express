import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productArabica from "@/assets/product-arabica.jpg";
import productRobusta from "@/assets/product-robusta.jpg";
import productRoasted from "@/assets/product-roasted.jpg";
import productGreen from "@/assets/product-green.jpg";
import productPowder from "@/assets/product-powder.jpg";
import productSpecialty from "@/assets/product-specialty.jpg";

const products = [
  { name: "Arabica Coffee Beans", desc: "Premium highland grown, smooth & aromatic", image: productArabica },
  { name: "Robusta Coffee Beans", desc: "Bold, strong & full-bodied flavor", image: productRobusta },
  { name: "Roasted Coffee", desc: "Expertly roasted to perfection", image: productRoasted },
  { name: "Green Coffee Beans", desc: "Raw, unroasted export-grade beans", image: productGreen },
  { name: "Coffee Powder", desc: "Finely ground premium blend", image: productPowder },
  { name: "Specialty Coffee", desc: "Single origin, curated excellence", image: productSpecialty },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 bg-cream-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Premium Coffee Selection
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/70 transition-all duration-500 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center px-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{product.name}</h3>
                  <p className="text-primary-foreground/70 text-sm mb-6">{product.desc}</p>
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-accent-foreground text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    Request Quote
                  </a>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-coffee-dark/80 backdrop-blur-sm px-6 py-4 group-hover:translate-y-full transition-transform duration-500">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
