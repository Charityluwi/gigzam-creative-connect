
import { ArrowRight, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-24 stripe-gradient african-pattern relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="gigzam-logo text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Showcase Your Service?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of creative professionals on Zambia's leading booking platform and grow your business.
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Build Your Reputation</h3>
                  <p className="text-white/80">Collect reviews and build trust with potential clients.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Reach More Clients</h3>
                  <p className="text-white/80">Get discovered by clients looking for your unique skills.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Secure Payments</h3>
                  <p className="text-white/80">Get paid securely and on time for every gig.</p>
                </div>
              </motion.div>
            </div>
            
            <Link to="/become-a-creative" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-white text-gigzam-purple hover:bg-white/90 text-lg py-6 px-8 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                Join as a Creative <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
            <Link to="/discover" onClick={() => window.scrollTo(0, 0)}>
              <Button className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-white py-6 h-auto text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                Find Talented Creatives
              </Button>
            </Link>
          </motion.div>
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
