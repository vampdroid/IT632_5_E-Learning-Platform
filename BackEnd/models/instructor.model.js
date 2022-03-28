const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
    },
    expertise:{
        type:String
    },
    works_as:{
        type:String
    },
    qualification:{
        type:String
    },
    status:{
        type: Boolean
    }
 });

 module.exports = mongoose.model("instructor_details", instructorSchema);