const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const profile_picture = req.body.profile_picture;
    const dob = req.body.dob;
    const bio = req.body.bio;
    const password = req.body.password;
    const role = req.body.role;

    const newUser = new User({fname,lname,email,profile_picture,dob,bio,password,role});
    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;