
import { Search, Calendar, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search for Talent",
    description: "Browse diverse creative professionals and filter by location, budget, and availability.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Book Your Date",
    description: "Choose your preferred date and time, then request to book or book instantly.",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "Pay securely using multiple payment options including mobile money and cards.",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Enjoy Your Event",
    description: "Connect with your booked talent and enjoy a successful, stress-free event.",
    icon: CheckCircle,
    color: "bg-orange-100 text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How GigZam Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We've simplified the booking process so you can focus on creating memorable events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative mb-6">
                <div className={`p-4 rounded-full ${step.color} w-16 h-16 flex items-center justify-center`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute top-0 right-0 bg-gigzam-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
