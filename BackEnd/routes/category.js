const router = require('express').Router();
let User = require('../models/category.model');

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;

    const newCat = new User({name,description});
    newCat.save()
        .then(() => res.json("Category added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;