import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider,QueryClient } from 'react-query'; // или react-query
import { TooltipProvider } from '@radix-ui/react-tooltip';


import { Toaster } from 'react-hot-toast'; // пример
import { Toaster as SonnerToaster } from "sonner";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Profile from "./pages/Profile";
import Wallet from "./pages/Payments";
import Analytics from "./pages/Analytics";
import NavigationBar from "./components/NavigationBar"; 
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/start2" element={<Home2 />} />
              <Route path="/start3" element={<Home3 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/payments" element={<Wallet />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/wallet" element={
                <>
                  <Wallet />
                  <NavigationBar />
                </>
              } />
              <Route path="/analytics" element={
                <>
                  <Analytics />
                  <NavigationBar />
                </>
              } />
              <Route path="/profile" element={
                <>
                  <Profile />
                  <NavigationBar />
                </>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
