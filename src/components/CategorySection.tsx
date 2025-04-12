
import { Music, Mic, Camera, Palette, Home, Headphones, Scissors, Brush } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "musician",
    name: "Musicians",
    icon: Music,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "mc",
    name: "MCs",
    icon: Mic,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "photographer",
    name: "Photographers",
    icon: Camera,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "makeup",
    name: "Makeup Artists",
    icon: Brush,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "venue",
    name: "Venues",
    icon: Home,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "dj",
    name: "DJs",
    icon: Headphones,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "hair",
    name: "Hair Stylists",
    icon: Scissors,
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: "decor",
    name: "Decor",
    icon: Palette,
    color: "bg-orange-100 text-orange-600",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Explore Popular Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the perfect creative professional for your next event
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/search?category=${category.id}`}
              className="group flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:shadow-md bg-white border border-gray-100 hover:border-gigzam-purple/20"
            >
              <div className={`p-3 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-gray-800 group-hover:text-gigzam-purple text-sm font-medium">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
