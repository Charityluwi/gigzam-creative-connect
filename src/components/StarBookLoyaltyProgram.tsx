
import React, { useState } from "react";
import { ArrowRight, CheckCircle, Star, Sparkles, Crown, Zap, Gift, Clock, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StarBookLoyaltyProgram = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    {
      id: "rookie",
      emoji: "⭐",
      name: "Rookie Star",
      bookings: "1–5 bookings",
      benefits: ["Welcome badge", "Access to basic support"],
      icon: Star,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: "rising",
      emoji: "🌠",
      name: "Rising Light",
      bookings: "5–10 bookings",
      benefits: ["5% discount on all bookings", "Early access to select creatives", "Priority email support"],
      icon: Sparkles,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "shining",
      emoji: "✨",
      name: "Shining Talent",
      bookings: "10–20 bookings",
      benefits: ["10% discount on all bookings", "Extended booking window", "Monthly newsletter with exclusive tips"],
      icon: Sparkles,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "royalty",
      emoji: "🌟",
      name: "Creative Royalty",
      bookings: "20–30 bookings",
      benefits: ["15% discount on all bookings", "VIP support with dedicated line", "Exclusive access to premium creatives", "Free booking modifications"],
      icon: Crown,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "galaxy",
      emoji: "🌌",
      name: "Galaxy Elite",
      bookings: "31+ bookings",
      benefits: ["20% discount on all bookings", "Priority booking (book before others)", "Quarterly loyalty box with exclusive gifts", "Personal account manager", "Free cancellation up to 24 hours"],
      icon: Crown,
      color: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <div className="space-y-12">
      {/* StarBook Loyalty Program Section */}
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
          As you book more creatives, you'll rise through 5 exciting tiers. Click on each tier to see the benefits:
        </p>
      </div>

      {/* Interactive Tiers */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {tiers.map((tier) => (
            <Card 
              key={tier.id}
              className={`cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                selectedTier === tier.id ? 'ring-2 ring-gigzam-purple shadow-lg' : ''
              }`}
              onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{tier.emoji}</div>
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <CardDescription className="text-sm">{tier.bookings}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Benefits Display */}
        {selectedTier && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            {(() => {
              const tier = tiers.find(t => t.id === selectedTier);
              if (!tier) return null;
              
              return (
                <div className="text-center">
                  <div className="text-5xl mb-4">{tier.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.bookings}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tier.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                        <CheckCircle className="h-5 w-5 text-gigzam-purple mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-center">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* General Benefits Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All tiers come with amazing perks
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
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Early Access</h4>
              <p className="text-gray-600 text-sm">Book in-demand creatives first</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Surprise Rewards</h4>
              <p className="text-gray-600 text-sm">Unexpected bonuses and gifts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">VIP Support</h4>
              <p className="text-gray-600 text-sm">Priority customer service</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
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
  );
};

export default StarBookLoyaltyProgram;
