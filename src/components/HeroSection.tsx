import { useState, useEffect, useCallback } from "react";
import heroPlantation from "@/assets/hero-plantation.jpg";
import heroBeans from "@/assets/hero-beans.jpg";
import heroRoasting from "@/assets/hero-roasting.jpg";
import videoPlantation from "@/assets/video-plantation.mp4";

const slides = [heroPlantation, heroBeans, heroRoasting];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videoPlantation} type="video/mp4" />
      </video>

      {/* Fallback image slides (visible until video loads) */}
      {!videoLoaded &&
        slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt="Coffee"
              className={`w-full h-full object-cover ${
                i === current ? "animate-zoom-in" : ""
              }`}
            />
          </div>
        ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-coffee-dark/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up">
          Premium Indian <br />
          <span className="text-gradient-gold">Coffee Exporters</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-light tracking-wide animate-fade-up" style={{ animationDelay: "0.3s" }}>
          From Farm to Global Markets — Pure, Authentic, High-Quality Coffee
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#products"
            className="px-8 py-4 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold tracking-wider uppercase text-sm rounded transition-all duration-300 shadow-gold"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-accent-foreground font-semibold tracking-wider uppercase text-sm rounded transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
