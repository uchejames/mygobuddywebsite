function ClientDashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">
        Welcome to Your Dashboard
      </h1>
      <p className="text-gray-600 text-base mb-8">
        Use the sidebar to manage your account and bookings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary mb-2">
            📌 Recent Activity
          </h3>
          <p className="text-sm text-gray-500">
            No recent activity yet. Once you start booking sessions, updates will show here.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary mb-2">
            💡 Suggestions
          </h3>
          <p className="text-sm text-gray-500">
            Start exploring <a href="/buddies" className="text-secondary font-medium hover:underline">Buddies</a> to book your first session.
          </p>
        </div>

        {/* Optional Future Block */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hidden xl:block">
          <h3 className="text-lg font-semibold text-primary mb-2">
            📅 Upcoming Features
          </h3>
          <p className="text-sm text-gray-500">
            Session calendar, favorites, and personalized recommendations coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboardHome;
