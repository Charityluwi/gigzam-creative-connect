
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MfaSetup = () => {
  const { setupMfa, verifyMfa } = useAuth();
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [otpValue, setOtpValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  const handleSetupMfa = async () => {
    setLoading(true);
    try {
      const qrCodeData = await setupMfa();
      setQrCode(qrCodeData);
    } catch (error) {
      toast({
        title: "MFA Setup Error",
        description: "Could not initialize MFA setup. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyMfa = async () => {
    if (otpValue.length !== 6) return;
    
    setVerifying(true);
    try {
      const success = await verifyMfa(otpValue);
      if (success) {
        setSetupComplete(true);
        toast({
          title: "MFA Setup Complete",
          description: "Two-factor authentication has been enabled for your account.",
        });
      }
    } finally {
      setVerifying(false);
    }
  };

  if (setupComplete) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            Two-factor authentication enabled
          </CardTitle>
          <CardDescription>
            Your account is now protected with two-factor authentication
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You'll be asked for a verification code when you sign in from a new device or browser.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Two-factor authentication</CardTitle>
        <CardDescription>
          Add an extra layer of security to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!qrCode ? (
          <div className="text-sm text-muted-foreground">
            <p>We recommend using two-factor authentication (2FA) to help keep your account secure.</p>
            <p className="mt-2">With 2FA, you'll need to provide a code from an authenticator app like Google Authenticator or Authy when you sign in.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="bg-white p-4 rounded-lg">
                <img src={qrCode} alt="QR Code for authenticator app" width={200} height={200} />
              </div>
              
              <div className="text-center text-sm text-muted-foreground max-w-sm">
                <p>Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)</p>
              </div>
              
              <div className="mt-4 w-full">
                <p className="text-sm font-medium text-center mb-2">Enter the 6-digit code from your app</p>
                <div className="flex justify-center">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!qrCode ? (
          <Button 
            onClick={handleSetupMfa} 
            className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Setting up..." : "Set up 2FA"}
          </Button>
        ) : (
          <Button
            onClick={handleVerifyMfa}
            className="w-full bg-gigzam-purple hover:bg-gigzam-purple-dark"
            disabled={verifying || otpValue.length !== 6}
          >
            {verifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {verifying ? "Verifying..." : "Verify and activate"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MfaSetup;
