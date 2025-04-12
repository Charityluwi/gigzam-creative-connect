
import { ArrowRight, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gigzam-purple/90 to-gigzam-purple-dark/90 african-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Showcase Your Talent?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of creative professionals on Zambia's leading booking platform and grow your business.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Build Your Reputation</h3>
                  <p className="text-white/80">Collect reviews and build trust with potential clients.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Reach More Clients</h3>
                  <p className="text-white/80">Get discovered by clients looking for your unique skills.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Secure Payments</h3>
                  <p className="text-white/80">Get paid securely and on time for every gig.</p>
                </div>
              </div>
            </div>
            
            <Link to="/become-a-creative">
              <Button className="bg-white text-gigzam-purple hover:bg-white/90 text-lg py-6 px-8 h-auto rounded-xl">
                Join as a Creative <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">For Event Planners & Clients</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                Access to thousands of verified creatives
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                Compare prices and read genuine reviews
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                Book with confidence with our satisfaction guarantee
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                AI-powered recommendations for your specific needs
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                Dedicated support for your event planning journey
              </li>
            </ul>
            <Link to="/discover">
              <Button className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-white py-6 h-auto text-lg rounded-xl">
                Find Talented Creatives
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Checkmark icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CallToAction;
