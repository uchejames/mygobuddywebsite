function BuddyDashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Welcome, Buddy!</h1>
      <p className="text-gray-600">Manage your sessions and profile using the sidebar.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-primary">Upcoming Sessions</h3>
          <p className="text-sm text-gray-500">No sessions scheduled.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-primary">Tips</h3>
          <p className="text-sm text-gray-500">Respond quickly to booking requests.</p>
        </div>
      </div>
    </div>
  );
}

export default BuddyDashboardHome;
