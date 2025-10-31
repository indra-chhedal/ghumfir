const Destination = require("../Database/Model/Destination");

const createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    await newDestination.save();
    res.status(201).json({ success: true, data: newDestination });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().populate("addedBy", "name email");
    res.status(200).json({ success: true, data: destinations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id).populate("addedBy", "name email");
    if (!destination) {
      return res.status(404).json({ success: false, message: "Destination not found" });
    }
    res.status(200).json({ success: true, data: destination });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Destination not found" });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteDestination = async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Destination not found" });
    }
    res.status(200).json({ success: true, message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
};
