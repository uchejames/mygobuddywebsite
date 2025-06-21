import { Link, Outlet, useLocation } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaComments, FaInbox, FaArrowLeft, FaTachometerAlt } from "react-icons/fa";

function BuddyDashboardLayout() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-white text-primary font-semibold"
      : "text-white hover:bg-white/10";

  return (
    <div className="min-h-screen flex font-poppins">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden md:flex flex-col shadow-lg">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Buddy Panel</h2>
        </div>

        <nav className="space-y-2">
          <Link
            to="/buddy-dashboard"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/buddy-dashboard")}`}
          >
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/buddy-dashboard/sessions"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/buddy-dashboard/sessions")}`}
          >
            <FaCalendarAlt className="text-lg" />
            <span>My Sessions</span>
          </Link>

          <Link
            to="/messages"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition duration-200"
          >
            <FaComments className="text-lg" />
            <span>Messages</span>
          </Link>

          <Link
            to="/buddy-dashboard/profile"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/buddy-dashboard/profile")}`}
          >
            <FaUser className="text-lg" />
            <span>My Profile</span>
          </Link>

          <Link
            to="/buddy-dashboard/bookings"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${isActive("/buddy-dashboard/bookings")}`}
          >
            <FaInbox className="text-lg" />
            <span>Incoming Bookings</span>
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

export default BuddyDashboardLayout;
