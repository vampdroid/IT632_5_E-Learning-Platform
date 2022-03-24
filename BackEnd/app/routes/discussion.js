const router = require('express').Router();
let Discussion = require('../models/discussion.model');

router.route('/add').post((req,res) => {
    const query = req.body.query;
    const course = req.body.course;
    const user = req.body.user;
    const reply_id = req.body.reply_id;
    
    const newDiscussion = new Discussion({query,course,user,reply_id});
    newDiscussion.save()
        .then(() => res.json("Comment added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;