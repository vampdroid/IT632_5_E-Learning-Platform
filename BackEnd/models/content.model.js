const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'courses'
      },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    video:{
        type:String,
        required:false
    },
    contentType:{
        type:String,
        required:true
    }
 });

 
 module.exports = mongoose.model("contents",contentSchema);