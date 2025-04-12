
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Star, Clock, Check, Award, ChevronRight, ChevronLeft, Heart, Share, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

// Mock talent data
const mockTalent = {
  id: "1",
  name: "David Mwale",
  category: "Musician",
  location: "Lusaka",
  bio: "Professional musician with over 10 years of experience performing at weddings, corporate events, and private parties. Specializing in a mix of contemporary and traditional Zambian music.",
  rating: 4.9,
  reviews: 56,
  price: 2500,
  packages: [
    {
      id: "basic",
      name: "Basic Performance",
      price: 2500,
      duration: "2 hours",
      description: "Solo performance with acoustic guitar. Perfect for intimate gatherings and small events.",
      includes: ["2-hour live performance", "Basic sound setup", "20 song selection"]
    },
    {
      id: "standard",
      name: "Standard Performance",
      price: 4500,
      duration: "3 hours",
      description: "Performance with a small band (3 musicians). Great for medium-sized events and parties.",
      includes: ["3-hour live performance", "Full sound setup", "30 song selection", "1 special request song"]
    },
    {
      id: "premium",
      name: "Premium Experience",
      price: 7500,
      duration: "4 hours",
      description: "Full band performance with backup singers. Ideal for large events, weddings, and corporate functions.",
      includes: ["4-hour live performance", "Premium sound setup", "40 song selection", "3 special request songs", "MC services"]
    }
  ],
  portfolio: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1565310105094-0a2a52c88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ],
  reviews: [
    {
      id: 1,
      user: "Janet Banda",
      date: "2023-08-15",
      rating: 5,
      comment: "David performed at our wedding and was absolutely incredible! His voice and guitar skills are amazing, and he was very professional throughout the event."
    },
    {
      id: 2,
      user: "Michael Sata",
      date: "2023-07-22",
      rating: 5,
      comment: "We hired David for our corporate event and he exceeded our expectations. His music selection was perfect for the occasion and he engaged well with our guests."
    },
    {
      id: 3,
      user: "Grace Mutale",
      date: "2023-06-10",
      rating: 4,
      comment: "Great performance! David is very talented and created a wonderful atmosphere at our family gathering. The only reason for 4 stars is that he arrived a bit late."
    }
  ],
  availability: [
    { date: "2023-09-01", available: false },
    { date: "2023-09-02", available: true },
    { date: "2023-09-03", available: true },
    { date: "2023-09-04", available: false },
    { date: "2023-09-05", available: false },
    { date: "2023-09-06", available: true }
  ]
};

const TalentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedPackage, setSelectedPackage] = useState(mockTalent.packages[0].id);
  const [currentImage, setCurrentImage] = useState(0);

  // We'd normally fetch data based on ID, but using mock data for now
  const talent = mockTalent;

  // Get the selected package details
  const packageDetails = talent.packages.find(pkg => pkg.id === selectedPackage);

  const handlePrevImage = () => {
    setCurrentImage(prev => (prev === 0 ? talent.portfolio.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage(prev => (prev === talent.portfolio.length - 1 ? 0 : prev + 1));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleBookNow = () => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "You need to choose an available date for your booking",
        variant: "destructive"
      });
      return;
    }

    // In a real app, we would validate availability here
    
    // Navigate to booking page with selected details
    navigate(`/booking?talent=${id}&package=${selectedPackage}&date=${format(selectedDate, "yyyy-MM-dd")}`);
  };

  // Function to check if a date is available for booking
  const isDateUnavailable = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    const unavailable = talent.availability.find(a => a.date === dateString && !a.available);
    return !!unavailable;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 bg-gigzam-purple-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-gigzam-purple/70 to-gigzam-purple-dark/90"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-end pb-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
              <div className="mt-8 md:mt-0 rounded-full border-4 border-white h-28 w-28 md:h-40 md:w-40 overflow-hidden shadow-lg transform -translate-y-1/4 md:-translate-y-1/3">
                <img 
                  src={talent.portfolio[0].url} 
                  alt={talent.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-white pb-2">
                <h1 className="text-3xl md:text-4xl font-bold">{talent.name}</h1>
                <div className="flex items-center mt-2">
                  <span className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{talent.rating}</span>
                    <span className="ml-1">({talent.reviews} reviews)</span>
                  </span>
                  <span className="flex items-center ml-4">
                    <MapPin className="h-4 w-4" />
                    <span className="ml-1">{talent.location}</span>
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {talent.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Tabs for Bio, Portfolio, Reviews */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                  <TabsTrigger value="portfolio" className="flex-1">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Bio</h2>
                    <p className="text-gray-700">{talent.bio}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Packages</h2>
                    <div className="space-y-6">
                      {talent.packages.map((pkg) => (
                        <div 
                          key={pkg.id} 
                          className={`border p-4 rounded-lg transition-shadow ${pkg.id === selectedPackage ? 'border-gigzam-purple shadow-md' : 'border-gray-200'}`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{pkg.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">
                                <Clock className="h-4 w-4 inline mr-1" />
                                {pkg.duration}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg text-gigzam-purple">K{pkg.price}</div>
                            </div>
                          </div>
                          <p className="mt-3 text-gray-700 text-sm">{pkg.description}</p>
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">What's included:</h4>
                            <ul className="space-y-1">
                              {pkg.includes.map((item, index) => (
                                <li key={index} className="text-sm text-gray-700 flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button 
                              variant={pkg.id === selectedPackage ? "default" : "outline"}
                              className={pkg.id === selectedPackage ? "bg-gigzam-purple hover:bg-gigzam-purple-dark" : ""}
                              onClick={() => setSelectedPackage(pkg.id)}
                            >
                              {pkg.id === selectedPackage ? "Selected" : "Select"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="portfolio" className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                    
                    {/* Main Portfolio Image/Video Viewer */}
                    <div className="relative mb-4 rounded-lg overflow-hidden h-80 bg-black">
                      {talent.portfolio[currentImage].type === "image" ? (
                        <img 
                          src={talent.portfolio[currentImage].url} 
                          alt="Portfolio" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <iframe 
                          src={talent.portfolio[currentImage].url} 
                          className="w-full h-full" 
                          title="Video portfolio"
                          allowFullScreen
                        ></iframe>
                      )}
                      
                      {/* Navigation arrows */}
                      <button 
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button 
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </div>
                    
                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2">
                      {talent.portfolio.map((item, index) => (
                        <button
                          key={index}
                          className={`h-16 rounded-md overflow-hidden border-2 ${
                            currentImage === index ? "border-gigzam-purple" : "border-transparent"
                          }`}
                          onClick={() => setCurrentImage(index)}
                        >
                          <img 
                            src={item.type === "image" ? item.url : item.thumbnail} 
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/50 rounded-full p-1">
                                <ChevronRight className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Reviews</h2>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 font-bold">{talent.rating}</span>
                        <span className="ml-1 text-gray-500">({talent.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    {/* Rating breakdown */}
                    <div className="mb-6">
                      <div className="flex items-center mb-1">
                        <span className="w-16 text-sm text-gray-600">5 stars</span>
                        <Progress value={85} className="h-2 flex-1 mx-2" />
                        <span className="w-10 text-right text-sm text-gray-600">85%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-16 text-sm text-gray-600">4 stars</span>
                        <Progress value={12} className="h-2 flex-1 mx-2" />
                        <span className="w-10 text-right text-sm text-gray-600">12%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-16 text-sm text-gray-600">3 stars</span>
                        <Progress value={3} className="h-2 flex-1 mx-2" />
                        <span className="w-10 text-right text-sm text-gray-600">3%</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="w-16 text-sm text-gray-600">2 stars</span>
                        <Progress value={0} className="h-2 flex-1 mx-2" />
                        <span className="w-10 text-right text-sm text-gray-600">0%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-16 text-sm text-gray-600">1 star</span>
                        <Progress value={0} className="h-2 flex-1 mx-2" />
                        <span className="w-10 text-right text-sm text-gray-600">0%</span>
                      </div>
                    </div>
                    
                    {/* Review list */}
                    <div className="space-y-6">
                      {talent.reviews.map((review) => (
                        <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{review.user}</h3>
                              <p className="text-gray-500 text-sm">{review.date}</p>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${
                                    i < review.rating 
                                      ? "text-yellow-400 fill-yellow-400" 
                                      : "text-gray-300"
                                  }`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-2 text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right Column: Booking Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Book {talent.name}</h2>
                
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">Selected Package</h3>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-center">
                      <span>{packageDetails?.name}</span>
                      <span className="font-bold text-gigzam-purple">K{packageDetails?.price}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {packageDetails?.duration}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Select Date</h3>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="outline" 
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-gray-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        disabled={isDateUnavailable}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                      <div className="p-3 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <Info className="h-3 w-3 mr-1" />
                          <span>Unavailable dates are disabled</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                
                <Button className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark mb-4" onClick={handleBookNow}>
                  Book Now
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TalentProfile;
