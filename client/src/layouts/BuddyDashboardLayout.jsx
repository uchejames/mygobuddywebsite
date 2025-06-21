import { Link, Outlet, useLocation } from "react-router-dom";

function BuddyDashboardLayout() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-secondary font-semibold" : "text-white";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Buddy Panel</h2>

        <nav className="space-y-4">
          <Link
            to="/buddy-dashboard"
            className={`block hover:text-secondary ${isActive("/buddy-dashboard")}`}
          >
            🧑‍💼 Dashboard
          </Link>
          <Link
            to="/buddy-dashboard/sessions"
            className={`block hover:text-secondary ${isActive("/buddy-dashboard/sessions")}`}
          >
            📅 My Sessions
          </Link>
                    <Link
            to="/messages"
            className="block hover:text-secondary"
          >
            💬 Messages
          </Link>
          <Link
            to="/buddy-dashboard/profile"
            className={`block hover:text-secondary ${isActive("/buddy-dashboard/profile")}`}
          >
            👤 My Profile
          </Link>
          <Link
            to="/buddy-dashboard/bookings"
            className={`block hover:text-secondary ${isActive("/buddy-dashboard/bookings")}`}
        >
            📥 Incoming Bookings
          </Link>

          <Link to="/" className="block text-white hover:text-secondary">
            ← Back to Home
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-neutral p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default BuddyDashboardLayout;
