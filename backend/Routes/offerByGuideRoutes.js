const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");
const {
  createOfferByGuide,
  updateOfferByGuide,
  deleteOfferByGuide,
} = require("../controllers/offerByGuideController");

// Create new guide offer
router.post("/", protect, createOfferByGuide);

// Update guide offer
router.put("/:id", protect, updateOfferByGuide);

// Delete guide offer
router.delete("/:id", protect, deleteOfferByGuide);

module.exports = router;
