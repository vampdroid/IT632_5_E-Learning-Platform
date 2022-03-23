const router = require('express').Router();
let Enrollment = require('../models/enrollment.model');

router.route('/add').post((req,res) => {
    const user = req.body.user;
    const course = req.body.course;
    const status = req.body.status;
    const progress = req.body.progress;
    const content = req.body.content;
    const duration = req.body.duration;
    const newEnroll = new Enrollment({user,course,status,progress,content,duration});
    newEnroll.save()
        .then(() => res.json("Enroll added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;