function IncomingBookings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Incoming Bookings</h1>
      <p className="text-gray-600">Manage your upcoming and pending bookings here.</p>

      <div className="mt-6 space-y-4">
        {/* This should be dynamically loaded once backend is connected */}
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Jane Doe</h3>
          <p className="text-sm text-gray-500">Scheduled: July 5, 2025 at 3:00 PM</p>
          <p className="text-sm text-yellow-600">Status: Pending</p>
          <div className="mt-2 flex gap-2">
            <button className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">Accept</button>
            <button className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomingBookings;
