const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile_picture: {
    type: String
  },
  dob: {
    type: Date
  },
  bio: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  role: {     //"ins" for instructor and "stu" for student
    type: String,
    required: true,
  },
 }, {
    timestamps: true,
});

module.exports = mongoose.model("users", userSchema);
