function MyBookings() {
  // You can later fetch bookings from an API or context
  const mockBookings = [
    {
      id: 1,
      buddyName: "Alex Johnson",
      date: "2025-06-25",
      time: "3:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      buddyName: "Sarah Lee",
      date: "2025-06-30",
      time: "11:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">My Bookings</h2>
      {mockBookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {mockBookings.map((booking) => (
            <div
              key={booking.id}
              className="border p-4 rounded-md shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold text-primary">
                {booking.buddyName}
              </h3>
              <p className="text-gray-600">
                Date: {booking.date} | Time: {booking.time}
              </p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
