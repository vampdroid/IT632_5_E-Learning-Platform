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

router
    .post("/:courseId/add", (req, res, next) => {
        mongodb.MongoClient.connect(process.env.DB_URL_MONGO)
            .then(client => {
                console.log(req.files.content);
                const name = req.files.content.name.slice(0, -4) + req.params.courseId;
                console.log(name);
                var db = client.db("videos");
                const bucket = new mongodb.GridFSBucket(db);
                const videoUploadStream = bucket.openUploadStream(name);
                const videoReadStram = fs.createReadStream(req.files.content.tempFilePath);
                videoReadStram.pipe(videoUploadStream);

                videoUploadStream.on('close', () => {
                    console.log("create");
                    res.status(200);
                    Content.create({
                        course: req.params.courseId,
                        title: req.body.title,
                        description: req.body.description,
                        video: name,
                        contentType: req.files.content.mimetype
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

            })
            .catch(err => {
                next(err);
            })
    })
    .get("/:courseId/:nameId/video", async (req, res, next) => {
        const range = req.headers.range;
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
                        const videoSize = video.length;
                        const start = Number(range.replace(/\D/g, ""));
                        const CHUNK_SIZE = 10 ** 6;
                        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
                        const contentLength = end - start + 1;
                        const headers = {
                            'Content-range': `bytes ${start}-${end}/${videoSize}`,
                            "Accept-range": "bytes",
                            "Content-Length": contentLength,
                            'Content-Type': "video/mp4",
                        }
                        res.writeHead(206, headers);
                        const bucket = new mongodb.GridFSBucket(db,{bucketName:"fs"});

                        const downloadStream = bucket.openDownloadStreamByName(video.filename, {
                            start, end
                        })
                        console.log(" start ",start," end ",end)
                        // streamCounter++;
                        downloadStream.pipe(res);

                    })
                    .catch(err => next(err));
            })
            .catch(err => next(err));

    })
module.exports = router;