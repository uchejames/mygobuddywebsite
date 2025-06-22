const User = require("../models/User");

exports.getAllBuddies = async (req, res) => {
  try {
    const buddies = await User.find({ role: "buddy" }).select("-password");
    res.json(buddies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch buddies." });
  }
};
