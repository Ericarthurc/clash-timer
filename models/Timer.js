const mongoose = require("mongoose");
const validator = require("validator");

const timerSchema = new mongoose.Schema(
  {
    base: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      required: true,
      trim: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Timer = mongoose.model("Timer", timerSchema);

module.exports = Timer;
