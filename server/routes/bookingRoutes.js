const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buddyId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  time: String,
  date: String,
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
