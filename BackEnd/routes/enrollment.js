const router = require('express').Router();
let Enrollment = require('../models/enrollment.model');
const express = require('express')

router.use(express.json());
const VerifyJwt = require('../middleware/VerifyToken')

router
    .get('/',VerifyJwt,(req,res,next)=>{
        Enrollment.find({
            user: req.user._id,
        })
            .then(enrollments => {
                if(!enrollments){
                    res.status(400)
                        .json({
                            error:"Enrolled course not found"
                        })
                }
                    res.status(200)
                        .json(enrollments)

            })
            .catch(err=>next(err))
    })
    .post('/:courseId', VerifyJwt, (req, res, next) => {

        Enrollment.find({
            user: req.user._id,
            course: req.params.courseId,
        })
            .then(enrollments => {
                console.log(enrollments.length)
                if (enrollments.length!=0) {
                    res.status(400)
                        .json({
                            error: "can not enrollled1"
                        })
                    res.end();
                }
                else
                    next()
            })
            .catch(err=>next(err))

    },(req,res,next)=>{
        Enrollment.create({
            user: req.user._id,
            course: req.params.courseId,
            status: "en"
        })
            .then(enrollment => {
                if (!enrollment) {
                    res.status(400)
                        .json({
                            error: "can not enrollled"
                        })
                }

                res.status(200)
                    .json(enrollment);
            })
    })
    .put('/:courseId', VerifyJwt, (req, res, next) => {

        Enrollment.find({
            user: req.user._id,
            course: req.params.courseId,
        })
            .then(enrollments => {
                console.log(enrollments.length)
                if (enrollments.length==0) {
                    res.status(400)
                        .json({
                            error: "can not enrollled1"
                        })
                    res.end();
                }
                else
                    next()
            })
            .catch(err=>next(err))

    },(req,res,next)=>{
        Enrollment.updateOne(
            { user: req.user._id,
                course: req.params.courseId,},
            {
            status: req.body.status
        })
            .then(response => {
                if(response.modifiedCount==0 && response.matchedCount ==0) {
                    res.status(200)
                        .json({
                            error:"Enrollment not found"
                        })
                    return;
                }

                if(response.modifiedCount==0 && response.matchedCount !=0) {
                    res.status(200)
                        .json({
                            error:"Enrollment not updated"
                        })
                    return;
                }
                response.success="Enrollment updated";
                res.status(200)
                    .json(response);
            })
    })
    .delete('/:courseId',VerifyJwt,(req,res,next)=>{
        Enrollment.deleteOne({user: req.user._id,
            course: req.params.courseId})
            .then((response)=>{
                if(response.deletedCount == 0){
                    res.status(404)
                        .json({error: "Enrollment not Found"});
                    return;
                }
                response.success="Enrollment deleted";
                res.status(200)
                    .json(response);
            }).catch((err)=>{
            next(err);
        });
    })


router.route('/add').post((req, res) => {
    const user = req.body.user;
    const course = req.body.course;
    const status = req.body.status;
    const progress = req.body.progress;
    const content = req.body.content;
    const duration = req.body.duration;
    const newEnroll = new Enrollment({user, course, status, progress, content, duration});
    newEnroll.save()
        .then(() => res.json("Enroll added"))
        .catch(err => res.status(400).json("error:" + err));
});

module.exports = router;