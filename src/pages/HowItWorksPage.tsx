
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import HowItWorksHero from "@/components/HowItWorksHero";
import ClientSteps from "@/components/ClientSteps";
import CreativeSteps from "@/components/CreativeSteps";
import StarBookLoyaltyProgram from "@/components/StarBookLoyaltyProgram";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HowItWorksHero />

        {/* Tabs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="how-it-works" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="loyalty-program">StarBook Program</TabsTrigger>
              </TabsList>

              <TabsContent value="how-it-works" className="space-y-20">
                {/* Main Steps Section */}
                <HowItWorks />

                {/* For Clients Section */}
                <ClientSteps />

                {/* For Creatives Section */}
                <CreativeSteps />
              </TabsContent>

              <TabsContent value="loyalty-program" className="space-y-12">
                {/* StarBook Loyalty Program Section */}
                <StarBookLoyaltyProgram />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to Action */}
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
