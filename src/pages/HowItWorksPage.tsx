
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { ArrowRight, CheckCircle, Calendar, CreditCard, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gigzam-purple/5 to-gigzam-purple/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                How <span className="text-gigzam-purple">GigZam</span> Works
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We've simplified the process of finding and booking creative talent in Zambia. Here's how it all works.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/discover">
                  <Button className="bg-gigzam-purple hover:bg-gigzam-purple-dark text-white">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple/10">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Steps Section */}
        <HowItWorks />

        {/* For Clients Section */}
        <section className="py-20 bg-white">
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
                  Securely pay through our platform. Your payment is held safely until after the service is completed to your satisfaction.
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

        {/* For Creatives Section */}
        <section className="py-20 bg-gray-50">
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

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about using GigZam.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How do I book a creative on GigZam?",
                    answer: "Search for the type of creative you need, browse profiles, check their availability, and send a booking request with your event details. Once the creative accepts, you can confirm by making a secure payment."
                  },
                  {
                    question: "What happens if I need to cancel a booking?",
                    answer: "Our cancellation policy allows free cancellation up to 48 hours before the scheduled event. After that, cancellation fees may apply depending on how close to the event you cancel."
                  },
                  {
                    question: "How does payment work?",
                    answer: "When you book a creative, you'll make a secure payment through our platform. The funds are held safely until the service is completed. Once you confirm that the service was provided satisfactorily, the payment is released to the creative."
                  },
                  {
                    question: "How do I join GigZam as a creative?",
                    answer: "Click on 'Become a Creative' on our website, fill out the application form, upload samples of your work, and submit. Our team will review your application and notify you of approval within 48 hours."
                  },
                  {
                    question: "What fees does GigZam charge?",
                    answer: "GigZam charges a 15% service fee on each booking, which covers platform maintenance, payment processing, and customer support. This fee is already included in the prices you see on the platform."
                  },
                  {
                    question: "What happens if there's a dispute between me and a client/creative?",
                    answer: "GigZam provides a dedicated dispute resolution process. Contact our support team immediately, and we'll work with both parties to find a fair resolution based on our terms of service."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gigzam-purple text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join GigZam today and experience the easiest way to book creative talent in Zambia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-gigzam-purple hover:bg-gray-100">
                  Create an Account
                </Button>
              </Link>
              <Link to="/discover">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse Talent
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
