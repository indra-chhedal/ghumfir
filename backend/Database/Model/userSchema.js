import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "guide", "visitor"], required: true },
  phone: String,
  profileImage: String,
  isBlocked: { type: Boolean, default: false },

  guideInfo: {
    experience: Number, // in years
    bio: String,
    languages: [String],
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    available: { type: Boolean, default: true }
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
