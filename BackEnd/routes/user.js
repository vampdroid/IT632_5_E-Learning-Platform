const router = require('express').Router();
//let Instructor = require('../models/instructor.model');

const jwt = require('jsonwebtoken')
//user model
let User = require('../models/user.model');

//const authorization = require('../middleware/authorization')

const verifyJWT = require('../middleware/VerifyToken')
const Instructor = require('../models/instructor.model')

//user verification model
let UserVerify = require('../models/userVerify.model');
const crypto = require("crypto");


//email handler
const nodemailer = require('nodemailer');

//generate unique strings
//const {v4: uuidv4} = require('uuid');

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


// router.route('/auth').get(authorization(),(req, res,next) => {
//     console.log("information");
// });


//adding user to database on registration
router.route('/').post(async (req, res) => {
    console.log(req.body)
    const salt = 10;
    const passwordHash = await bcrypt.hash(req.body.password, salt);

        let newUser = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: passwordHash,
            role: "stu",
            city: req.body.city
        })
        if(!newUser){
            return res.json({status: 'error', error: 'email exists', trace: err})
        }

        const token = await UserVerify.findOne({ userid: newUser._id });
        if (token) {
              await UserVerify.deleteOne()
        };
        const userid = newUser._id;
        let resetToken = crypto.randomBytes(32).toString("hex");

        await new UserVerify({
            userid: userid,
            token: resetToken,
            createdAt: Date.now(),
          }).save();
          const link = `https://localhost:4000/user/verify-account/${resetToken}/${userid}`;
          console.log(link);


          const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: newUser.email,
            subject: "Verification Email",
            html: `
            <body>
            <h1>Verify Your Email </h1>
            <hr>
            <h3>Important: This link will be valid for only 1 Hour! </h3>
            <p> Click <a href=${link}>here</a> to verify your account. </p>
            <hr>
            </body> `
          }

          transporter.sendMail(mailOptions)
          .then(() => {
              console.log("Mail Sent!")
          })
          .catch((err) => {
              console.log(err);
          });

        return res.json({status: 'ok', email: req.body.email})


    //    res.json({status: 'ok', email: req.body.email})
    // .catch (err) {
    //     res.json({status: 'error', error: 'email exists', trace: err})
    // }
});

        console.log(req.body);

        User.updateOne(req.params.userId,req.body)
            .then((response)=>{
                if(response.modifiedCount==0 && response.matchedCount ==0) {
                    res.status(200)
                        .json({
                            error:"user not found"
                        })
                    return;
                }

                if(response.modifiedCount==0 && response.matchedCount !=0) {
                    res.status(200)
                        .json({
                            error:"user not updated"
                        })
                    return;
                }
                response.success="user updated";
                res.status(200)
                    .json(response);
            })
            .catch(err=>next(err));
    })
;

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
                return res.status(400).json({error: "password Invalid Credential"});
            }
            else
            {
                if(!userLogin.verified)
                {
                    res.json({
                        status: "FAILED",
                        message: "user hasn't been verified"
                    });
                }
                else
                {
                    const token = jwt.sign({user: userLogin}, process.env.SECRET);
                    return res.status(200).json({messgae: "Login Success", token: token,user:userLogin});
                }
            }
        } else {
            res.status(400).json({error: "email Invalid Credential"});
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({Error: "Login Failed!!!"});
    }
});

router.route('/verify-account/:token/:userid').get( async (req, res) => {
    const token = await UserVerify.findOne({ token : req.params.token })
    if(token)
    {
        const user = await User.findOne({ userId : req.params.userid })
        if(user)
        {
            const update = await User.updateOne({ _id : req.params.userid }, {verified : true})
            if(update)
            {
                return res.json("account verified successfully")
            }
            else{
                return res.json("error verifying account")
            }
        }
    }
  })

router.route('/changePassword').post(async(req,res)=>{
    const newPass = req.body.newPass;
    const confirmPass = req.body.confirmPass;
    const email = req.body.email;

    if(newPass == confirmPass){
        const salt = 10;
        const passwordHash = await bcrypt.hash(req.body.newPass, salt);

        User.updateOne({email: email},{password:passwordHash})
        .then((result)=>{
            return res.json({
                status: "ok",
                message: "password has been changed to new password"
            })
        })
        .catch((error)=>{
            return res.json({
                status: "Failed",
                message: "password not changed try again"
            })
        })
    }
    else{
        return res.json({
            status: "failed",
            message: "confrim and new passwords do not match"
        })
    }
});

router.route('/resetPassword/:token/:userid').post( async (req, res) => {
    const newpass = req.body.newpassword;
    console.log("token: " + req.params.token + " " + "userid: " + req.params.userid)
    console.log("new password recieved" + newpass);

    const salt = 10;
    const newpwd = await bcrypt.hash(newpass, salt)
    console.log(newpwd);


    const token = await UserVerify.findOne({ token : req.params.token })
      if(token)
      {
          const user = await User.findOne({ userId : req.params.userid })
          if(user)
          {
              const update = await User.updateOne({ _id : req.params.userid }, {password : newpwd})
              if(update)
              {
                  res.json("password changed successfully")

              }
          }
      }
  })

router.route('/forgotPassword').post( async (req, res) => {
    const email = req.body.email;
    let userid;
    console.log("email recieved: " + email)
    const user = User.findOne({email})
    .then((result) => {
      if(result == null)
      {
        return res.json("user not found");
      }
      else{
        userid = result._id;
      }
    })

    const token = await UserVerify.findOne({ _id: user._id });
    if (token) {
          await UserVerify.deleteOne()
    };

    let resetToken = crypto.randomBytes(32).toString("hex");

    await new UserVerify({
      userid: userid,
      token: resetToken,
      createdAt: Date.now(),
    }).save();

    const link = `https://localhost:4000/user/resetPassword/${resetToken}/${userid}`;
    console.log(link)

  //  const currentUrl = "https://localhost:4000/";

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Password forgot Request",
      html: `
      <body>
      <h1>Password forgot Request </h1>
      <hr>
      <h3>Important: This link will be valid for only 1 Hour! </h3>
      <p> Click <a href=${link}>here</a> to change your password. </p>
      <hr>
      </body>
      `
    }

    transporter.sendMail(mailOptions)
      .then(() => {
          res.json("Mail Sent!")
      })
      .catch((err) => {
          res.json(err);
      });
  })


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
                return res.status(400).json({error: "password Invalid Credential"});
            } else {
                const token = jwt.sign({user: userLogin}, process.env.SECRET);
                return res.status(200).json({messgae: "Login Success", token: token,user:userLogin});
            }
        } else {
            return res.status(400).json({error: "email Invalid Credential"});
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({Error: "Login Failed!!!"});
    }
});

router
    .get('/instructor',(req, res, next) => {
        if(req.body.instructorID)
            req.body._id = mongoose.Types.ObjectId(req.body.instructorID);
        Instructor.find(req.body)
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
            .aggregate([
                {
                $match: req.body
            }, {
                    $lookup: {
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'userData'
                    }
            }])
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

    .get('/:userId',(req,res,next)=>{
        User
            .aggregate([{
                $match: {
                    _id : mongoose.Types.ObjectId(req.params.userId)
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
            .then(user => {
                if (!user) {
                    res.status(404).json({
                        error: "user not found"
                    })
                } else {
                    res.status(200)
                        .json(user);
                }
            })
            .catch(err => next(err));
    })

module.exports = router;