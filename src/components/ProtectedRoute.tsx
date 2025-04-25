
import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading, session, mfaChallenge, completeMfaChallenge } = useAuth();
  const [otpValue, setOtpValue] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  
  // Handle MFA verification
  const handleMfaSubmit = async () => {
    if (!otpValue || otpValue.length < 6) {
      setError("Please enter a valid verification code");
      return;
    }
    
    setVerifying(true);
    setError("");
    
    try {
      await completeMfaChallenge(otpValue);
    } catch (error: any) {
      setError(error.message || "Invalid verification code");
    } finally {
      setVerifying(false);
    }
  };
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gigzam-purple mr-2" />
        <span>Loading...</span>
      </div>
    );
  }
  
  // If there's an MFA challenge, show the verification screen
  if (mfaChallenge) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="w-full max-w-md">
          <Card className="stripe-card">
            <CardHeader>
              <CardTitle>Two-factor authentication</CardTitle>
              <CardDescription>Please enter the verification code from your authenticator app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2 items-center">
                <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                
                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleMfaSubmit} 
                className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark"
                disabled={verifying || otpValue.length < 6}
              >
                {verifying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {verifying ? "Verifying..." : "Verify"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  // Render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
