const express = require("express");
const {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
} = require("../Controller/destinationController");

const router = express.Router();

// CREATE
router.post("/", createDestination);

// READ
router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);

// UPDATE
router.put("/:id", updateDestination);

// DELETE
router.delete("/:id", deleteDestination);

module.exports = router;
