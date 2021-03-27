const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    name: { type: String },
    date: { type: Date },
    // timeSlot: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointment", appointmentSchema);
