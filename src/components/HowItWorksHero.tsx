
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksHero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gigzam-purple/5 to-gigzam-purple/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How <span className="text-gigzam-purple">GigZam</span> Works
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We've simplified the process of finding and booking creative talent in Zambia. Here's how it all works.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/discover">
              <Button className="bg-gigzam-purple hover:bg-gigzam-purple-dark text-white">
                Start Exploring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple/10">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
