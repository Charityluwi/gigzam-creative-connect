
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session, AuthError } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";

interface MfaChallenge {
  id: string;
  factorId: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  mfaChallenge: MfaChallenge | null;
  signUp: (email: string, password: string, metadata?: { username?: string; full_name?: string }) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  completeMfaChallenge: (code: string) => Promise<void>;
  setupMfa: () => Promise<string | null>;
  verifyMfa: (code: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [mfaChallenge, setMfaChallenge] = useState<MfaChallenge | null>(null);

  useEffect(() => {
    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event);
        
        setSession(session);
        setUser(session?.user ?? null);
        
        // Handle MFA challenge events
        if (event === "MFA_CHALLENGE_VERIFIED") {
          setMfaChallenge(null);
        } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
          setMfaChallenge(null);
        }
        
        if (event === 'SIGNED_IN') {
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: "Signed out",
            description: "You have been signed out successfully.",
          });
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (
    email: string, 
    password: string, 
    metadata?: { username?: string; full_name?: string }
  ) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/auth?tab=login`
        }
      });

      if (error) throw error;
      
      toast({
        title: "Account created!",
        description: "Please check your email to confirm your account.",
      });
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Check if MFA is required for the user
      if (data.session && data.user && data.user.factors) {
        // Handle MFA flow if needed
        console.log("User factors:", data.user.factors);
      }
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const completeMfaChallenge = async (code: string) => {
    if (!mfaChallenge) {
      throw new Error("No active MFA challenge");
    }
    
    try {
      const { error } = await supabase.auth.mfa.challengeAndVerify({
        factorId: mfaChallenge.factorId,
        challenge: mfaChallenge.id,
        code
      });
      
      if (error) throw error;
      
      // Reset MFA challenge on success
      setMfaChallenge(null);
    } catch (error) {
      if (error instanceof AuthError) {
        throw new Error(error.message);
      }
      throw new Error("Failed to verify the code. Please try again.");
    }
  };
  
  const setupMfa = async (): Promise<string | null> => {
    try {
      const { data, error } = await supabase.auth.mfa.enroll({
        factorType: 'totp'
      });
      
      if (error) throw error;
      
      return data.totp.qr_code;
    } catch (error: any) {
      toast({
        title: "MFA setup failed",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };
  
  const verifyMfa = async (code: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.mfa.challenge({
        factorId: 'totp'
      });
      
      if (error) throw error;
      
      if (data.id) {
        const { error: verifyError } = await supabase.auth.mfa.verify({
          factorId: 'totp',
          challenge: data.id,
          code
        });
        
        if (verifyError) throw verifyError;
        return true;
      }
      
      return false;
    } catch (error: any) {
      toast({
        title: "Verification failed",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      loading, 
      mfaChallenge,
      signUp, 
      signIn, 
      signOut,
      completeMfaChallenge,
      setupMfa,
      verifyMfa
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
