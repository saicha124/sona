import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";
import AgentForm from "@/pages/agent-form";
import HotelForm from "@/pages/hotel-form";
import OffersPage from "@/pages/offers-page";
import RegionsPage from "@/pages/regions-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Auth Route */}
      <Route path="/auth" component={AuthPage} />
      
      {/* Protected Route - The Dashboard component handles the redirect if not logged in */}
      <Route path="/" component={Dashboard} />
      <Route path="/agents" component={AgentForm} />
      <Route path="/hotels" component={HotelForm} />
      <Route path="/offers" component={OffersPage} />
      <Route path="/regions" component={RegionsPage} />
      
      {/* 404 Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
