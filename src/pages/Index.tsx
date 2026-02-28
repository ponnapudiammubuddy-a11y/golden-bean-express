import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoShowcase from "@/components/VideoShowcase";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import ExportProcess from "@/components/ExportProcess";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoShowcase />
      <ProductsSection />
      <QualitySection />
      <ExportProcess />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
