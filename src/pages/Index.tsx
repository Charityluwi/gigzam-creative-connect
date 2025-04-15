
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedTalents from "@/components/FeaturedTalents";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <CategorySection />
          <FeaturedTalents />
          <HowItWorks />
          <Testimonials />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
