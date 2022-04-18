const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');

const User = require('../models/user.model')
const Category = require('../models/category.model')
var bodyparser = require("body-parser");
var fileUpload = require("express-fileupload")
const mongodb = require("mongodb");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(fileUpload())

router.route('/')
    .get((req,res,next)=>{
        Course.find({})
            .then(course=>{
                res.statusCode=200;
                res.setHeader('content-type','application/json');
                res.json(course);
            })
            .catch(err=>next(err));
    })

    .post(async (req,res,next) => {

    const errors={};
    const userData = {
        user:req.body.user,
        category:req.body.category,
        title:req.body.title,
        description:req.body.description,
        thumbnail: req.files.thumbnail.data,
        contentType:req.files.thumbnail.mimetype
    }

    await User.findById(userData.user)
        .then((user)=>{
            console.log(user)
            if(!user){
                errors.user="User not found"
            }
            else if(user.role!=="ins")
                errors.user="This user can not create course"
        })
        .catch(error=>{
            console.log(errors)
            errors.user="User not found"
        })

   await Category.findById(userData.category)
        .then((category)=>{
            if(!category){
                errors.category="category not found"
            }
        })
        .catch(error=>{
            errors.category="category not found"
        })

    if(userData.title.length>100 || userData.title.length != undefined){
        errors.title = "course title should be less then 100 character"
    }
    if(userData.title.description>256 || userData.title.length != undefined){
        errors.description = "course description should be less then 256 character"
    }
    if(!userData.contentType.match(/\.(jpg|jpeg|png|gif)$/))
        errors.thumbnail='you can upload only image file';

    if(Object.keys(errors).length >0 ) {
        res.status(403);
        res.setHeader("content-type",'application/json');
        res.json(errors);
    }
    else {
        const newCourse = new Course(userData);
        newCourse.save()
            .then((course) => {
                // console.log(course);
                res.json("Course added")
            })
            .catch(err => res.status(400).json("error:" + err));
    }
});

router.route("/:courseId")
    .get((req,res,next)=>{
        const id = req.params.courseId;
        Course.findById(id,"-thumbnail -contentType")
            .then(course=>{
                console.log( course)
                if(course!=null){
                    res.statusCode=200;
                    res.setHeader('content-type',"application/json");
                    res.json(course);
                }
                else{
                    res.statusCode=404;
                    err = new Error("Cousr not found")
                    next(err)
                }

                })
            .catch(err=>next(err))
    })


router.route("/:courseId/image")
    .get((req,res,next)=>{
        const id = req.params.courseId;
        Course.find({_id:id},"thumbnail contentType")
            .then(course=>{
                if(course!=null){
                    res.statusCode=200;
                    res.setHeader('content-type',course[0].contentType);
                    res.end(course[0].thumbnail,'binary');
                }
                else{
                    res.statusCode=404;
                    err = new Error("Cousr not found")
                    next(err)
                }

            })
            .catch(err=>next(err))
    })
router
    .post("/:courseId/add",(req,res,next)=>{
        mongodb.MongoClient.connect("mongodb://localhost:27017")
            .then(client=>{
                console.log(req.files.thumbnail);
                var db = client.db("videos");
                const bucket = new mongodb.GridFSBucket(db);
                const videoUploadStream = bucket.openUploadStream(req.files.thumbnail.filename);
                videoReadStram.pipe(req.files.thumbnail.buffer);
                res.status(200);
                res.end("Done..");
            })
            .catch(err=>{
                next(err);
            })
    })

router.route('/add-content').post((req,res) => {
    const course = req.body.course;
    const title = req.body.title;
    const video = req.body.video;
    const description = req.body.description;
    const newContent = new Content({course,title,description,video});
    newContent.save()
        .then(() => res.json("Content added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;

//post couse details
//get couse details


// post /

// get /:courseId


// 1 doc =16MB
// 15MB