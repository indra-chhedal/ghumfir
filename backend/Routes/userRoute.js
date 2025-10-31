const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  blockUser,
} = require("../Controller/userControllers");
const { protect, adminOnly } = require("../Middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin routes
router.get("/", protect, adminOnly, getAllUsers);
router.put("/:id/block", protect, adminOnly, blockUser);

module.exports = router;
