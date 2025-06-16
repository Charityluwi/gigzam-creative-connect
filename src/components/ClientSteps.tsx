
import React from "react";
import { Search, Calendar, CreditCard, CheckCircle } from "lucide-react";

const ClientSteps = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">For Clients</h2>
          <p className="text-lg text-gray-600">
            Discover how GigZam helps you find the perfect talent for your event or project.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Search & Browse</h3>
            <p className="text-gray-600 mb-4">
              Use our powerful search tools to find exactly the type of talent you need. Filter by category, location, price range, and more.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Verified profiles with ratings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Browse portfolios and samples</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Compare talent side by side</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Book & Schedule</h3>
            <p className="text-gray-600 mb-4">
              Once you've found the perfect talent, booking is simple. Check availability, select your date, and make your request.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Real-time availability calendar</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Clear pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Direct communication with talent</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Pay & Enjoy</h3>
            <p className="text-gray-600 mb-4">
              When you book a creative, you'll make a secure payment through our platform. The funds are held safely until the service is completed.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Secure payment processing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Money-back guarantee</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Rate and review after service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSteps;
