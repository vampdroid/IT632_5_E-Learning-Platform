const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');

const User = require('../models/user.model')
const Category = require('../models/category.model')
var bodyparser = require("body-parser");
var fileUpload = require("express-fileupload")
const mongodb = require("mongodb");

const verifyJWt = require('../middleware/VerifyToken')
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(fileUpload())

router
    .get('/',(req,res,next)=>{
        if(req.body._id)
            req.body._id=  mongoose.Types.ObjectId(req.body._id)
        if(req.body.user)
            req.body.user=  mongoose.Types.ObjectId(req.body.user)
        if(req.body.category)
            req.body.category=  mongoose.Types.ObjectId(req.body.category)

        Course
            .aggregate([{
                $match:req.body
            },
                {
                    $project: {
                        "thumbnail": 0, "contentType": 0
                    }
                },
                {
                    $lookup:{
                           from: 'users',
                           localField: 'user',
                           foreignField: '_id',
                           as: 'userData'
                       }
                },
                {
                    $lookup:{
                        from: 'category',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'categorys'
                    }
                },
                {
                    $lookup: {
                        from: 'contents',
                        localField: '_id',
                        foreignField: 'course',
                        as: 'Contents'
                    }
                },
                {
                    "$unwind": "$userData"
                }
            ])
            .then(course=>{
                res.statusCode=200;
                res.setHeader('content-type','application/json');
                res.json(course);
            })
            .catch(err=>next(err));
    })
    .get('/popular',(req,res,next)=>{


        Course
            .aggregate([{
                $match:{
                    $or:[
                        {"title":{$regex:req.body?.search??""}},
                        {"description":{$regex:req.body?.search??""}}
                    ]
                }
            },
                {
                    $project: {
                        "thumbnail": 0, "contentType": 0
                    }
                },
                {
                    $lookup:{
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'userData'
                    }
                },
                {
                    $lookup:{
                        from: 'categories',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'Categorys'
                    }
                },
                {
                    $lookup: {
                        from: 'contents',
                        localField: '_id',
                        foreignField: 'course',
                        as: 'Contents'
                    }
                },
                {
                    $lookup: {
                        from: 'enrollments',
                        localField: '_id',
                        foreignField: 'course',
                        as: 'Enrollments'
                    }
                },
                {
                    "$unwind": "$userData"
                },{
                    "$addFields": {
                        "enrollments": {
                            "$size":  "$Enrollments"
                        }
                    }
                },{
                    $sort:{"enrollments":-1}
                }
            ])
            .then(course=>{
                res.statusCode=200;
                res.setHeader('content-type','application/json');
                res.json(course);
            })
            .catch(err=>next(err));

})
    .get('/search',(req,res,next)=>{
        Course
            .aggregate([{
                $match:{
                    $or:[
                        {"title":{$regex:req.body?.search??""}},
                        {"description":{$regex:req.body?.search??""}}
                    ]
                }
            },
                {
                    $project: {
                        "thumbnail": 0, "contentType": 0
                    }
                },
                {
                    $lookup:{
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'userData'
                    }
                },
                {
                    $lookup:{
                        from: 'categories',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'Categorys'
                    }
                },
                {
                    $lookup: {
                        from: 'contents',
                        localField: '_id',
                        foreignField: 'course',
                        as: 'Contents'
                    }
                },
                {
                    "$unwind": "$userData"
                }
            ])
            .then(course=>{
                res.statusCode=200;
                res.setHeader('content-type','application/json');
                res.json(course);
            })
            .catch(err=>next(err));
    })
    .get('/:courseId',(req,res,next)=>  {
        req.body._id=  mongoose.Types.ObjectId(req.params.courseId)
        if(req.body.user)
            req.body.user=  mongoose.Types.ObjectId(req.body.user)
        if(req.body.category)
            req.body.category=  mongoose.Types.ObjectId(req.body.category)

        Course
            .aggregate([{
                $match:req.body
            },
                {
                    $project: {
                        "thumbnail": 0, "contentType": 0
                    }
                },
                {
                    $lookup:{
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'userData'
                    }
                },
                {
                    $lookup:{
                        from: 'category',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'categorys'
                    }
                },
                {
                    $lookup: {
                        from: 'contents',
                        localField: '_id',
                        foreignField: 'course',
                        as: 'Contents'
                    }
                },
                {
                    "$unwind": "$userData"
                }
            ])
            .then(course=>{
                res.statusCode=200;
                res.setHeader('content-type','application/json');
                res.json(course);
            })
            .catch(err=>next(err));
    })

    .post('/',verifyJWt,async (req,res,next) => {
        // console.log(req.files.thumbnail);
    const errors={};
    const userData = {
        user:req.user._id,
        category:req.body.category,
        title:req.body.title,
        description:req.body.description,
        thumbnail: req.files.thumbnail.data,
        contentType:req.files.thumbnail.mimetype
    }
    if(req.user.role!=="ins")
        errors.user="This user can not create course"
   await Category.findById(userData.category)
        .then((category)=>{
            // console.log(category)
            if(!category){
                errors.category="category not found"
            }
        })
        .catch(error=>{
            errors.category="category not found"
        })

    if(userData.title.length>100 || userData.title === undefined){
        errors.title = "course title should be less then 100 character"
    }
    if(userData.description.length>256 || userData.description === undefined){
        errors.description = "course description should be less then 256 character"
    }
    if(!userData.contentType.match(/.(jpg|jpeg|png|gif)$/))
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
                res.json({
                    _id:course._id,
                    user: course.user,
                    category: course.category,
                    title: course.title,
                    description: course.description,
                })
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
    .put( verifyJWt,(req, res, next) => {
        Course.findById(req.params.courseId)
            .then((course)=>{
                if(!course) {
                    res.statusCode = 200;
                    res.setHeader('content-type', "application/json");
                    res.json({
                        error: "Course not Found"
                    });
                }
                return course;
            })
            .then(async course=>{
                const errors = {};

                    course.category=req.body.category?req.body.category:course.category,
                    course.title= req.body.title?req.body.title:course.title,
                    course.description= req.body.description?req.body.description:course.description,
                    course.thumbnail=req.files?.thumbnail!=undefined?req.files.thumbnail.data:course.thumbnail,
                    course.contentType= req.files?.thumbnai!=undefined?req.files.thumbnail.mimetype:course.contentType
console.log(req.user)
                if (req.user.role !== "ins" && req.user._id !== course.user)
                    errors.user = "This user can update create course"
                if(course.category ) {
                    await Category.findById(course.category)
                        .then((category) => {
                            // console.log(category)
                            if (!category) {
                                errors.category = "category not found"
                            }
                        })
                        .catch(error => {
                            errors.category = "category not found"
                        })
                }

                if (course.title.length > 100) {
                    errors.title = "course title should be less then 100 character"
                }
                if (course.description.length > 256) {
                    errors.description = "course description should be less then 256 character"
                }
                if (!course.contentType.match(/.(jpg|jpeg|png|gif)$/))
                    errors.thumbnail = 'you can upload only image file';

                if (Object.keys(errors).length > 0) {
                    res.status(403);
                    res.setHeader("content-type", 'application/json');
                    res.json(errors);
                }
                else{
                    course.save()
                        .then(course=>{
                            res.status(200);
                            res.json({
                                _id:course._id,
                                user: course.user,
                                category: course.category,
                                title: course.title,
                                description: course.description,
                            })
                        })
                        .catch(err=>next(err));
                }
            })


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

// router
//     .post("/:courseId/add",(req,res,next)=>{
//         mongodb.MongoClient.connect("mongodb://localhost:27017")
//             .then(client=>{
//                 console.log(req.files.thumbnail);
//                 var db = client.db("videos");
//                 const bucket = new mongodb.GridFSBucket(db);
//                 const videoUploadStream = bucket.openUploadStream(req.files.thumbnail.filename);
//                 videoReadStram.pipe(req.files.thumbnail.buffer);
//                 res.status(200);
//                 res.end("Done..");
//             })
//             .catch(err=>{
//                 next(err);
//             })
//     })
//
// router.route('/add-content').post((req,res) => {
//     const course = req.body.course;
//     const title = req.body.title;
//     const video = req.body.video;
//     const description = req.body.description;
//     const newContent = new Content({course,title,description,video});
//     newContent.save()
//         .then(() => res.json("Content added"))
//         .catch(err => res.status(400).json("error:"+err));
// });

module.exports = router;

//post couse details
//get couse details


// post /

// get /:courseId


// 1 doc =16MB
// 15MB