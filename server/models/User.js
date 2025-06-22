const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["client", "buddy"],
      required: true,
    },

    avatar: {
      type: String,
      default: "", // Optional: a default image URL can be set here
    },

    bio: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    languages: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    hourlyRate: {
      type: Number,
      default: 0,
    },

    isOnline: {
      type: Boolean,
      default: false,
    },

    availability: {
      type: [
        {
          day: String,
          start: String, // e.g., "09:00"
          end: String,   // e.g., "17:00"
        },
      ],
      default: [],
    },

    // For clients only – list of favorite buddy IDs
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // referring to buddies
      },
    ],

    // For buddies – number of bookings or reviews can be tracked
    rating: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: String,
        rating: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
