import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Sparkles, Crown } from "lucide-react";

const StarBookLoyaltyProgram = () => {
  const loyaltyTiers = [
    {
      name: "Rising Light",
      bookings: "20-30 bookings",
      icon: <Star className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
      badgeColor: "bg-blue-100 text-blue-800",
      benefits: [
        "5% discount on all bookings",
        "Priority customer support",
        "Monthly newsletter with exclusive tips"
      ]
    },
    {
      name: "Shining Talent",
      bookings: "40-50 bookings",
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-50 border-purple-200",
      badgeColor: "bg-purple-100 text-purple-800",
      benefits: [
        "10% discount on all bookings",
        "Early access to new creatives",
        "Free booking modifications",
        "Dedicated support line"
      ]
    },
    {
      name: "Creative Royalty",
      bookings: "70-80 bookings",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      color: "bg-yellow-50 border-yellow-200",
      badgeColor: "bg-yellow-100 text-yellow-800",
      benefits: [
        "15% discount on all bookings",
        "Free cancellation within 24 hours",
        "Yearly loyalty box"
      ]
    },
    {
      name: "Galaxy Elite",
      bookings: "90-100 bookings",
      icon: <Crown className="h-8 w-8 text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-200",
      badgeColor: "bg-indigo-100 text-indigo-800",
      benefits: [
        "20% discount on all bookings",
        "Exclusive access to premium creatives",
        "Yearly loyalty box",
        "Custom event planning assistance"
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          StarBook Loyalty Program
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The more you book with GigZam, the more you save! Our loyalty program rewards frequent clients with exclusive benefits and discounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loyaltyTiers.map((tier, index) => (
          <Card key={index} className={`${tier.color} border-2 hover:shadow-lg transition-shadow`}>
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-2">
                {tier.icon}
              </div>
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <Badge className={tier.badgeColor}>{tier.bookings}</Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2">
                    <span className="text-gigzam-purple mt-1 flex-shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-gigzam-purple/5 to-gigzam-purple/10 border-gigzam-purple/20">
          <CardHeader>
            <CardTitle className="text-2xl text-gigzam-purple">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="bg-gigzam-purple text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <p>Complete bookings with verified creatives on GigZam</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gigzam-purple text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <p>Your loyalty tier automatically updates based on your total completed bookings</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gigzam-purple text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <p>Enjoy increasing benefits and discounts as you reach higher tiers</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gigzam-purple text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
              <p>Benefits apply automatically to all future bookings</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StarBookLoyaltyProgram;
