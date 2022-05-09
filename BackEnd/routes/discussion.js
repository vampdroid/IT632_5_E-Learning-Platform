const router = require('express').Router();
const { response } = require('express');
let Discussion = require('../models/discussion.model');

router.route('/add').post((req,res) => {
    const query = req.body.query;
    const course = req.body.course;
    const user = req.body.user;
    
    const newDiscussion = new Discussion({query,course,user});
    newDiscussion.save()
        .then(() => res.json("Comment added"))
        .catch(err => res.status(400).json("error:"+err));
});
//////

router.route('/readComment/:_id').get((req,res) => {
    //according to course id find the response
    const id = req.params._id;
    
    const comment = Discussion.find({course: id})
        return res.status(200).json(comment)

});

router.route('/deleteComment/:_id').delete((req,res) => {
    //according to course id find the response
    const id = req.params._id;
    
    const comment = Discussion.deleteOne({_id: id})
        return res.status(200).json("Deleted Succesfully")

});
module.exports = router;