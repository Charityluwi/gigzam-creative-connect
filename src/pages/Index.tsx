
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
  // Ensure smooth scrolling and scroll to top when the page loads
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
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
