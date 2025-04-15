
import { useState } from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const serviceCategories = [
  { id: "musician", name: "Musician" },
  { id: "dj", name: "DJ" },
  { id: "photographer", name: "Photographer" },
  { id: "makeup", name: "Makeup Artist" },
  { id: "mc", name: "MC/Host" },
  { id: "hair", name: "Hair Stylist" },
  { id: "nail", name: "Nail Technician" },
  { id: "designer", name: "Designer" },
  { id: "venue", name: "Venue" },
  { id: "decor", name: "Decor" },
  { id: "caterer", name: "Caterer" },
  { id: "sound", name: "Sound Engineer" },
  { id: "dancer", name: "Dancer" },
  { id: "car", name: "Car Hire" },
  { id: "florist", name: "Florist" },
  { id: "matron", name: "Matron" },
  { id: "baker", name: "Baker" },
];

const locations = [
  "Lusaka",
  "Kitwe",
  "Ndola",
  "Kabwe",
  "Livingstone",
  "Chipata",
  "Chingola",
  "Mufulira",
  "Luanshya",
  "Kasama",
];

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (selectedCategory) searchParams.append("category", selectedCategory);
    if (selectedLocation) searchParams.append("location", selectedLocation);
    if (date) searchParams.append("date", format(date, "yyyy-MM-dd"));
    
    navigate(`/search?${searchParams.toString()}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-[600px] flex items-center african-pattern overflow-hidden clip-path-slant">
      <div className="absolute inset-0 stripe-gradient opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="gigzam-logo text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover & Book Amazing Services in Zambia
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with the best musicians, DJs, photographers, makeup artists and more for your next event
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full pl-9 text-left h-[42px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <SelectValue placeholder="What service do you need?" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    <SelectGroup>
                      {serviceCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="relative">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full pl-9 text-left h-[42px]">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <SelectValue placeholder="Where? (City, Area)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location.toLowerCase()}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={cn(
                        "w-full h-[42px] pl-9 pr-4 justify-start text-left font-normal border border-gray-200",
                        !date && "text-gray-400"
                      )}
                    >
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      {date ? format(date, "PPP") : "When? (Date)"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="mt-4">
              <Button 
                onClick={handleSearch}
                className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-white py-3 h-auto text-lg"
              >
                Find Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-white/80 flex flex-wrap justify-center gap-x-8 gap-y-2 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <span className="flex items-center">
              <span className="bg-white h-1.5 w-1.5 rounded-full mr-2"></span>
              10,000+ Verified Services
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
