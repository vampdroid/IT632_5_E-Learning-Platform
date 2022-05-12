const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');
const fs = require('fs')
var bodyparser = require("body-parser");
var fileUpload = require("express-fileupload")
const mongoose = require("mongoose");
const mongodb = require('mongodb')
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended: true}));
router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

const UploadContet = require('../middleware/UploadContent')
router
    .post("/:courseId",
        UploadContet,
        (req, res, next) => {

        if(!req.body.video && !req.files){
            res.status(400)
                .json({
                    error:"content not uploaded"
                })
            return;
        }
       console.log(req.body);
        res.status(200);
        Content.create({
            course: req.params.courseId,
            title: req.body.title,
            description: req.body.description,
            video: req.body.video,
            contentType: req.body.contentType
        })
            .then((content) => {
                if (content) {
                    res.status(200)
                        .json(content);
                    return;
                } else {
                    res.status(422)
                        .json({
                            error: "content not added"
                        });
                    return;
                }
            })
    })
    .put("/:courseId/:contentId",(req,res,next)=>{
        Content.findById(req.params.contentId)
            .then(content=>{
                if(!content){
                    res.status(400)
                        .json({
                            error:"content not found"
                        })
                }
                next()
            })
    },
        UploadContet,
        (req,res,next)=>{
        console.log(req.params.contentId)
        console.log(req.body);
        res.status(200);
        Content.updateOne({_id:req.params.contentId},req.body)
            .then((response) => {
                if(response.modifiedCount==0 && response.matchedCount ==0) {
                    res.status(200)
                        .json({
                            error:"content not found"
                        })
                    return;
                }

                if(response.modifiedCount==0 && response.matchedCount !=0) {
                    res.status(200)
                        .json({
                            error:"content not updated"
                        })
                    return;
                }
                response.success="content updated";
                res.status(200)
                    .json(response);
            })
    })
    .get("/:courseId/:nameId/video", async (req, res, next) => {
        const range = req.headers.range;
        console.log(range);
        if (!range) {
            res.status(400).send("Requied Range Header");
        }
        const content = await Content.findOne({course: req.params.courseId, _id: req.params.nameId})
        if (!content) {
            res.status(404)
                .json({
                    error: "content not found"
                })
            return;
        }

        await mongodb.MongoClient.connect(process.env.DB_URL_MONGO)
            .then(client => {
                const db = client.db("videos");
                db.collection('fs.files').findOne({filename: content.video})
                    .then(async video => {
                        console.log(video)
                        if (!video) {
                            res.status(404).send("No video uploaded!");
                            return;
                        }

                        // Create response headers
                        const videoSize = video.length;
                        const start = Number(range.replace(/\D/g, ""));
                        const end = videoSize - 1;

                        const contentLength = end - start + 1;
                        const headers = {
                            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                            "Accept-Ranges": "bytes",
                            "Content-Length": contentLength,
                            "Content-Type": "video/mp4",
                        };

                        // HTTP Status 206 for Partial Content
                        res.writeHead(206, headers);

                        // Get the bucket and download stream from GridFS
                        const bucket = new mongodb.GridFSBucket(db);
                        const downloadStream = bucket.openDownloadStreamByName(video.filename, {
                            start
                        });
                        downloadStream.pipe(res);

                        // const videoSize = video.length;
                        // const start = Number(range.replace(/\D/g, ""));
                        // const CHUNK_SIZE = 10 ** 6;
                        // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
                        // const contentLength = end - start + 1;
                        // const headers = {
                        //     'Content-range': `bytes ${start}-${end}/${videoSize}`,
                        //     "Accept-range": "bytes",
                        //     "Content-Length": contentLength,
                        //     'Content-Type': "video/mp4",
                        // }
                        // res.writeHead(206, headers);
                        // const bucket = new mongodb.GridFSBucket(db,{bucketName:"fs"});
                        //
                        // if(start<end) {
                        //     const downloadStream = bucket.openDownloadStreamByName(video.filename, {
                        //         start
                        //     })
                        //     downloadStream.pipe(res);
                        // }
                        // console.log(" start ",start," end ",end)
                        // streamCounter++;

                    })
                    .catch(err => next(err));
            })
            .catch(err => next(err));

    })
module.exports = router;