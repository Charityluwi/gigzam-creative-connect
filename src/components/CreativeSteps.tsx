
import React from "react";
import { Users, Calendar, CreditCard, CheckCircle } from "lucide-react";

const CreativeSteps = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">For Creatives</h2>
          <p className="text-lg text-gray-600">
            Discover how GigZam helps you showcase your talents and find new clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Create Your Profile</h3>
            <p className="text-gray-600 mb-4">
              Build a professional profile that showcases your talents, experience, and portfolio to potential clients.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Custom portfolio showcase</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Highlight your skills and experience</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Set your rates and availability</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Receive Bookings</h3>
            <p className="text-gray-600 mb-4">
              Get booking requests from clients and manage your schedule easily through our platform.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Instant booking notifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Calendar management tools</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Negotiate terms with clients</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Get Paid</h3>
            <p className="text-gray-600 mb-4">
              Receive secure payments directly to your account after completing your gigs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Fast payment processing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Multiple payout options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-gigzam-purple mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Clear payment history</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSteps;
