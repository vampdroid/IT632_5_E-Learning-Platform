const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'users'
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'cities'
  }
 });

 module.exports = mongoose.model("addresses", addressSchema);
