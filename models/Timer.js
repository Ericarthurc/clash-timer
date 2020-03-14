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
      days: {
        type: Number,
        required: true,
        min: 0
      },
      hours: {
        type: Number,
        required: true,
        min: 0,
        max: 23
      },
      minutes: {
        type: Number,
        required: true,
        min: 0,
        max: 59
      }
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
