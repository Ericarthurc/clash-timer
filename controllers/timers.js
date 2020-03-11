const Timer = require("../models/Timer");
const db = require("../config/db");

// @desc    Get all timers
// @route   GET /api/v1/timers
// @access  Private
exports.getTimers = async (req, res, next) => {
  try {
    const timers = await Timer.find({ owner: req.user._id });

    res.status(200).json({ success: true, data: timers });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Get single timer
// @route   GET /api/v1/timers/:id
// @access  Private
exports.getTimer = async (req, res, next) => {
  try {
    const timer = await Timer.findById(req.params.id);

    if (!timer) {
      return res.status(404).json({
        success: false,
        error: `Timer with id: ${req.params.id} not found!`
      });
    }

    res.status(200).json({ success: true, data: timer });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Create new timer
// @route   POST /api/v1/timers
// @access  Private
exports.createTimer = async (req, res, next) => {
  try {
    const timer = await Timer.create({
      ...req.body,
      owner: req.user._id
    });

    res.status(200).json({ success: true, data: timer });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Update single timer
// @route   PUT /api/v1/timers/:id
// @access  Private
exports.updateTimer = async (req, res, next) => {};

// @desc    Delete single timer
// @route   DELETE /api/v1/timers/:id
// @access  Private
exports.deleteTimer = async (req, res, next) => {};
