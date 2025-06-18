import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Info, Image, Link as LinkIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import CreativeLocationField from "@/components/CreativeLocationField";

const serviceCategories = [
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
  { id: "other", name: "Other" },
];

const phoneRegex = /^(\+?260|0)?[79]\d{8}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(phoneRegex, { message: "Please enter a valid Zambian phone number (e.g., +260971234567 or 0971234567)" }),
  location: z.string().min(3, { message: "Please specify your location" }),
  category: z.string({
    required_error: "Please select a service category",
  }),
  otherCategory: z.string().optional()
    .refine(val => val === undefined || val.length >= 3 || val.length === 0, {
      message: "Other category must be at least 3 characters",
    }),
  bio: z.string().min(50, { message: "Bio must be at least 50 characters" }),
  experience: z.string().min(1, { message: "Please specify your years of experience" })
    .refine((val) => !isNaN(Number(val)) || val.match(/^\d+(\.\d+)?\+?$/), {
      message: "Experience must be a number (e.g., 2 or 2.5 or 5+)",
    }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  instagram: z.string().optional()
    .refine((val) => !val || !val.includes('@'), {
      message: "Do not include the @ symbol",
    }),
  facebook: z.string().optional(),
  tiktok: z.string().optional()
    .refine((val) => !val || !val.includes('@'), {
      message: "Do not include the @ symbol",
    }),
  youtube: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the Terms and Conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BecomeCreative = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [portfolioImages, setPortfolioImages] = useState<File[]>([]);
  const [portfolioImagePreviews, setPortfolioImagePreviews] = useState<string[]>([]);
  const [showOtherCategory, setShowOtherCategory] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      category: "",
      otherCategory: "",
      bio: "",
      experience: "",
      website: "",
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
      termsAccepted: false,
    },
  });

  const handleCategoryChange = (value: string) => {
    form.setValue("category", value);
    setShowOtherCategory(value === "other");
    
    if (value !== "other") {
      form.setValue("otherCategory", "");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const newFiles = Array.from(e.target.files);
    
    // Validate file sizes (5MB max)
    const invalidFiles = newFiles.filter(file => file.size > 5 * 1024 * 1024);
    if (invalidFiles.length > 0) {
      toast({
        title: "File size too large",
        description: "Some images exceed the 5MB limit and were not added.",
        variant: "destructive",
      });
    }
    
    const validFiles = newFiles.filter(file => file.size <= 5 * 1024 * 1024);
    
    // Limit to a maximum of 5 images
    const combinedFiles = [...portfolioImages, ...validFiles].slice(0, 5);
    setPortfolioImages(combinedFiles);
    
    // Create preview URLs for the images
    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    const combinedPreviews = [...portfolioImagePreviews, ...newPreviews].slice(0, 5);
    setPortfolioImagePreviews(combinedPreviews);
  };
  
  const removeImage = (index: number) => {
    const updatedImages = [...portfolioImages];
    updatedImages.splice(index, 1);
    setPortfolioImages(updatedImages);
    
    const updatedPreviews = [...portfolioImagePreviews];
    URL.revokeObjectURL(updatedPreviews[index]); // Clean up URL object
    updatedPreviews.splice(index, 1);
    setPortfolioImagePreviews(updatedPreviews);
  };

  function onSubmit(data: FormValues) {
    if (portfolioImages.length === 0) {
      toast({
        title: "Portfolio images required",
        description: "Please upload at least one portfolio image to showcase your work.",
        variant: "destructive",
      });
      return;
    }
    
    if (data.category === "other" && (!data.otherCategory || data.otherCategory.trim().length < 3)) {
      form.setError("otherCategory", { message: "Please specify your service category" });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real implementation, we would upload the files here
    // along with the form data to an API endpoint
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Application submitted!",
        description: "We've received your application and will contact you soon.",
      });
      
      console.log("Form data:", data);
      console.log("Portfolio images:", portfolioImages);
      
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
                              <Input placeholder="e.g., +260971234567" {...field} />
                            </FormControl>
                            <FormDescription>
                              Zambian phone number (e.g., +260971234567 or 0971234567)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <CreativeLocationField
                                value={field.value}
                                onChange={field.onChange}
                                error={form.formState.errors.location?.message}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Category</FormLabel>
                            <Select onValueChange={handleCategoryChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your service category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceCategories.map((category) => (
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
                      
                      {showOtherCategory && (
                        <FormField
                          control={form.control}
                          name="otherCategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Specify Your Service Category</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your specific service category" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2, 3.5, or 5+" {...field} />
                          </FormControl>
                          <FormDescription>
                            Enter your years of experience as a number (e.g., 2, 3.5, or 5+)
                          </FormDescription>
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
                            Include information about your services, expertise, and what makes you unique. Minimum 50 characters.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Portfolio Images Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Portfolio Images</h3>
                      </div>
                      <div className="p-4 border border-dashed rounded-md bg-muted/50">
                        <div className="flex flex-wrap gap-4 mb-4">
                          {portfolioImagePreviews.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={preview} 
                                alt={`Portfolio image ${index + 1}`}
                                className="w-24 h-24 object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                          
                          {portfolioImages.length < 5 && (
                            <label className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-muted-foreground/50 rounded-md cursor-pointer hover:bg-muted transition-colors">
                              <Image className="h-6 w-6 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground mt-2">Add Image</span>
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleFileChange}
                                multiple={portfolioImages.length === 0}
                              />
                            </label>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Upload at least one image (up to 5) of your previous work. Max 5MB per image.
                        </p>
                      </div>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Online Presence</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website/Portfolio URL</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="https://yourwebsite.com" 
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="instagram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Instagram</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                    @
                                  </span>
                                  <Input 
                                    placeholder="username" 
                                    className="rounded-l-none"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormDescription>
                                Enter your username without the @ symbol
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="facebook"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Facebook</FormLabel>
                              <FormControl>
                                <Input placeholder="Username or page name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="tiktok"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>TikTok</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                                    @
                                  </span>
                                  <Input 
                                    placeholder="username" 
                                    className="rounded-l-none"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormDescription>
                                Enter your username without the @ symbol
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="youtube"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>YouTube</FormLabel>
                              <FormControl>
                                <Input placeholder="Channel name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I accept the <Link to="/terms-of-service" className="text-gigzam-purple hover:underline" target="_blank">Terms and Conditions</Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
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
