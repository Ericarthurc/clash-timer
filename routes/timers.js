const express = require("express");
const {
  getTimers,
  getTimer,
  createTimer,
  updateTimer,
  deleteTimer
} = require("../controllers/timers");

// Middleware
const authentication = require("../middleware/authentication");

const router = new express.Router();

router
  .route("/")
  .get(authentication, getTimers)
  .post(authentication, createTimer);

router
  .route("/:id")
  .get(authentication, getTimer)
  .patch(authentication, updateTimer)
  .delete(authentication, deleteTimer);

module.exports = router;
