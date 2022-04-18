const router = require('express').Router();
//let Instructor = require('../models/instructor.model');

//user model
let User = require('../models/user.model');

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
  auth:{
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  }
})

//testing sucess
transporter.verify((error, sucess) => {
  if(error){
    console.log(error);
  }
  else{
    console.log("Ready for messages");
    console.log(sucess);
  }
})

//const multer = require("multer");
const express = require('express');
const app = express();

app.use(express.json())
//const upload = require("../middleware/upload");
//const upload = multer({desc:'photos/'});

//adding user to database on registration
router.route('/add').post(async (req, res) => {
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
    })
    res.json({ status: 'ok', email: req.body.email })
  } catch (err) {
    res.json({ status: 'error', error: 'email exists' })
  }
});


//verifying user on login
router.route('/signIn').post(async (req, res) => {
  try {

    const userLogin = await User.findOne({
      email: req.body.email,
    });
    console.log(userLogin.email);

    if (userLogin) {
      console.log(userLogin.email);

      const validPassword = await bcrypt.compare(req.body.passwd, userLogin.password);
      
      console.log(validPassword);


      if (!validPassword) {
        res.status(400).json({ error: "password Invalid Credential" });
      } else {
        res.status(200).json({ messgae: "Login Success", email: req.body.email });
      }
     }
     else {
      res.status(400).json({ error: "email Invalid Credential" });
    }
  }
  catch (err) {
    console.log(err);
    res.status(400).json({ Error: "Login Failed!!!" });
  }
});

module.exports = router;