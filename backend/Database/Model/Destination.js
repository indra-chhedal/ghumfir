const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    region: String, // e.g. "Pokhara", "Kathmandu"
    images: [String],
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isApproved: { type: Boolean, default: false },
    avgRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destination", destinationSchema);
