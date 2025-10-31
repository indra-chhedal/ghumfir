import express from "express";
import { registerUser, loginUser, getAllUsers, blockUser } from "../controllers/userController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin routes
router.get("/", protect, adminOnly, getAllUsers);
router.put("/:id/block", protect, adminOnly, blockUser);

export default router;
