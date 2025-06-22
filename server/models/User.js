const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["client", "buddy"],
    required: true,
  },

  avatar: { type: String },
  expertise: { type: String },
  bio: { type: String },
  availability: [{ day: String, time: String }],
  isOnline: { type: Boolean, default: false },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
