
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import UserDropdown from "@/components/UserDropdown";
import { Input } from "@/components/ui/input";
import { categories } from "@/components/CategorySection";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };
  
  const handleSignOut = () => {
    signOut();
    navigate("/");
    setIsMenuOpen(false);
  };

  // Select a subset of categories for the desktop navbar dropdown
  const desktopCategories = categories.slice(0, 8);
  // For mobile, we'll show all categories

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <span className="gigzam-logo text-2xl font-bold text-gigzam-purple">
                Gig<span className="text-gigzam-purple opacity-80">Zam</span>
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gigzam-purple px-1 pt-1 text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                      Service Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {desktopCategories.map((category) => (
                          <li key={category.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/category/${category.id}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gigzam-purple/10 hover:text-gigzam-purple focus:bg-accent focus:text-accent-foreground"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                <div className="flex items-center">
                                  <div className={`p-1.5 rounded-full ${category.color} mr-2`}>
                                    <category.icon className="h-4 w-4" />
                                  </div>
                                  <div className="text-sm font-medium">{category.name}</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="md:col-span-2">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/discover"
                              className="block select-none rounded-md p-3 text-center leading-none no-underline outline-none transition-colors hover:bg-gigzam-purple/10 hover:text-gigzam-purple focus:bg-accent focus:text-accent-foreground"
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              <div className="text-sm font-medium">View All Categories</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link 
                to="/discover" 
                className={`${isActive('/discover') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Discover
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
              <Link 
                to="/how-it-works" 
                className={`${isActive('/how-it-works') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
                onClick={() => window.scrollTo(0, 0)}
              >
                How It Works
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            
            {user ? (
              <UserDropdown />
            ) : (
              <>
                <Link to="/auth" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple hover:text-white transition-colors">
                    Login
                  </Button>
                </Link>
                <Link to="/auth?tab=register" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-gigzam-purple text-white hover:bg-gigzam-purple-dark">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gigzam-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Button type="submit" className="absolute right-1 top-1 h-8 bg-gigzam-purple text-white rounded-full">
                Search
              </Button>
            </form>
            
            <div className="py-2 border-b border-gray-200">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-500">CATEGORIES</h3>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id}`} 
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md" 
                    onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                  >
                    <div className={`p-1 rounded-full ${category.color.replace('text-gigzam-purple', '')} mr-2`}>
                      <category.icon className="h-4 w-4 text-gigzam-purple" />
                    </div>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/discover" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/discover') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
              onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
            >
              Discover
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
              onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
            >
              About
            </Link>
            <Link 
              to="/how-it-works" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/how-it-works') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
              onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
              onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
            >
              Contact
            </Link>
            
            {user ? (
              <div className="mt-4 border-t pt-4">
                <Link 
                  to="/profile/me" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                  onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                >
                  Profile
                </Link>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                  onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 mt-4">
                <Link to="/auth" className="w-1/2" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
                  <Button variant="outline" className="w-full border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/auth?tab=register" className="w-1/2" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
                  <Button className="w-full bg-gigzam-purple text-white hover:bg-gigzam-purple-dark">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
