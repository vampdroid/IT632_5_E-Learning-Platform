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
    type: Buffer
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
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
   // required: true,
    ref:'cities'
  },
  contenType:{
    type:String
  }
 }, {
    timestamps: true,
});

module.exports = mongoose.model("users", userSchema);

// DB_URL=mongodb+srv://sheryjain:Classical%402@cluster0.lx6ol.mongodb.net/e-learning?retryWrites=true&w=majority
// DB_URL_MONGO=mongodb+srv://sheryjain:Classical%402@cluster0.lx6ol.mongodb.net/

