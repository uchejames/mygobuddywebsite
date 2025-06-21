import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaComments, FaUser, FaArrowLeft } from "react-icons/fa";

function DashboardLayout() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-white text-primary font-semibold"
      : "text-white hover:bg-white/10";

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-white py-6 px-4 flex-shrink-0 md:min-h-screen shadow-lg">
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide">MyGoBuddy</h1>
        </div>

        {/* Nav Links */}
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/dashboard")}`}
          >
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/dashboard/bookings"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/dashboard/bookings")}`}
          >
            <FaCalendarAlt className="text-lg" />
            <span>My Bookings</span>
          </Link>

          <Link
            to="/messages"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition duration-200"
          >
            <FaComments className="text-lg" />
            <span>Messages</span>
          </Link>

          <Link
            to="/dashboard/profile"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/dashboard/profile")}`}
          >
            <FaUser className="text-lg" />
            <span>Profile</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 mt-6 transition duration-200"
          >
            <FaArrowLeft className="text-lg" />
            <span>Back to Home</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-neutral p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
