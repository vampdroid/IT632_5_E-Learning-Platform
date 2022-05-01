const router = require('express').Router();
//let Instructor = require('../models/instructor.model');

const jwt = require('jsonwebtoken')
//user model
let User = require('../models/user.model');

const verifyJWT = require('../middleware/VerifyToken')
const Instructor = require('../models/instructor.model')
//user verification model
let UserVerify = require('../models/userVerify.model');

//email handler
const nodemailer = require('nodemailer');

//generate unique strings
const {v4: uuidv4} = require('uuid');

//env variables
require('dotenv').config();

//password handler
const bcrypt = require('bcrypt');

//nodemailer stuff
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
})

//testing sucess
transporter.verify((error, sucess) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(sucess);
    }
})

//const multer = require("multer");
const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json())
//const upload = require("../middleware/upload");
//const upload = multer({desc:'photos/'});

//adding user to database on registration
router.route('/').post(async (req, res) => {
    console.log(req.body)
    const salt = 10;
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: passwordHash,
            role: "stu",
            city: req.body.city
        })
        res.json({status: 'ok', email: req.body.email})
    } catch (err) {
        res.json({status: 'error', error: 'email exists', trace: err})
    }
});


//verifying user on login
router.route('/login').post(async (req, res) => {
    try {

        const userLogin = await User.findOne({
            email: req.body.email,
        });
        console.log(userLogin.email);

        if (userLogin) {
            console.log(userLogin.email);

            const validPassword = await bcrypt.compare(req.body.password, userLogin.password);

            console.log(validPassword);


            if (!validPassword) {
                res.status(400).json({error: "password Invalid Credential"});
            } else {
                const token = jwt.sign({user: userLogin}, process.env.SECRET);
                res.status(200).json({messgae: "Login Success", token: token,user:userLogin});
            }
        } else {
            res.status(400).json({error: "email Invalid Credential"});
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({Error: "Login Failed!!!"});
    }
});


router.route('/admin/login').post(async (req, res) => {
    try {

        const userLogin = await User.findOne({
            email: req.body.email,
            role:'admin'
        });
        console.log(userLogin.email);

        if (userLogin) {
            console.log(userLogin.email);

            const validPassword = await bcrypt.compare(req.body.password, userLogin.password);

            console.log(validPassword);


            if (!validPassword) {
                res.status(400).json({error: "password Invalid Credential"});
            } else {
                const token = jwt.sign({user: userLogin}, process.env.SECRET);
                res.status(200).json({messgae: "Login Success", token: token,user:userLogin});
            }
        } else {
            res.status(400).json({error: "email Invalid Credential"});
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({Error: "Login Failed!!!"});
    }
});

router
    .get('/instructor',(req, res, next) => {
        if(req.body.instructorID)
            req.body._id = mongoose.Types.ObjectId(req.body._id);
        Instructor
            .aggregate([{
                $match:req.body
            }]).lookup({
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'userData'
            })
            .then(instructors => {
                if (!instructors) {
                    res.status(404).json({
                        error: "request not created"
                    })
                } else {
                    res.status(200)
                        .json(instructors);
                }
            })
            .catch(err => next(err));
    })
    .get('/instructor/:instructorID',(req, res, next) => {

        if(req.params.instructorID)
            req.body._id = mongoose.Types.ObjectId(req.params.instructorID);

        Instructor
            .aggregate([{
                $match:req.body
            }]).lookup({
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'userData'
        })
            .then(instructors => {
                if (!instructors) {
                    res.status(404).json({
                        error: "request not created"
                    })
                } else {
                    res.status(200)
                        .json(instructors);
                }
            })
            .catch(err => next(err));
    })
    .post('/instructor', verifyJWT, (req, res, next) => {
        Instructor.findOne({user: req.user._id})
            .then(instructor => {
                // console.log(instructor);
                if (instructor.status == true) {
                    res.status(200)
                        .json({error: "you are already instructor"})
                    return;
                }
                if (instructor) {
                    res.status(200)
                        .json({error: "you had send request already"})
                    return;
                }
                const data = req.body;
                data.user = req.user._id;
                data.status = false;
                Instructor.create(data)
                    .then((instructor) => {
                        if (!instructor) {
                            res.status(404).json({
                                error: "request not created"
                            })
                        } else {
                            res.status(200)
                                .json(instructor);
                        }
                    })
                    .catch((err) => next(err))
            })
            .catch(err=>next(err))
    })
    // .get('/instructor', (req, res, next) => {
    //
    //     console.log(req.body)
    //     Instructor
    //         .aggregate([{
    //         $match:req.body
    //         }]).lookup({
    //             from: 'users',
    //             localField: 'user',
    //             foreignField: '_id',
    //             as: 'userData'
    //         })
    //         .then(instructors => {
    //             if (!instructors) {
    //                 res.status(404).json({
    //                     error: "request not created"
    //                 })
    //             } else {
    //                 res.status(200)
    //                     .json(instructors);
    //             }
    //         })
    //         .catch(err => next(err));
    // })
    .put('/instructor/:instructorId', (req, res, next) => {
        Instructor.findById(req.params.instructorId)
            .then(async (instructor) => {
                if (!instructor) {
                    res.status(400).json({
                        error: "Instructor request not found"
                    })
                } else {
                    await User.findById(instructor.user)
                        .then((user) => {
                            if (!user) {
                                res.status(400).json({
                                    error: "Instructor request not found"
                                })
                            }
                            user.role = "ins";
                            user.save();
                        })
                    instructor.status = true;
                    instructor.save()
                        .then((instructor) => {

                            if (!instructor) {
                                res.status(404)
                                    .json({
                                        error: "Request updation error"
                                    })
                            } else {
                                res.status(200)
                                    .json(instructor)
                            }
                        })
                }
            })
            .catch(err => next(err));
            
    })

.get('/student',(req,res,next)=>{
    if(req.body._id)
        req.body._id = mongoose.Types.ObjectId(req.body._id);
    User
        .aggregate([{
            $match: {
                ...req.body,
                role: 'stu'
            },
        },
        {
            $lookup: {
                from: 'enrollments',
                localField: '_id',
                foreignField: 'user',
                as: 'enrolled'
            }
        },
            {
                "$addFields": {
                    "enrollments": {
                        "$size":  "$enrolled"
                    }
                }
            },])
        .then(instructors => {
            if (!instructors) {
                res.status(404).json({
                    error: "request not created"
                })
            } else {
                res.status(200)
                    .json(instructors);
            }
        })
        .catch(err => next(err));

})
module.exports = router;