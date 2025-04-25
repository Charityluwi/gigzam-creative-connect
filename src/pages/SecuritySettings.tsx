
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MfaSetup from "@/components/MfaSetup";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Shield, Key, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SecuritySettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [changingPassword, setChangingPassword] = useState(false);
  
  const requestPasswordReset = async () => {
    if (!user?.email) return;
    
    setChangingPassword(true);
    try {
      // Request password reset
      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      toast({
        title: "Password reset email sent",
        description: "Check your inbox for instructions to reset your password.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Could not send password reset email",
        variant: "destructive",
      });
    } finally {
      setChangingPassword(false);
    }
  };
  
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gigzam-purple mr-2" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar navigation */}
          <div className="w-full md:w-1/4">
            <div className="mb-6">
              <Link to="/settings" className="flex items-center text-gigzam-purple hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Settings
              </Link>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-full">
                  <TabsList className="flex flex-col items-start h-auto bg-transparent border-r">
                    <TabsTrigger 
                      value="general"
                      className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-gigzam-purple"
                    >
                      General
                    </TabsTrigger>
                    <TabsTrigger 
                      value="mfa"
                      className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-gigzam-purple"
                    >
                      Two-factor authentication
                    </TabsTrigger>
                    <TabsTrigger 
                      value="password"
                      className="justify-start w-full rounded-none border-r-2 border-transparent data-[state=active]:border-gigzam-purple"
                    >
                      Password
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content area */}
          <div className="w-full md:w-3/4">
            <TabsContent value="general" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>General Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Account email</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Last sign in</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "Unknown"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mfa" className="mt-0">
              <MfaSetup />
            </TabsContent>
            
            <TabsContent value="password" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    Change Password
                  </CardTitle>
                  <CardDescription>
                    Update your account password
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For security reasons, we'll send you an email with instructions to reset your password.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={requestPasswordReset} 
                    disabled={changingPassword}
                    className="bg-gigzam-purple hover:bg-gigzam-purple-dark"
                  >
                    {changingPassword && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {changingPassword ? "Sending email..." : "Send password reset email"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecuritySettings;
