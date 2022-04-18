const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');
const mongodb = require('mongodb')
const fs = require('fs')
var bodyparser = require("body-parser");
var fileUpload = require("express-fileupload")

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))


router
    .post("/:courseId/add",async (req,res,next)=>{
        await mongodb.MongoClient.connect(process.env.DB_URL_MONGO)
            .then(async client => {
                console.log(req.files.thumbnail);
                const name = req.files.thumbnail.name.slice(0,-4);
                var db = client.db("videos");
                console.log(name);
                const bucket = new mongodb.GridFSBucket(db);
                const videoUploadStream = await bucket.openUploadStream(name);
                const videoReadStram = await fs.createReadStream(req.files.thumbnail.tempFilePath);
                await videoReadStram.pipe(videoUploadStream);
                // console.log("create");
                // res.status(200);
                // await  Content.create({
                //     course:req.params.courseId,
                //     title:req.body.title,
                //     description:req.body.description,
                //     video:name,
                //     contentType:req.files.thumbnail.mimetype
                // })
                //     .then((content)=>{
                //         if(content){
                //             res.status(200)
                //                 .json(content);
                //             return;
                //         }
                //         else{
                //             res.status(422)
                //                 .json({
                //                     error:"content not added"
                //                 });
                //             return;
                //         }
                //     })
                res.end("Done..");
            })
            .catch(err=>{
                next(err);
            })
    })
    .get("/:courseId/:nameId/video",async(req,res,next)=>{
        const range = req.headers.range;
        if(!range){
            res.status(400).send("Requied Range Header");
        }
       await mongodb.MongoClient.connect("mongodb://localhost:27017")
        .then(client=>{
            const db = client.db("videos");
           
            db.collection('fs.files').findOne({filename:req.params.nameId})
            .then(video=>{
                
                const videoSize = video.length;
                const start = Number(range.replace(/\D/g,""));
                
                console.log("1"+ " "+ start);
            
                const CHUNK_SIZE = 10**6;
                console.log("3");
                const end = Math.min(start+CHUNK_SIZE,videoSize-1);
                const contentLength = end - start +1 ;
                console.log("4");
                const headers={
                    'Content-range':`bytes ${start}-${end}/${videoSize}`,
                    "Accept-range":"bytes",
                    "Content-Length":contentLength,
                    'Content-Type':"video/mp4",
                }
                console.log(video);
                res.writeHead(206,headers);

                const bucket = new mongodb.GridFSBucket(db);
                console.log(req.params.nameId);
                const downloadStream = bucket.openDownloadStreamByName(req.params.nameId,{
                    start,end
                })

                downloadStream.pipe(res);
            })
            .catch(err=>next(err));
        })
        .catch(err=>next(err));

    })
module.exports = router;