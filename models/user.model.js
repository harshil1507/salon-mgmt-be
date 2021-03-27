const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
