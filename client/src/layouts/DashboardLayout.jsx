import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaComments, FaUser, FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function DashboardLayout() {
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
    <div className="min-h-screen flex flex-col md:flex-row font-poppins bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-primary text-white p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-xl font-bold">MyGoBuddy</h1>
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
        bg-gradient-to-b from-primary to-primary/90 text-white shadow-2xl
      `}>
        <div className="p-6 h-full flex flex-col">
          {/* Logo Section */}
          <div className="mb-8 text-center">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            )}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
              <h1 className="text-2xl font-bold tracking-wide">MyGoBuddy</h1>
              <p className="text-white/70 text-sm mt-1">Travel Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 flex-1">
            <Link
              to="/dashboard"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/dashboard")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaHome className="text-lg" />
              </div>
              <span className="font-medium">Dashboard</span>
            </Link>

            <Link
              to="/dashboard/bookings"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/dashboard/bookings")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaCalendarAlt className="text-lg" />
              </div>
              <span className="font-medium">My Bookings</span>
            </Link>

            <Link
              to="/messages"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaComments className="text-lg" />
              </div>
              <span className="font-medium">Messages</span>
            </Link>

            <Link
              to="/dashboard/profile"
              onClick={() => isMobile && setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive("/dashboard/profile")}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaUser className="text-lg" />
              </div>
              <span className="font-medium">Profile</span>
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-6 border-t border-white/20">
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
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;