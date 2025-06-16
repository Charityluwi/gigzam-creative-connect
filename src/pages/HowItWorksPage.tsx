import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { ArrowRight, CheckCircle, Calendar, CreditCard, Search, Users, Star, Sparkles, Crown, Zap } from "lucide-react";
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
                <Link to="/auth?tab=register">
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

        {/* StarBook Loyalty Program Section */}
        <section className="py-20 bg-gradient-to-br from-gigzam-purple/5 via-purple-50 to-gigzam-purple/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gigzam-purple to-purple-600 rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                StarBook Loyalty Program
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Welcome to the StarBook Loyalty Program, our way of saying <em>thank you</em> for supporting top creative talent.
              </p>
              <p className="text-lg text-gray-600 mb-12">
                As you book more creatives, you'll rise through 5 exciting tiers:
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6 mb-12">
                {/* Rookie Star */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">⭐</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rookie Star</h3>
                    <p className="text-sm text-gray-600">1–5 bookings</p>
                  </div>
                </div>

                {/* Rising Light */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌠</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rising Light</h3>
                    <p className="text-sm text-gray-600">5–10 bookings</p>
                  </div>
                </div>

                {/* Shining Talent */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">✨</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shining Talent</h3>
                    <p className="text-sm text-gray-600">10–20 bookings</p>
                  </div>
                </div>

                {/* Creative Royalty */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌟</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Creative Royalty</h3>
                    <p className="text-sm text-gray-600">20–30 bookings</p>
                  </div>
                </div>

                {/* Galaxy Elite */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌌</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Galaxy Elite</h3>
                    <p className="text-sm text-gray-600">31+ bookings</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Each tier comes with amazing perks
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Exclusive Discounts</h4>
                    <p className="text-gray-600 text-sm">Save more on every booking</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Early Access</h4>
                    <p className="text-gray-600 text-sm">Book in-demand creatives first</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Surprise Rewards</h4>
                    <p className="text-gray-600 text-sm">Unexpected bonuses and gifts</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">VIP Support</h4>
                    <p className="text-gray-600 text-sm">Priority customer service</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <p className="text-lg text-gray-700 mb-6">
                  👉 Start booking now to climb the ranks and unlock your next reward!
                </p>
                <Link to="/discover">
                  <Button className="bg-gigzam-purple hover:bg-gigzam-purple-dark text-white px-8 py-3 text-lg">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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
                    question: "What happens if a creative does not show up?",
                    answer: "Please contact our support team immediately so we can investigate and assist you in real-time. Depending on the circumstances, you may be eligible for a full refund or a replacement creative, if one is available and acceptable to you. We take no-shows seriously, and any creative who fails to honor a confirmed booking without a valid reason may face suspension or removal from our platform."
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
              <Link to="/auth?tab=register">
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
