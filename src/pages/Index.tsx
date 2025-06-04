
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedTalents from "@/components/FeaturedTalents";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  // Ensure smooth scrolling and scroll to top when the page loads
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Performance optimization: preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    document.head.appendChild(link);
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <ErrorBoundary fallback={
            <div className="min-h-[500px] flex items-center justify-center">
              <p className="text-gray-600">Unable to load hero section. Please refresh the page.</p>
            </div>
          }>
            <HeroSection />
          </ErrorBoundary>
          
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <ErrorBoundary fallback={
              <div className="py-16 text-center">
                <p className="text-gray-600">Unable to load categories. Please refresh the page.</p>
              </div>
            }>
              <CategorySection />
            </ErrorBoundary>
            
            <ErrorBoundary fallback={
              <div className="py-16 text-center">
                <p className="text-gray-600">Unable to load featured talents. Please refresh the page.</p>
              </div>
            }>
              <FeaturedTalents />
            </ErrorBoundary>
            
            <ErrorBoundary fallback={
              <div className="py-16 text-center">
                <p className="text-gray-600">Unable to load how it works section. Please refresh the page.</p>
              </div>
            }>
              <HowItWorks />
            </ErrorBoundary>
            
            <ErrorBoundary fallback={
              <div className="py-16 text-center">
                <p className="text-gray-600">Unable to load testimonials. Please refresh the page.</p>
              </div>
            }>
              <Testimonials />
            </ErrorBoundary>
          </div>
          
          <ErrorBoundary fallback={
            <div className="py-16 text-center bg-gray-50">
              <p className="text-gray-600">Unable to load call to action. Please refresh the page.</p>
            </div>
          }>
            <CallToAction />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
