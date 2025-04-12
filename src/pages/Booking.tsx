
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";

// Mock talent data
const mockTalent = {
  id: "1",
  name: "David Mwale",
  category: "Musician",
  location: "Lusaka",
  rating: 4.9,
  reviews: 56,
  price: 2500,
  packages: [
    {
      id: "basic",
      name: "Basic Performance",
      price: 2500,
      duration: "2 hours",
      description: "Solo performance with acoustic guitar. Perfect for intimate gatherings and small events.",
      includes: ["2-hour live performance", "Basic sound setup", "20 song selection"]
    },
    {
      id: "standard",
      name: "Standard Performance",
      price: 4500,
      duration: "3 hours",
      description: "Performance with a small band (3 musicians). Great for medium-sized events and parties.",
      includes: ["3-hour live performance", "Full sound setup", "30 song selection", "1 special request song"]
    },
    {
      id: "premium",
      name: "Premium Experience",
      price: 7500,
      duration: "4 hours",
      description: "Full band performance with backup singers. Ideal for large events, weddings, and corporate functions.",
      includes: ["4-hour live performance", "Premium sound setup", "40 song selection", "3 special request songs", "MC services"]
    }
  ],
  image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
};

const paymentMethods = [
  { id: "airtel", name: "Airtel Money", icon: "📱" },
  { id: "mtn", name: "MTN Mobile Money", icon: "📱" },
  { id: "visa", name: "Visa/Mastercard", icon: "💳" },
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const talentId = searchParams.get("talent") || "1";
  const packageId = searchParams.get("package") || "basic";
  const dateStr = searchParams.get("date");
  const date = dateStr ? new Date(dateStr) : new Date();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  
  // Form states
  const [eventDetails, setEventDetails] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    additionalNotes: "",
    paymentMethod: "",
  });
  
  // Talent and package data
  const talent = mockTalent; // In a real app, this would be fetched
  const selectedPackage = talent.packages.find(pkg => pkg.id === packageId) || talent.packages[0];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };
  
  const handlePaymentMethodSelect = (method: string) => {
    setEventDetails({
      ...eventDetails,
      paymentMethod: method,
    });
  };
  
  const nextStep = () => {
    // Validate current step
    if (currentStep === 1) {
      if (!eventDetails.name || !eventDetails.email || !eventDetails.phone) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
    } else if (currentStep === 2) {
      if (!eventDetails.paymentMethod) {
        toast({
          title: "Select payment method",
          description: "Please select a payment method to continue",
          variant: "destructive",
        });
        return;
      }
    }
    
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const completeBooking = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setBookingComplete(true);
      
      toast({
        title: "Booking successful!",
        description: "Your booking has been confirmed",
      });
    }, 2000);
  };
  
  // Calculate progress percentage
  const progress = (currentStep / 3) * 100;
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Progress bar */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <div className={`${currentStep >= 1 ? "text-gigzam-purple font-medium" : ""}`}>
                Event Details
              </div>
              <div className={`${currentStep >= 2 ? "text-gigzam-purple font-medium" : ""}`}>
                Payment
              </div>
              <div className={`${currentStep >= 3 ? "text-gigzam-purple font-medium" : ""}`}>
                Confirmation
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <Link to={`/talent/${talentId}`} className="inline-flex items-center text-gigzam-purple mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to talent profile
            </Link>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold mb-6">Book {talent.name}</h1>
              
              {/* Booking Summary (visible on all steps) */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="font-semibold mb-2">Booking Summary</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Talent:</div>
                  <div>{talent.name}</div>
                  <div className="text-gray-600">Package:</div>
                  <div>{selectedPackage.name}</div>
                  <div className="text-gray-600">Date:</div>
                  <div>{format(date, "PPP")}</div>
                  <div className="text-gray-600">Price:</div>
                  <div className="font-semibold">K{selectedPackage.price}</div>
                </div>
              </div>
              
              {/* Step 1: Event Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={eventDetails.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={eventDetails.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={eventDetails.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-1">
                      Venue Address
                    </label>
                    <Input
                      id="venue"
                      name="venue"
                      value={eventDetails.venue}
                      onChange={handleInputChange}
                      placeholder="Where will this event take place?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={eventDetails.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any special requests or information the talent should know?"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-24"
                    />
                  </div>
                </div>
              )}
              
              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <p className="text-gray-600 mb-6">
                    Choose your preferred payment method to secure your booking.
                  </p>
                  
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`border rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
                          eventDetails.paymentMethod === method.id
                            ? "border-gigzam-purple bg-gigzam-purple/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handlePaymentMethodSelect(method.id)}
                      >
                        <div className="text-2xl mr-3">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-medium">{method.name}</h3>
                        </div>
                        {eventDetails.paymentMethod === method.id && (
                          <Check className="h-5 w-5 text-gigzam-purple" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg mt-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is a demo application. No actual payments will be processed.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Step 3: Confirmation */}
              {currentStep === 3 && !bookingComplete && (
                <div className="text-center py-6">
                  <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>
                  <p className="text-gray-600 mb-8">
                    Please review your booking details before confirming. By proceeding, you agree to our terms and conditions.
                  </p>
                  
                  <Button
                    className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark text-lg py-6"
                    onClick={completeBooking}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              )}
              
              {/* Booking Complete */}
              {bookingComplete && (
                <div className="text-center py-6">
                  <div className="bg-green-50 p-8 rounded-lg mb-6">
                    <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                    <p className="text-gray-600">
                      Your booking with {talent.name} for {format(date, "PPPP")} has been confirmed.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-left mb-6">
                    <h3 className="font-semibold mb-3">Booking Details</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-gray-600">Booking ID:</div>
                      <div>BK{Math.floor(100000 + Math.random() * 900000)}</div>
                      <div className="text-gray-600">Talent:</div>
                      <div>{talent.name}</div>
                      <div className="text-gray-600">Package:</div>
                      <div>{selectedPackage.name}</div>
                      <div className="text-gray-600">Date:</div>
                      <div>{format(date, "PPP")}</div>
                      <div className="text-gray-600">Amount Paid:</div>
                      <div className="font-semibold">K{selectedPackage.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    We've sent a confirmation email to {eventDetails.email} with all the details.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate("/")}
                    >
                      Return Home
                    </Button>
                    <Button
                      className="flex-1 bg-gigzam-purple hover:bg-gigzam-purple-dark"
                      onClick={() => navigate("/dashboard")}
                    >
                      View My Bookings
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              {!bookingComplete && (
                <div className="mt-8 flex justify-between">
                  {currentStep > 1 ? (
                    <Button variant="outline" onClick={prevStep}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 3 && (
                    <Button onClick={nextStep}>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
