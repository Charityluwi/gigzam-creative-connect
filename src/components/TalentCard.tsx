
import { useState } from "react";
import { Star, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TalentCardProps {
  id?: string;
  name: string;
  category?: string;
  profession?: string;
  imageUrl?: string;
  image?: string;
  rating: number;
  totalReviews?: number;
  reviews?: number;
  location: string;
  startingPrice?: number;
  price?: string;
  verified?: boolean;
  featured?: boolean;
}

const TalentCard = ({
  id = "1",
  name,
  profession,
  category,
  image,
  imageUrl,
  rating,
  totalReviews = 0,
  reviews = 0,
  location,
  startingPrice = 0,
  price,
  verified = false,
  featured = false,
}: TalentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const displayImage = imageUrl || image;
  const displayReviews = totalReviews || reviews;
  const numericPrice = startingPrice || (price ? parseInt(price.replace(/\D/g, '')) : 0);

  return (
    <Link to={`/talent/${id}`}>
      <div 
        className={cn(
          "relative group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white",
          featured ? "glow-purple border border-gigzam-purple/20" : "border border-gray-100"
        )}
      >
        {featured && (
          <div className="absolute top-3 left-3 z-20 bg-gigzam-purple text-white text-xs font-medium py-1 px-2 rounded-full">
            Featured
          </div>
        )}
        <div className="relative overflow-hidden h-48">
          <img
            src={displayImage}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <Heart
              fill={isFavorite ? "#9b87f5" : "none"}
              className={isFavorite ? "h-5 w-5 text-gigzam-purple" : "h-5 w-5 text-gray-600"}
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gigzam-purple transition-colors">
                {name}
                {verified && (
                  <span className="inline-block ml-1 text-gigzam-purple">✓</span>
                )}
              </h3>
              <p className="text-sm text-gray-600">{profession || category}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" fill="#F59E0B" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              <span className="text-xs text-gray-500 ml-1">({displayReviews})</span>
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-500">Starting from</span>
              <p className="text-gigzam-purple font-bold">
                {price || `K${numericPrice.toLocaleString()}`}
              </p>
            </div>
            <button className="text-sm font-medium text-gigzam-purple hover:text-gigzam-purple-dark">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TalentCard;
