const router = require('express').Router();
let Instructor = require('../models/instructor.model');
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

    if(role == "ins"){
        const user = newUser;
        const expertise = req.body.expertise;
        const works_as = req.body.works_as;
        const qualification = req.body.qualification;
        const status = req.body.status;

        const newInstructor = new Instructor({user,expertise,works_as,qualification,status});
        newInstructor.save()
        .then(() => res.json("Instructor added"))
        .catch(err => res.status(400).json("error:"+err));
    }
});

module.exports = router;