
import { useState } from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="relative min-h-[600px] flex items-center african-pattern overflow-hidden clip-path-slant">
      <div className="absolute inset-0 bg-gradient-to-r from-gigzam-purple/90 to-gigzam-purple-dark/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover & Book Amazing Talent in Zambia
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with the best musicians, DJs, photographers, makeup artists and more for your next event
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What talent do you need?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where? (City, Area)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="When? (Date)"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-white py-3 h-auto text-lg">
                Find Talents <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-white/80 flex flex-wrap justify-center gap-x-8 gap-y-2 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <span className="flex items-center">
              <span className="bg-white h-1.5 w-1.5 rounded-full mr-2"></span>
              10,000+ Verified Talents
            </span>
            <span className="flex items-center">
              <span className="bg-white h-1.5 w-1.5 rounded-full mr-2"></span>
              Safe & Secure Payments
            </span>
            <span className="flex items-center">
              <span className="bg-white h-1.5 w-1.5 rounded-full mr-2"></span>
              100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
