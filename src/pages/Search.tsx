import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TalentCard from "@/components/TalentCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sliders, Loader2 } from "lucide-react";
import { format, parse } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/ui/slider";

const mockTalents = [
  {
    id: 1,
    name: "David Mwale",
    category: "musician",
    location: "lusaka",
    rating: 4.9,
    reviews: 56,
    price: 2500,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Chilufya Banda",
    category: "dj",
    location: "kitwe",
    rating: 4.7,
    reviews: 32,
    price: 1800,
    image: "https://images.unsplash.com/photo-1571775323021-661594b5914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    name: "Thandi Phiri",
    category: "makeup",
    location: "lusaka",
    rating: 4.8,
    reviews: 45,
    price: 1200,
    image: "https://images.unsplash.com/photo-1560577345-44df3ed0bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 4,
    name: "Kalumba Studios",
    category: "photographer",
    location: "ndola",
    rating: 4.6,
    reviews: 28,
    price: 1500,
    image: "https://images.unsplash.com/photo-1575506010339-1e95e2121fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 5,
    name: "MC Jerome",
    category: "mc",
    location: "lusaka",
    rating: 4.9,
    reviews: 62,
    price: 2000,
    image: "https://images.unsplash.com/photo-1559638753-d8fbd8a6e2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 6,
    name: "Nomsa Designs",
    category: "decor",
    location: "livingstone",
    rating: 4.7,
    reviews: 38,
    price: 3500,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
  },
  {
    id: 7,
    name: "Sarah Mulenga",
    category: "hair",
    location: "lusaka",
    rating: 4.8,
    reviews: 42,
    price: 1700,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 8,
    name: "Bright Events",
    category: "venue",
    location: "kitwe",
    rating: 4.6,
    reviews: 30,
    price: 5000,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
  },
  {
    id: 9,
    name: "Nail Art by Mercy",
    category: "nail",
    location: "ndola",
    rating: 4.7,
    reviews: 35,
    price: 800,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    name: "Joseph Fashions",
    category: "designer",
    location: "lusaka",
    rating: 4.9,
    reviews: 50,
    price: 3000,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];

const talentCategories = [
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

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [talents, setTalents] = useState<any[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const category = searchParams.get("category") || "all-categories";
  const location = searchParams.get("location") || "all-locations";
  const dateParam = searchParams.get("date");
  const date = dateParam ? parse(dateParam, "yyyy-MM-dd", new Date()) : undefined;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filteredTalents = [...mockTalents];
      
      if (category && category !== "all-categories") {
        filteredTalents = filteredTalents.filter(
          (talent) => talent.category === category
        );
      }
      
      if (location && location !== "all-locations") {
        filteredTalents = filteredTalents.filter(
          (talent) => talent.location === location.toLowerCase()
        );
      }
      
      filteredTalents = filteredTalents.filter(
        (talent) => talent.price >= priceRange[0] && talent.price <= priceRange[1]
      );
      
      if (sortBy === "price_low") {
        filteredTalents.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price_high") {
        filteredTalents.sort((a, b) => b.price - a.price);
      } else if (sortBy === "rating") {
        filteredTalents.sort((a, b) => b.rating - a.rating);
      }
      
      setTalents(filteredTalents);
      setLoading(false);
    }, 1000);
  }, [category, location, date, priceRange, sortBy]);

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value && value !== "all-categories" && value !== "all-locations") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleDateSelect = (newDate: Date | undefined) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (newDate) {
      newParams.set("date", format(newDate, "yyyy-MM-dd"));
    } else {
      newParams.delete("date");
    }
    setSearchParams(newParams);
  };

  const updatePriceRange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const categoryName = category && category !== "all-categories"
    ? talentCategories.find(c => c.id === category)?.name 
    : "All Categories";

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        <div className="bg-gigzam-purple-dark text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-4">
              {talents.length} {categoryName} found {location !== "all-locations" ? `in ${location}` : ""} 
              {date ? ` for ${format(date, "PPP")}` : ""}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3">
              <Select 
                value={category} 
                onValueChange={(value) => updateFilters("category", value)}
              >
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  {talentCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={location} 
                onValueChange={(value) => updateFilters("location", value)}
              >
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc.toLowerCase()}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full md:w-48 bg-white/10 border-white/20 text-white justify-start"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Any Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              
              <Button
                variant="outline"
                className="md:ml-auto bg-white/10 border-white/20 text-white"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
            
            {filtersOpen && (
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Price Range (K)</h3>
                    <div className="px-2">
                      <Slider
                        min={0}
                        max={5000}
                        step={100}
                        value={[priceRange[0], priceRange[1]]}
                        onValueChange={updatePriceRange}
                        className="my-6"
                      />
                      <div className="flex justify-between text-sm">
                        <span>K{priceRange[0]}</span>
                        <span>K{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Relevance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="price_low">Price: Low to High</SelectItem>
                        <SelectItem value="price_high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-gigzam-purple" />
              <span className="ml-2 text-lg">Loading talents...</span>
            </div>
          ) : talents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map((talent) => (
                <TalentCard 
                  key={talent.id}
                  id={talent.id.toString()}
                  name={talent.name}
                  category={talentCategories.find(c => c.id === talent.category)?.name || talent.category}
                  location={locations.find(l => l.toLowerCase() === talent.location) || talent.location}
                  rating={talent.rating}
                  reviews={talent.reviews}
                  price={`K${talent.price}`}
                  imageUrl={talent.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No talents found</h2>
              <p className="text-gray-600 mb-6">Try adjusting your search filters to find more talents</p>
              <Button onClick={() => setSearchParams(new URLSearchParams())}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
