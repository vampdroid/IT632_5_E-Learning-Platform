const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'courses'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'users'
  },
  reply_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'discussion'
  }
});

module.exports = mongoose.model("discussion", discussionSchema);