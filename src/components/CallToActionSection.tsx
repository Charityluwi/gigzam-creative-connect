
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gigzam-purple text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Join GigZam today and experience the easiest way to book creative talent in Zambia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/auth?tab=register">
            <Button size="lg" className="bg-white text-gigzam-purple hover:bg-gray-100">
              Create an Account
            </Button>
          </Link>
          <Link to="/discover">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse Talent
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
