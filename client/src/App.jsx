import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Buddies from "./pages/Buddies";
import BuddyDetail from "./pages/BuddyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Dashboard Layout & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import ClientDashboardHome from "./pages/dashboard/ClientDashboardHome";
import MyBookings from "./pages/dashboard/MyBookings";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          {/* Public Routes with shared layout */}
          <Route
            path="/"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <Home />
              </main>
            }
          />
          <Route
            path="/about"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <About />
              </main>
            }
          />
          <Route
            path="/buddies"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <Buddies />
              </main>
            }
          />
          <Route
            path="/buddies/:id"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <BuddyDetail />
              </main>
            }
          />
          <Route
            path="/login"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <Login />
              </main>
            }
          />
          <Route
            path="/signup"
            element={
              <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
                <Signup />
              </main>
            }
          />

          {/* Dashboard Layout with nested routes (handles its own layout) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ClientDashboardHome />} />
            <Route path="bookings" element={<MyBookings />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
