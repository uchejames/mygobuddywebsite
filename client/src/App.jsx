import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Buddies from "./pages/Buddies";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks"; 
import BuddyDetail from "./pages/BuddyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/booking";
import CompleteBuddyProfile from "./pages/buddy/CompleteProfile";

// Messaging Pages
import Messages from "./pages/messages/Messages";
import Chat from "./pages/messages/Chat";

// Dashboard Layout & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import ClientDashboardHome from "./pages/dashboard/ClientDashboardHome";
import MyBookings from "./pages/dashboard/MyBookings";

// Buddy Dashboard Layout & Pages
import BuddyDashboardLayout from "./layouts/BuddyDashboardLayout";
import IncomingBookings from "./pages/buddy/IncomingBookings";
import BuddyDashboardHome from "./pages/buddy/BuddyDashboardHome";
import MySessions from "./pages/buddy/MySessions";
import BuddyProfile from "./pages/buddy/BuddyProfile";

// AOS
import 'aos/dist/aos.css';
import AOS from 'aos';

// ⬇️ This wrapper is needed to use hooks like useLocation outside Router 
function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const hideFooter =
    location.pathname.startsWith("/client-dashboard") ||
    location.pathname.startsWith("/buddy-dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<main className="flex-grow"><Home /></main>} />
        <Route path="/about" element={<main className="flex-grow"><About /></main>} />
        <Route path="/how-it-works" element={<main className="flex-grow"><HowItWorks /></main>} />
        <Route path="/buddies" element={<main className="flex-grow"><Buddies /></main>} />
        <Route path="/buddies/:id" element={<main className="flex-grow"><BuddyDetail /></main>} />
        <Route path="/contact" element={<main className="flex-grow"><Contact /></main>} />
        <Route path="/login" element={<main className="flex-grow"><Login /></main>} />
        <Route path="/signup" element={<main className="flex-grow"><Signup /></main>} />
        <Route path="/booking/:id" element={<main className="flex-grow"><Booking /></main>} />
        <Route path="/complete-profile" element={<main className="flex-grow"><CompleteBuddyProfile /></main>} />
        <Route path="/faq" element={<main className="flex-grow"><FAQ /></main>} />

        {/* Client Dashboard */}
        <Route path="/client-dashboard" element={<DashboardLayout />}>
          <Route index element={<ClientDashboardHome />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:id" element={<Chat />} />
        </Route>

        {/* Buddy Dashboard */}
        <Route path="/buddy-dashboard" element={<BuddyDashboardLayout />}>
          <Route index element={<BuddyDashboardHome />} />
          <Route path="sessions" element={<MySessions />} />
          <Route path="profile" element={<BuddyProfile />} />
          <Route path="bookings" element={<IncomingBookings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:id" element={<Chat />} />
        </Route>
      </Routes>

      {/* Conditional Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
