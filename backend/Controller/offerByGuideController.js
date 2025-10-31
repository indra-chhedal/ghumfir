const OfferByGuide = require("../models/OfferByGuide");
const User = require("../models/User");

// ✅ Create a new offer by guide
const createOfferByGuide = async (req, res) => {
  try {
    const { touristId, destinationId, baseOfferId, counterPrice, message } = req.body;

    if (req.user.role !== "guide") {
      return res.status(403).json({ message: "Only guides can create offers" });
    }

    const newOffer = await OfferByGuide.create({
      guideId: req.user._id,
      touristId,
      destinationId,
      baseOfferId,
      counterPrice,
      message,
    });

    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Edit (update) guide offer
const updateOfferByGuide = async (req, res) => {
  try {
    const offer = await OfferByGuide.findById(req.params.id);

    if (!offer) return res.status(404).json({ message: "Offer not found" });

    if (offer.guideId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to edit this offer" });
    }

    const updatedOffer = await OfferByGuide.findByIdAndUpdate(
      req.params.id,
      { counterPrice: req.body.counterPrice, message: req.body.message },
      { new: true }
    );

    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🗑️ Delete guide offer
const deleteOfferByGuide = async (req, res) => {
  try {
    const offer = await OfferByGuide.findById(req.params.id);
    if (!offer) return res.status(404).json({ message: "Offer not found" });

    if (offer.guideId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this offer" });
    }

    await offer.deleteOne();
    res.json({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOfferByGuide,
  updateOfferByGuide,
  deleteOfferByGuide,
};
