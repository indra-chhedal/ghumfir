const mongoose = require("mongoose");

const offerByTouristSchema = new mongoose.Schema(
  {
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    destinationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    proposedPrice: {
      type: Number,
      required: true,
    },
    message: String,
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "countered"],
      default: "pending",
    },
    counterOfferId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OfferByGuide",
      default: null,
    },
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("OfferByTourist", offerByTouristSchema);
