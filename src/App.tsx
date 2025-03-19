
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
import SafetyCheckDrawer from "./components/SafetyCheckDrawer";
import MoodTracker from "./pages/MoodTracker";
import BreathingExercises from "./pages/BreathingExercises";
import LocalResources from "./pages/LocalResources";
import Journal from "./pages/Journal";
import SafetyPlan from "./pages/SafetyPlan";
import Community from "./pages/Community";
import EducationalContent from "./pages/EducationalContent";
import ScheduledCheckins from "./pages/ScheduledCheckins";
import OfflineModeBanner from "./components/OfflineModeBanner";
import PrivacyModeProvider from "./context/PrivacyModeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <PrivacyModeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-right" />
          <BrowserRouter>
            <ScrollToTop />
            <ScrollProgressBar />
            <OfflineModeBanner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/mood-tracker" element={<MoodTracker />} />
              <Route path="/breathing-exercises" element={<BreathingExercises />} />
              <Route path="/local-resources" element={<LocalResources />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/safety-plan" element={<SafetyPlan />} />
              <Route path="/community" element={<Community />} />
              <Route path="/educational-content" element={<EducationalContent />} />
              <Route path="/scheduled-checkins" element={<ScheduledCheckins />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Chatbot />
            <SafetyCheckDrawer />
          </BrowserRouter>
        </TooltipProvider>
      </PrivacyModeProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
