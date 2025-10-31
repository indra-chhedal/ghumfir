import mongoose from "mongoose";

const guideRequestSchema = new mongoose.Schema({
  visitorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  guideId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  status: { 
    type: String, 
    enum: ["pending", "accepted", "rejected", "completed"], 
    default: "pending" 
  },
  startDate: Date,
  endDate: Date,
  message: String
}, { timestamps: true });

export default mongoose.model("GuideRequest", guideRequestSchema);
