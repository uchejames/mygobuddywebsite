const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ["client", "buddy"], required: true },
});

module.exports = mongoose.model("User", userSchema);
// This code defines a Mongoose schema for a User model in a Node.js application.