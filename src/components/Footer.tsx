import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-gold" />
              <span className="font-display text-xl font-bold text-primary-foreground">ZENVIA IMPEX</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Premium Indian Coffee. Exported Worldwide. From the finest estates to your cup.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Our Coffee", "Quality", "Export Process", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-2">
              {["Arabica Beans", "Robusta Beans", "Roasted Coffee", "Green Coffee", "Coffee Powder", "Specialty Coffee"].map((p) => (
                <li key={p}>
                  <a href="#products" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/30 text-sm">
            © {new Date().getFullYear()} ZENVIA IMPEX LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
