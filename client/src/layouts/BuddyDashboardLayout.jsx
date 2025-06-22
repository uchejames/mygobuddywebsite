import { Link, Outlet, useLocation } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaComments, FaInbox, FaArrowLeft, FaTachometerAlt, FaBars, FaTimes, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

function BuddyDashboardLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "bg-white/20 text-white font-semibold shadow-lg backdrop-blur-sm border border-white/30"
      : "text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md";

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 flex justify-between items-center shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <FaStar className="text-yellow-300 text-sm" />
            </div>
            <h1 className="text-xl font-bold">Buddy Panel</h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </header>
      )}

      {/* Sidebar Overlay for Mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        ${isMobile 
          ? `fixed top-0 left-0 z-50 h-full w-80 transform transition-transform duration-300 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : 'w-64 flex-shrink-0 min-h-screen'
        }
        bg-gradient-to-b from-primary via-primary/95 to-primary/90 text-white shadow-2xl
      `}>
        <div className="p-6 h-full flex flex-col">
          {/* Header Section */}
          <div className="mb-8">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            )}
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaStar className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold tracking-wide">Buddy Panel</h2>
              <p className="text-white/70 text-sm mt-1">Travel Guide Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 flex-1">
            <Link
              to="/buddy-dashboard"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/buddy-dashboard")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaTachometerAlt className="text-lg" />
              </div>
              <span className="font-medium">Dashboard</span>
            </Link>

            <Link
              to="/buddy-dashboard/sessions"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/buddy-dashboard/sessions")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaCalendarAlt className="text-lg" />
              </div>
              <span className="font-medium">My Sessions</span>
            </Link>

            <Link
              to="/buddy-dashboard/bookings"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 relative ${isActive("/buddy-dashboard/bookings")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaInbox className="text-lg" />
              </div>
              <span className="font-medium">Incoming Bookings</span>
              {/* Optional notification badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Link>

            <Link
              to="/buddy-dashboard/messages"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaComments className="text-lg" />
              </div>
              <span className="font-medium">Messages</span>
            </Link>

            <Link
              to="/buddy-dashboard/profile"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/buddy-dashboard/profile")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaUser className="text-lg" />
              </div>
              <span className="font-medium">My Profile</span>
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-6 border-t border-white/20">
            <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
              <p className="text-white/80 text-sm text-center">
                <span className="font-semibold text-yellow-300">Pro Buddy</span> Status
              </p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs mx-0.5" />
                ))}
              </div>
            </div>
            
            <Link
              to="/"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaArrowLeft className="text-lg" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-y-auto">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default BuddyDashboardLayout;