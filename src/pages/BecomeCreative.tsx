
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const talentCategories = [
  { id: "musician", name: "Musician" },
  { id: "dj", name: "DJ" },
  { id: "photographer", name: "Photographer" },
  { id: "makeup", name: "Makeup Artist" },
  { id: "mc", name: "MC/Host" },
  { id: "hair", name: "Hair Stylist" },
  { id: "nail", name: "Nail Technician" },
  { id: "designer", name: "Designer" },
  { id: "venue", name: "Venue" },
  { id: "decor", name: "Decor" },
  { id: "caterer", name: "Caterer" },
  { id: "sound", name: "Sound Engineer" },
  { id: "dancer", name: "Dancer" },
  { id: "car", name: "Car Hire" },
  { id: "florist", name: "Florist" },
  { id: "matron", name: "Matron" },
  { id: "baker", name: "Baker" },
];

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  category: z.string({
    required_error: "Please select a talent category",
  }),
  bio: z.string().min(50, { message: "Bio must be at least 50 characters" }),
  experience: z.string().min(3, { message: "Please specify your years of experience" }),
});

type FormValues = z.infer<typeof formSchema>;

const BecomeCreative = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      category: "",
      bio: "",
      experience: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Application submitted!",
        description: "We've received your application and will contact you soon.",
      });
      
      // In a real app, we would submit this data to an API
      console.log("Form data:", data);
      
      // Navigate to dashboard or confirmation page
      navigate("/");
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 bg-gigzam-purple-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-gigzam-purple/70 to-gigzam-purple-dark/90"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join GigZam as a Creative</h1>
              <p className="text-white/90 text-lg">
                Showcase your talents, find new clients, and grow your business with Zambia's leading booking platform.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-6">Creative Application</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Talent Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your talent category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {talentCategories.map((category) => (
                                  <SelectItem key={category.id} value={category.id}>
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input placeholder="How many years of experience do you have?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio / About You</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about yourself, your skills, and your experience..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Include information about your services, expertise, and what makes you unique.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark py-6 h-auto text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"} 
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Benefits of Joining</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Access to thousands of potential clients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Build your professional profile and portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Secure and timely payments for your services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Free marketing and promotion of your services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Business growth opportunities and networking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <h3 className="text-lg font-semibold">What Happens Next?</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  After you submit your application:
                </p>
                <ol className="space-y-3 list-decimal pl-5 text-gray-700">
                  <li>Our team will review your information</li>
                  <li>We'll contact you to verify your details</li>
                  <li>You'll get access to create your full profile</li>
                  <li>Once approved, you'll be visible to clients</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeCreative;
