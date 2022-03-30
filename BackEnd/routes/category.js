const router = require('express').Router();
let User = require('../models/category.model');
const bodyparser = require('body-parser')

router.use(bodyparser.json())

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    console.log(req)
    const newCat = new User({name,description});
    newCat.save()
        .then(() => res.json("Category added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;