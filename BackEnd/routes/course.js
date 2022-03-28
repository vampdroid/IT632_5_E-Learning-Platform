const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');
router.route('/').post((req,res) => {
    const user = req.body.user;
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    const thumbnail = req.body.thumbnail;
    const newCourse = new Course({user,category,title,description,thumbnail});
    newCourse.save()
        .then(() => res.json("Course added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route("/:courseId")
    .get((req,res,next)=>{
        const id = req.params.courseId;
        Course.find({_id:id})
            .then(course=>{
                console.log(course)
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