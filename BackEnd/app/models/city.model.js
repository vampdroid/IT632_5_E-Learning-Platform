const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'states'
  }
 });

 
 module.exports = mongoose.model("cities", citySchema);