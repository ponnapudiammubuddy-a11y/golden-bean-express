import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Export Inquiry
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">exports@zenviaimex.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden h-48 bg-muted">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452148439!3d12.954517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 bg-card rounded-lg p-8 shadow-lg border border-border transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Product Interest</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                >
                  <option value="">Select product</option>
                  <option value="arabica">Arabica Coffee Beans</option>
                  <option value="robusta">Robusta Coffee Beans</option>
                  <option value="roasted">Roasted Coffee</option>
                  <option value="green">Green Coffee Beans</option>
                  <option value="powder">Coffee Powder</option>
                  <option value="specialty">Specialty Coffee</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold tracking-wider uppercase text-sm rounded transition-all duration-300 shadow-gold"
            >
              <Send size={16} />
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
