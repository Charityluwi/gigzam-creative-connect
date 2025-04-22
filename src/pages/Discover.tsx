
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TalentCard from "@/components/TalentCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, Filter, Loader2 } from "lucide-react";
import { categories } from "@/components/CategorySection";

const mockTalents = [
  {
    id: 1,
    name: "David Mwale",
    category: "musician",
    location: "Lusaka",
    rating: 4.9,
    reviews: 56,
    price: 2500,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: true,
    verified: true,
  },
  {
    id: 2,
    name: "Chilufya Banda",
    category: "dj",
    location: "Kitwe",
    rating: 4.7,
    reviews: 32,
    price: 1800,
    image: "https://images.unsplash.com/photo-1571775323021-661594b5914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    featured: false,
    verified: true,
  },
  {
    id: 3,
    name: "Thandi Phiri",
    category: "makeup",
    location: "Lusaka",
    rating: 4.8,
    reviews: 45,
    price: 1200,
    image: "https://images.unsplash.com/photo-1560577345-44df3ed0bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    featured: false,
    verified: true,
  },
  {
    id: 4,
    name: "Kalumba Studios",
    category: "photographer",
    location: "Ndola",
    rating: 4.6,
    reviews: 28,
    price: 1500,
    image: "https://images.unsplash.com/photo-1575506010339-1e95e2121fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    featured: true,
    verified: false,
  },
  {
    id: 5,
    name: "MC Jerome",
    category: "mc",
    location: "Lusaka",
    rating: 4.9,
    reviews: 62,
    price: 2000,
    image: "https://images.unsplash.com/photo-1559638753-d8fbd8a6e2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    featured: true,
    verified: true,
  },
  {
    id: 6,
    name: "Nomsa Designs",
    category: "decor",
    location: "Livingstone",
    rating: 4.7,
    reviews: 38,
    price: 3500,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    featured: false,
    verified: true,
  },
  {
    id: 7,
    name: "Sarah Mulenga",
    category: "hair",
    location: "Lusaka",
    rating: 4.8,
    reviews: 42,
    price: 1700,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    featured: false,
    verified: true,
  },
  {
    id: 8,
    name: "Bright Events",
    category: "venue",
    location: "Kitwe",
    rating: 4.6,
    reviews: 30,
    price: 5000,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
    featured: true,
    verified: true,
  },
  {
    id: 9,
    name: "Chef Bwalya",
    category: "caterer",
    location: "Ndola",
    rating: 4.7,
    reviews: 35,
    price: 3200,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: false,
    verified: true,
  },
  {
    id: 10,
    name: "Floral Haven",
    category: "florist",
    location: "Lusaka",
    rating: 4.9,
    reviews: 50,
    price: 2800,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    featured: true,
    verified: true,
  },
];

const Discover = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  
  const categoryParam = searchParams.get("category");
  
  // Effect to set active tab based on URL parameter
  useState(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  });
  
  const filteredTalents = activeTab === "all" 
    ? mockTalents 
    : activeTab === "featured" 
      ? mockTalents.filter(talent => talent.featured)
      : activeTab === "top-rated"
        ? [...mockTalents].sort((a, b) => b.rating - a.rating).slice(0, 6)
        : activeTab === "verified"
          ? mockTalents.filter(talent => talent.verified)
          : activeTab === "new"
            ? mockTalents.slice(0, 4) // Simulating new talents
            : mockTalents.filter(talent => talent.category === activeTab);
  
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading more talents
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        <div className="bg-gigzam-purple-dark text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Discover Amazing Talent</h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Explore our vast community of creative professionals ready to make your next event unforgettable
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 md:inline-flex p-1 h-auto bg-gray-100 gap-1">
                <TabsTrigger 
                  value="all" 
                  className="py-2 px-4 data-[state=active]:bg-white"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="featured" 
                  className="py-2 px-4 data-[state=active]:bg-white"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger 
                  value="top-rated" 
                  className="py-2 px-4 data-[state=active]:bg-white"
                >
                  Top Rated
                </TabsTrigger>
                <TabsTrigger 
                  value="verified" 
                  className="py-2 px-4 data-[state=active]:bg-white hidden sm:block"
                >
                  Verified
                </TabsTrigger>
                <TabsTrigger 
                  value="new" 
                  className="py-2 px-4 data-[state=active]:bg-white hidden sm:block"
                >
                  New
                </TabsTrigger>
              </TabsList>
              
              <Button variant="outline" className="hidden md:flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            
            <div className="mb-8 overflow-x-auto pb-4">
              <div className="flex gap-2 min-w-max">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeTab === category.id ? "default" : "outline"}
                    className={`rounded-full px-4 ${activeTab === category.id ? "bg-gigzam-purple text-white" : ""}`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTalents.map(talent => {
                  // Find the category to display the proper name
                  const categoryObj = categories.find(cat => cat.id === talent.category);
                  const categoryName = categoryObj ? categoryObj.name : talent.category;
                  
                  return (
                    <TalentCard
                      key={talent.id}
                      id={talent.id.toString()}
                      name={talent.name}
                      category={categoryName}
                      location={talent.location}
                      rating={talent.rating}
                      reviews={talent.reviews}
                      price={`K${talent.price}`}
                      imageUrl={talent.image}
                      verified={talent.verified}
                      featured={talent.featured}
                    />
                  );
                })}
              </div>
              
              {filteredTalents.length === 0 && (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">No talents found</h2>
                  <p className="text-gray-600 mb-6">Try selecting a different category</p>
                </div>
              )}
              
              {filteredTalents.length > 0 && (
                <div className="text-center mt-10">
                  <Button 
                    className="bg-gigzam-purple hover:bg-gigzam-purple-dark px-8 py-2 h-auto"
                    onClick={handleLoadMore}
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Loading..." : "Load More"}
                  </Button>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
