
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gigzam-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4" onClick={handleScrollToTop}>
              <span className="gigzam-logo text-2xl font-bold text-white">
                Gig<span className="text-gigzam-purple opacity-80">Zam</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Zambia's premier platform connecting talented creatives with clients. We make booking seamless, secure, and satisfying for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gigzam-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gigzam-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gigzam-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gigzam-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Discover Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/become-a-creative" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Become a Creative
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/musicians" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Musicians
                </Link>
              </li>
              <li>
                <Link to="/category/photographers" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Photographers
                </Link>
              </li>
              <li>
                <Link to="/category/djs" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  DJs
                </Link>
              </li>
              <li>
                <Link to="/category/makeup" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Makeup Artists
                </Link>
              </li>
              <li>
                <Link to="/category/venues" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTop}>
                  Venues
                </Link>
              </li>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gigzam-purple" />
                <span className="text-gray-400">
                  Plot 1234, Great East Road<br />
                  Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gigzam-purple" />
                <span className="text-gray-400">+260 97 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gigzam-purple" />
                <span className="text-gray-400">info@gigzam.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} GigZam. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={handleScrollToTop}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={handleScrollToTop}>
                Terms of Service
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors" onClick={handleScrollToTop}>
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  )
}