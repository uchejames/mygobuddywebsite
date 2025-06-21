import { Link, Outlet, useLocation } from "react-router-dom";

function DashboardLayout() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-secondary font-semibold"
      : "text-white";

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-white p-6 md:min-h-screen">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">MyGoBuddy</h2>
        </div>

        <nav className="space-y-4">
          <Link
            to="/dashboard"
            className={`block transition hover:text-secondary ${isActive("/dashboard")}`}
          >
            🏠 Dashboard
          </Link>
          <Link
            to="/dashboard/bookings"
            className={`block transition hover:text-secondary ${isActive("/dashboard/bookings")}`}
          >
            📅 My Bookings
          </Link>
          <Link
            to="/messages"
            className="block hover:text-secondary"
          >
            💬 Messages
          </Link>

          <Link
            to="/dashboard/profile"
            className={`block transition hover:text-secondary ${isActive("/dashboard/profile")}`}
          >
            👤 Profile
          </Link>
          <Link
            to="/"
            className="block transition text-white hover:text-secondary"
          >
            ← Back to Home
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-neutral p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
