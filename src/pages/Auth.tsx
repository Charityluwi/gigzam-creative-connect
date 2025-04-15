
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Check, X } from "lucide-react";

// Password validation
const passwordStrengthSchema = {
  length: (value: string) => value.length >= 8,
  uppercase: (value: string) => /[A-Z]/.test(value),
  lowercase: (value: string) => /[a-z]/.test(value),
  number: (value: string) => /[0-9]/.test(value),
  special: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
};

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .refine((value) => /[A-Z]/.test(value), "Password must contain at least 1 uppercase letter")
    .refine((value) => /[a-z]/.test(value), "Password must contain at least 1 lowercase letter")
    .refine((value) => /[0-9]/.test(value), "Password must contain at least 1 number")
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), "Password must contain at least 1 special character"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  confirmPassword: z.string()
});

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Get the tab parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const tabParam = queryParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam === 'register' ? 'register' : 'login');
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  
  // Register form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerFullName, setRegisterFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerErrors, setRegisterErrors] = useState<Record<string, string>>({});
  
  // Password strength state
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  // Update URL when tab changes
  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    if (activeTab === 'login') {
      newParams.delete('tab');
    } else {
      newParams.set('tab', activeTab);
    }
    
    const newSearch = newParams.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    
    if (location.search !== `?${newSearch}`) {
      navigate(newPath, { replace: true });
    }
  }, [activeTab, location, navigate]);

  // Update password strength in real-time
  useEffect(() => {
    if (registerPassword) {
      setPasswordStrength({
        length: passwordStrengthSchema.length(registerPassword),
        uppercase: passwordStrengthSchema.uppercase(registerPassword),
        lowercase: passwordStrengthSchema.lowercase(registerPassword),
        number: passwordStrengthSchema.number(registerPassword),
        special: passwordStrengthSchema.special(registerPassword),
      });
    } else {
      setPasswordStrength({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      });
    }
  }, [registerPassword]);

  const validateLoginForm = () => {
    try {
      loginSchema.parse({ email: loginEmail, password: loginPassword });
      setLoginErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setLoginErrors(newErrors);
      }
      return false;
    }
  };

  const validateRegisterForm = () => {
    try {
      const result = registerSchema.parse({
        email: registerEmail,
        password: registerPassword,
        username: registerUsername,
        fullName: registerFullName,
        confirmPassword
      });
      
      // Check if passwords match
      if (registerPassword !== confirmPassword) {
        setRegisterErrors({ confirmPassword: "Passwords do not match" });
        return false;
      }
      
      setRegisterErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setRegisterErrors(newErrors);
      }
      return false;
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateLoginForm()) return;
    
    setIsLoading(true);
    
    try {
      await signIn(loginEmail, loginPassword);
      toast({
        title: "Success!",
        description: "You have successfully logged in.",
        variant: "default",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateRegisterForm()) return;
    
    if (registerPassword !== confirmPassword) {
      setRegisterErrors({
        ...registerErrors,
        confirmPassword: "Passwords do not match"
      });
      return;
    }
    
    // Check if all password criteria are met
    const allCriteriaMet = Object.values(passwordStrength).every(Boolean);
    if (!allCriteriaMet) {
      setRegisterErrors({
        ...registerErrors,
        password: "Password does not meet all requirements"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signUp(registerEmail, registerPassword, {
        username: registerUsername,
        full_name: registerFullName
      });
      
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
        variant: "default",
      });
      
      // Clear form after successful registration
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterUsername("");
      setRegisterFullName("");
      setConfirmPassword("");
      
      // Switch to login tab
      setActiveTab("login");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="gigzam-logo text-3xl font-bold text-gigzam-purple mb-2">
            Gig<span className="text-gigzam-purple opacity-80">Zam</span>
          </h1>
          <p className="text-gray-600">Connect with creative services</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card className="stripe-card">
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Sign in to your account</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      className={loginErrors.email ? "border-red-500" : ""}
                    />
                    {loginErrors.email && (
                      <p className="text-sm text-red-500">{loginErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-gigzam-purple hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      className={loginErrors.password ? "border-red-500" : ""}
                    />
                    {loginErrors.password && (
                      <p className="text-sm text-red-500">{loginErrors.password}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card className="stripe-card">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Join our creative community</CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        placeholder="johndoe"
                        value={registerUsername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                        required
                        className={registerErrors.username ? "border-red-500" : ""}
                      />
                      {registerErrors.username && (
                        <p className="text-sm text-red-500">{registerErrors.username}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={registerFullName}
                        onChange={(e) => setRegisterFullName(e.target.value)}
                        required
                        className={registerErrors.fullName ? "border-red-500" : ""}
                      />
                      {registerErrors.fullName && (
                        <p className="text-sm text-red-500">{registerErrors.fullName}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="name@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                      className={registerErrors.email ? "border-red-500" : ""}
                    />
                    {registerErrors.email && (
                      <p className="text-sm text-red-500">{registerErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                      className={registerErrors.password ? "border-red-500" : ""}
                    />
                    {registerErrors.password && (
                      <p className="text-sm text-red-500">{registerErrors.password}</p>
                    )}
                    
                    {/* Password strength indicator */}
                    <div className="mt-2 space-y-1">
                      <p className="text-sm font-medium text-gray-700">Password requirements:</p>
                      <ul className="space-y-1">
                        <li className="text-sm flex items-center">
                          {passwordStrength.length ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordStrength.length ? "text-green-600" : "text-gray-600"}>
                            At least 8 characters
                          </span>
                        </li>
                        <li className="text-sm flex items-center">
                          {passwordStrength.uppercase ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordStrength.uppercase ? "text-green-600" : "text-gray-600"}>
                            At least 1 uppercase letter (A-Z)
                          </span>
                        </li>
                        <li className="text-sm flex items-center">
                          {passwordStrength.lowercase ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordStrength.lowercase ? "text-green-600" : "text-gray-600"}>
                            At least 1 lowercase letter (a-z)
                          </span>
                        </li>
                        <li className="text-sm flex items-center">
                          {passwordStrength.number ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordStrength.number ? "text-green-600" : "text-gray-600"}>
                            At least 1 number (0-9)
                          </span>
                        </li>
                        <li className="text-sm flex items-center">
                          {passwordStrength.special ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordStrength.special ? "text-green-600" : "text-gray-600"}>
                            At least 1 special character (e.g., !, @, #)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className={registerErrors.confirmPassword ? "border-red-500" : ""}
                    />
                    {registerErrors.confirmPassword && (
                      <p className="text-sm text-red-500">{registerErrors.confirmPassword}</p>
                    )}
                    {registerPassword && confirmPassword && registerPassword !== confirmPassword && (
                      <p className="text-sm text-red-500">Passwords do not match</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
