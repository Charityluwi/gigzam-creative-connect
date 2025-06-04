
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import ErrorBoundary from "@/components/ErrorBoundary";

// Page imports
import Index from "./pages/Index";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import TalentProfile from "./pages/TalentProfile";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import BecomeCreative from "./pages/BecomeCreative";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HowItWorksPage from "./pages/HowItWorksPage";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import TermsOfService from "./pages/TermsOfService";
import SecuritySettings from "./pages/SecuritySettings";

// Set up QueryClient with production-ready configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors (client errors)
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        // Retry up to 2 times for other errors
        return failureCount < 2;
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      refetchOnWindowFocus: false, // Disable for better UX
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1, // Retry failed mutations once
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<Search />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/talent/:id" element={<TalentProfile />} />
              <Route path="/category/:category" element={<Search />} />
              <Route path="/booking" element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/become-a-creative" element={<BecomeCreative />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<TermsOfService />} />
              <Route path="/faq" element={<HowItWorksPage />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/profile/me" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/settings/security" element={
                <ProtectedRoute>
                  <SecuritySettings />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<Navigate to="/auth?tab=login" replace />} />
              <Route path="/register" element={<Navigate to="/auth?tab=register" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
