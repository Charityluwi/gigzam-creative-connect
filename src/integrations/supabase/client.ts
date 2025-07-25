// Supabase client configuration
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qysmwuxwfxvkzsxzhdmr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5c213dXh3Znh2a3pzeHpoZG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzA4NTIsImV4cCI6MjA2MDIwNjg1Mn0.J3hGH84EQSLZNOUVTF1lZfg4wOTSJKPuUbyy7JzftZQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);