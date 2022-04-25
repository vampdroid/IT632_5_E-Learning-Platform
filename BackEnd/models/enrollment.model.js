const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
      },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'courses'
      },
    status:{
        type:String, //en - Enrolled //un - Unenrolled //cp - Completed
        required:true
    },
    progress:{
        type:Number,
        default:0 //it will increment by 1 if the user watches 80% of the video
    },
    content: { //Last video that user saw, or incomplete
        type: mongoose.Schema.Types.ObjectId,
        ref:'contents'
    },
    duration:{ //timestamp of last video
        type:String,
    }
 });

 
 module.exports = mongoose.model("enrollments", enrollmentSchema);