
import { 
  Music, 
  Mic, 
  Camera, 
  Palette, 
  Home, 
  Headphones, 
  Scissors, 
  Brush,
  ChefHat,
  HeadphonesIcon,
  Car,
  Flower,
  Users,
  Cake
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: "musician",
    name: "Musicians",
    icon: Music,
    color: "bg-blue-100 text-gigzam-purple",
  },
  {
    id: "mc",
    name: "MCs",
    icon: Mic,
    color: "bg-purple-100 text-gigzam-purple",
  },
  {
    id: "photographer",
    name: "Photographers",
    icon: Camera,
    color: "bg-green-100 text-gigzam-purple",
  },
  {
    id: "makeup",
    name: "Makeup Artists",
    icon: Brush,
    color: "bg-pink-100 text-gigzam-purple",
  },
  {
    id: "venue",
    name: "Venues",
    icon: Home,
    color: "bg-amber-100 text-gigzam-purple",
  },
  {
    id: "dj",
    name: "DJs",
    icon: Headphones,
    color: "bg-red-100 text-gigzam-purple",
  },
  {
    id: "hair",
    name: "Hair Stylists",
    icon: Scissors,
    color: "bg-teal-100 text-gigzam-purple",
  },
  {
    id: "decor",
    name: "Decor",
    icon: Palette,
    color: "bg-orange-100 text-gigzam-purple",
  },
  {
    id: "caterer",
    name: "Caterers",
    icon: ChefHat,
    color: "bg-yellow-100 text-gigzam-purple",
  },
  {
    id: "sound",
    name: "Sound Engineers",
    icon: HeadphonesIcon,
    color: "bg-indigo-100 text-gigzam-purple",
  },
  {
    id: "dancer",
    name: "Dancers",
    icon: Music, // Using Music as a stand-in for dancer
    color: "bg-purple-100 text-gigzam-purple",
  },
  {
    id: "car",
    name: "Car Hire",
    icon: Car,
    color: "bg-gray-100 text-gigzam-purple",
  },
  {
    id: "florist",
    name: "Florists",
    icon: Flower,
    color: "bg-rose-100 text-gigzam-purple",
  },
  {
    id: "matron",
    name: "Matrons",
    icon: Users,
    color: "bg-sky-100 text-gigzam-purple",
  },
  {
    id: "baker",
    name: "Bakers",
    icon: Cake,
    color: "bg-brown-100 text-gigzam-purple",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const CategorySection = () => {
  return (
    <section className="py-24 rounded-2xl my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 gigzam-logo mb-4">
          Explore Popular Service Categories
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Find the perfect creative professional for your next event
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={item}>
            <Link
              to={`/search?category=${category.id}`}
              className="stripe-card group flex flex-col items-center p-5 rounded-xl transition-all duration-300 hover:shadow-md hover:border-gigzam-purple/30 hover:scale-105"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className={`p-3 rounded-full ${category.color} group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-gray-800 group-hover:text-gigzam-purple text-sm font-medium">
                {category.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategorySection;
