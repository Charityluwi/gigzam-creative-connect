
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TalentCard from "./TalentCard";
import { Button } from "@/components/ui/button";

// Sample data for featured talents
const featuredTalents = [
  {
    id: "talent1",
    name: "David Banda",
    profession: "Singer/Musician",
    image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.9,
    totalReviews: 124,
    location: "Lusaka, Zambia",
    startingPrice: 2000,
    verified: true,
    featured: true,
  },
  {
    id: "talent2",
    name: "Esther Mwanza",
    profession: "Makeup Artist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4.8,
    totalReviews: 86,
    location: "Kitwe, Zambia",
    startingPrice: 1500,
    verified: true,
    featured: false,
  },
  {
    id: "talent3",
    name: "John Mulenga",
    profession: "DJ",
    image: "https://images.unsplash.com/photo-1575672913325-f60af26b3bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    rating: 4.7,
    totalReviews: 102,
    location: "Ndola, Zambia",
    startingPrice: 1800,
    verified: true,
    featured: true,
  },
  {
    id: "talent4",
    name: "Grace Tembo",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4.6,
    totalReviews: 75,
    location: "Livingstone, Zambia",
    startingPrice: 2200,
    verified: false,
    featured: false,
  },
];

const FeaturedTalents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Talents
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Discover our handpicked selection of top-rated professionals
            </p>
          </div>
          <Link to="/discover">
            <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple hover:text-white">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTalents.map((talent) => (
            <TalentCard key={talent.id} {...talent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalents;
