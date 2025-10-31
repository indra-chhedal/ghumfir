import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  guideId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", default: null },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);