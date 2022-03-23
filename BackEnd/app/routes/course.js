const router = require('express').Router();
let Course = require('../models/course.model');
let Content = require('../models/content.model');
router.route('/add-course').post((req,res) => {
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