const offerByGuideSchema = new mongoose.Schema(
  {
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    destinationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    baseOfferId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OfferByTourist",
      required: true,
    },
    counterPrice: {
      type: Number,
      required: true,
    },
    message: String,
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OfferByGuide", offerByGuideSchema);
