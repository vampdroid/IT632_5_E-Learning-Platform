const mongoose = require("mongoose");

const userVerifySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  uniqueString: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date
  },
  expiresAt: {
    type: Date
  }
});

module.exports = mongoose.model("userVerify", userVerifySchema);
