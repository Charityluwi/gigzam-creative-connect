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
import { motion } from "framer-motion";
import { validateForm, ValidationRules } from "@/utils/validation";
import { useToast } from "@/hooks/use-toast";

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validationRules: ValidationRules = {
    category: { required: true },
    location: { required: true }
  };

  const handleSearch = async () => {
    try {
      setIsSearching(true);
      setErrors({});

      const formData = {
        category: selectedCategory,
        location: selectedLocation,
        date: date ? format(date, "yyyy-MM-dd") : ""
      };

      const validationErrors = validateForm(formData, validationRules);
      
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast({
          title: "Search Error",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      const searchParams = new URLSearchParams();
      if (selectedCategory) searchParams.append("category", selectedCategory);
      if (selectedLocation) searchParams.append("location", selectedLocation);
      if (date) searchParams.append("date", format(date, "yyyy-MM-dd"));
      
      navigate(`/search?${searchParams.toString()}`);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="relative min-h-[700px] flex items-center african-pattern overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 stripe-gradient opacity-90"></div>
      
      {/* Custom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff" preserveAspectRatio="none" className="w-full h-[70px]">
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="gigzam-logo text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
            Discover & Book Amazing Services in Zambia
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            variants={fadeInUp}
          >
            Connect with the best musicians, DJs, photographers, makeup artists and more for your next event
          </motion.p>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className={cn(
                    "w-full pl-9 text-left h-[42px] bg-white",
                    errors.category && "border-red-500"
                  )}>
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
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                )}
              </div>
              
              <div className="relative">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className={cn(
                    "w-full pl-9 text-left h-[42px] bg-white",
                    errors.location && "border-red-500"
                  )}>
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
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>
              
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={cn(
                        "w-full h-[42px] pl-9 pr-4 justify-start text-left font-normal border border-gray-200 bg-white",
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
            <div className="mt-5">
              <Button 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-white py-3 h-auto text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>Finding Services...</>
                ) : (
                  <>Find Services <ArrowRight className="ml-2 h-5 w-5" /></>
                )}
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-white/80 flex flex-wrap justify-center gap-x-8 gap-y-2"
            variants={fadeInUp}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
