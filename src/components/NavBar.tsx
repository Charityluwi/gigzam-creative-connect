
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import UserDropdown from "@/components/UserDropdown";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gigzam-purple">
                Gig<span className="text-gigzam-orange">Zam</span>
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <div className="relative group">
                <button className="inline-flex items-center text-gray-700 hover:text-gigzam-purple px-1 pt-1 text-sm font-medium">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 bg-white rounded-md shadow-lg p-2">
                  <Link to="/category/musicians" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
                    Musicians
                  </Link>
                  <Link to="/category/djs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
                    DJs
                  </Link>
                  <Link to="/category/photographers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
                    Photographers
                  </Link>
                  <Link to="/category/makeup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
                    Makeup Artists
                  </Link>
                  <Link to="/category/venues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
                    Venues
                  </Link>
                </div>
              </div>
              <Link 
                to="/discover" 
                className={`${isActive('/discover') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
              >
                Discover
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
              >
                About
              </Link>
              <Link 
                to="/how-it-works" 
                className={`${isActive('/how-it-works') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
              >
                How It Works
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-gigzam-purple border-b-2 border-gigzam-purple' : 'text-gray-700 hover:text-gigzam-purple'} px-1 pt-1 text-sm font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search talents..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent w-64"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            {user ? (
              <UserDropdown />
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple hover:text-white transition-colors">
                    Login
                  </Button>
                </Link>
                <Link to="/auth">
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
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search talents..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gigzam-purple focus:border-transparent w-full"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Link to="/category/musicians" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
              Musicians
            </Link>
            <Link to="/category/djs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
              DJs
            </Link>
            <Link to="/category/photographers" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md">
              Photographers
            </Link>
            <Link 
              to="/discover" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/discover') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
            >
              Discover
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
            >
              About
            </Link>
            <Link 
              to="/how-it-works" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/how-it-works') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-gigzam-purple bg-gigzam-purple/10' : 'text-gray-700 hover:bg-gigzam-purple/10'} rounded-md`}
            >
              Contact
            </Link>
            
            {user ? (
              <div className="mt-4 border-t pt-4">
                <Link 
                  to="/profile/me" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                >
                  Profile
                </Link>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    const { signOut } = useAuth();
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gigzam-purple/10 rounded-md"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 mt-4">
                <Link to="/auth" className="w-1/2">
                  <Button variant="outline" className="w-full border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/auth" className="w-1/2">
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
