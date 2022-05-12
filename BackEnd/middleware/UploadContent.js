const mongodb = require('mongodb')
const fs = require("fs");
const Content = require("../models/content.model");
module.exports = (req,res,next)=>{
    console.log(req.files)
    if(!req.files){
        next()
    }
    else{
    mongodb.MongoClient.connect(process.env.DB_URL_MONGO)
        .then(client => {
            console.log(req.files.content);
            var name = req.files.content.name.slice(0, -4) + req.params.courseId;
            console.log(name);
            name = name.replaceAll(' ',"");
            
            var db = client.db("videos");
            req.body.video = name
            req.body.contentType= req.files.content.mimetype
            console.log(req.body);
            const bucket = new mongodb.GridFSBucket(db);
            const videoUploadStream = bucket.openUploadStream(name);
            const videoReadStram = fs.createReadStream(req.files.content.tempFilePath);
            videoReadStram.pipe(videoUploadStream);

            videoReadStram.on('close', () => {
                console.log("create");
                next()
            })
        })
        .catch(err => {
            next(err);
        })
        }
}