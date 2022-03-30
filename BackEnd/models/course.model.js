const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
      },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'categories'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:Buffer,
        required:true
    },
    contentType:{
        type:String,
        required:true
    }
 });

 
 module.exports = mongoose.model("courses", courseSchema);