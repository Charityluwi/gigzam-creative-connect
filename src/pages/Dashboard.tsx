
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, MessageSquare, Star, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

// Mock bookings data
const mockBookings = [
  {
    id: "B12345",
    talentId: "1",
    talentName: "David Mwale",
    talentImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Musician",
    package: "Standard Performance",
    date: "2023-10-15",
    time: "18:00 - 21:00",
    location: "Levy Junction Mall, Lusaka",
    status: "upcoming",
    price: 4500,
  },
  {
    id: "B12346",
    talentId: "3",
    talentName: "Thandi Phiri",
    talentImage: "https://images.unsplash.com/photo-1560577345-44df3ed0bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Makeup Artist",
    package: "Bridal Package",
    date: "2023-10-02",
    time: "12:00 - 16:00",
    location: "Radisson Blu Hotel, Lusaka",
    status: "upcoming",
    price: 1200,
  },
  {
    id: "B12347",
    talentId: "5",
    talentName: "MC Jerome",
    talentImage: "https://images.unsplash.com/photo-1559638753-d8fbd8a6e2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "MC/Host",
    package: "Corporate Events",
    date: "2023-08-28",
    time: "13:00 - 17:00",
    location: "Mulungushi Conference Centre, Lusaka",
    status: "completed",
    price: 2000,
    rating: 5,
  },
];

// Mock saved talents
const mockSavedTalents = [
  {
    id: "2",
    name: "Chilufya Banda",
    category: "DJ",
    location: "Kitwe",
    image: "https://images.unsplash.com/photo-1571775323021-661594b5914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.7,
    price: 1800,
  },
  {
    id: "4",
    name: "Kalumba Studios",
    category: "Photographer",
    location: "Ndola",
    image: "https://images.unsplash.com/photo-1575506010339-1e95e2121fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.6,
    price: 1500,
  },
  {
    id: "6",
    name: "Nomsa Designs",
    category: "Decor",
    location: "Livingstone",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    rating: 4.7,
    price: 3500,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [ratingDialog, setRatingDialog] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  
  const handleRateBooking = (bookingId: string) => {
    // In a real app, this would submit the rating to an API
    toast({
      title: "Rating submitted",
      description: `You rated this booking ${rating} stars`,
    });
    
    setRatingDialog(null);
    setRating(0);
  };
  
  const cancelBooking = (bookingId: string) => {
    // In a real app, this would submit a cancellation request
    toast({
      title: "Booking cancelled",
      description: "Your booking has been cancelled",
    });
  };
  
  const removeSavedTalent = (talentId: string) => {
    // In a real app, this would remove the talent from saved list
    toast({
      title: "Talent removed",
      description: "The talent has been removed from your saved list",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        <div className="bg-gigzam-purple-dark text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
            <p className="text-white/80">Manage your bookings and saved talents</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="bookings">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="bookings" className="flex-1">My Bookings</TabsTrigger>
              <TabsTrigger value="saved" className="flex-1">Saved Talents</TabsTrigger>
              <TabsTrigger value="profile" className="flex-1">My Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
                {mockBookings.filter(b => b.status === "upcoming").length > 0 ? (
                  <div className="space-y-4">
                    {mockBookings
                      .filter(booking => booking.status === "upcoming")
                      .map(booking => (
                        <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                          <div className="md:flex">
                            <div className="md:w-1/4 h-40 md:h-auto">
                              <img 
                                src={booking.talentImage} 
                                alt={booking.talentName} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6 md:flex-1">
                              <div className="flex flex-wrap justify-between items-start">
                                <div>
                                  <h3 className="font-semibold text-lg">{booking.talentName}</h3>
                                  <p className="text-gray-500">{booking.category}</p>
                                </div>
                                <div>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Upcoming
                                  </span>
                                </div>
                              </div>
                              
                              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{format(new Date(booking.date), "PPP")}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{booking.location}</span>
                                </div>
                                <div className="font-medium text-gigzam-purple">
                                  K{booking.price}
                                </div>
                              </div>
                              
                              <div className="mt-4 flex flex-wrap gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => navigate(`/talent/${booking.talentId}`)}
                                >
                                  View Talent
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => {
                                    // In a real app, this would navigate to the messaging interface
                                    toast({
                                      title: "Message feature",
                                      description: "Messaging functionality would open here",
                                    });
                                  }}
                                >
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Message
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent>
                                    <DropdownMenuItem 
                                      onClick={() => {
                                        // In a real app, this would navigate to the modify booking page
                                        toast({
                                          title: "Modify booking",
                                          description: "Booking modification interface would open here",
                                        });
                                      }}
                                    >
                                      Modify Booking
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="text-red-600"
                                      onClick={() => cancelBooking(booking.id)}
                                    >
                                      Cancel Booking
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming bookings</h3>
                    <p className="text-gray-600 mb-4">You don't have any upcoming bookings at the moment.</p>
                    <Button 
                      className="bg-gigzam-purple hover:bg-gigzam-purple-dark"
                      onClick={() => navigate("/")}
                    >
                      Find Talents
                    </Button>
                  </div>
                )}
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Past Bookings</h2>
                {mockBookings.filter(b => b.status === "completed").length > 0 ? (
                  <div className="space-y-4">
                    {mockBookings
                      .filter(booking => booking.status === "completed")
                      .map(booking => (
                        <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                          <div className="md:flex">
                            <div className="md:w-1/4 h-40 md:h-auto">
                              <img 
                                src={booking.talentImage} 
                                alt={booking.talentName} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6 md:flex-1">
                              <div className="flex flex-wrap justify-between items-start">
                                <div>
                                  <h3 className="font-semibold text-lg">{booking.talentName}</h3>
                                  <p className="text-gray-500">{booking.category}</p>
                                </div>
                                <div>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </div>
                              </div>
                              
                              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{format(new Date(booking.date), "PPP")}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                                  <span>{booking.location}</span>
                                </div>
                                <div className="font-medium text-gigzam-purple">
                                  K{booking.price}
                                </div>
                              </div>
                              
                              <div className="mt-4 flex flex-wrap gap-2">
                                {booking.rating ? (
                                  <div className="flex items-center text-sm">
                                    <span className="text-gray-600 mr-2">Your rating:</span>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          className={`h-4 w-4 ${
                                            i < booking.rating
                                              ? "text-yellow-400 fill-yellow-400" 
                                              : "text-gray-300"
                                          }`} 
                                        />
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setRatingDialog(booking.id)}
                                  >
                                    <Star className="h-4 w-4 mr-2" />
                                    Rate Booking
                                  </Button>
                                )}
                                
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => navigate(`/talent/${booking.talentId}`)}
                                >
                                  View Talent
                                </Button>
                                
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => {
                                    // In a real app, this would book the talent again
                                    navigate(`/talent/${booking.talentId}`);
                                  }}
                                >
                                  Book Again
                                </Button>
                              </div>
                              
                              {/* Rating Dialog */}
                              {ratingDialog === booking.id && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                  <h4 className="font-medium mb-2">Rate your experience with {booking.talentName}</h4>
                                  <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <button 
                                        key={star} 
                                        className="text-2xl focus:outline-none"
                                        onClick={() => setRating(star)}
                                      >
                                        <Star 
                                          className={`h-8 w-8 ${
                                            star <= rating 
                                              ? "text-yellow-400 fill-yellow-400" 
                                              : "text-gray-300"
                                          }`} 
                                        />
                                      </button>
                                    ))}
                                  </div>
                                  <div className="flex gap-2">
                                    <Button 
                                      variant="outline" 
                                      onClick={() => {
                                        setRatingDialog(null);
                                        setRating(0);
                                      }}
                                    >
                                      Cancel
                                    </Button>
                                    <Button 
                                      className="bg-gigzam-purple hover:bg-gigzam-purple-dark"
                                      onClick={() => handleRateBooking(booking.id)}
                                      disabled={rating === 0}
                                    >
                                      Submit Rating
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No past bookings</h3>
                    <p className="text-gray-600">Your booking history will appear here once you've completed bookings.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="saved">
              <h2 className="text-xl font-semibold mb-6">Saved Talents</h2>
              {mockSavedTalents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockSavedTalents.map(talent => (
                    <div key={talent.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={talent.image} 
                          alt={talent.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{talent.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm">{talent.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm">{talent.category} • {talent.location}</p>
                        <p className="text-gigzam-purple font-medium mt-1">From K{talent.price}</p>
                        
                        <div className="mt-4 flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1"
                            onClick={() => navigate(`/talent/${talent.id}`)}
                          >
                            View Profile
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeSavedTalent(talent.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No saved talents</h3>
                  <p className="text-gray-600 mb-4">You haven't saved any talents yet. Browse talents and click the heart icon to save them.</p>
                  <Button 
                    className="bg-gigzam-purple hover:bg-gigzam-purple-dark"
                    onClick={() => navigate("/")}
                  >
                    Find Talents
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">My Profile</h2>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="mb-6 flex items-center">
                    <div className="h-20 w-20 rounded-full bg-gigzam-purple/10 flex items-center justify-center text-gigzam-purple font-bold text-2xl mr-4">
                      JD
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">John Doe</h3>
                      <p className="text-gray-500">john.doe@example.com</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        value="John Doe"
                        className="w-full"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        value="john.doe@example.com"
                        className="w-full"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        value="+260 97 1234567"
                        className="w-full"
                        disabled
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-gigzam-purple hover:bg-gigzam-purple-dark">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// For simplicity, creating the Input component here
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default Dashboard;
