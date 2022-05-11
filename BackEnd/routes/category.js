const router = require('express').Router();
let Category = require('../models/category.model');
const bodyparser = require('body-parser')
const {response} = require("express");
const mongoose = require('mongoose')
router.use(bodyparser.json())

router.route('/').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;

    const newCat = new Category({name,description});
    newCat.save()
        .then((category) => res.json(category))
        .catch(err => res.status(400).json("error:"+err));
});


router.route("/:categoryId").delete((req,res,next)=>{
    Category.deleteOne({_id:req.params.categoryId})
        .then((response)=>{
        if(response.deletedCount == 0){
            res.status(404)
                .json({error: "Category not Found"});
            return;
        }
        response.success="Category deleted";
        res.status(200)
            .json(response);
    }).catch((err)=>{
        next(err);
    });
})

router.route("/:courseId").put((req,res,next)=>{
    var newvalue= {name:req.body.name, description:req.body.description}
    Category.updateOne({_id:req.params.courseId},newvalue)
        .then((response)=>{
            if(response.modifiedCount==0 && response.matchedCount ==0) {
                res.status(200)
                    .json({
                        error:"Category not found"
                    })
                return;
            }

            if(response.modifiedCount==0 && response.matchedCount !=0) {
                res.status(200)
                    .json({
                        error:"Category not updated"
                    })
                return;
            }
            response.success="Category updated";
            res.status(200)
                .json(response);
        })
        .catch(err=>next(err));
})

router.route("/").get((req,res,next)=>{

    Category.find(req.body)
        .then((categories)=>{
            if(!categories){
                res.status(400)
                    .json({
                        error:"category not found"
                    })
                return;
            }
            res.status(200)
                .json(categories);
        })
})


router.get('/:categoryId',(req,res,next)=>{
    Category.
        aggregate([
        {
            $match:{
                _id : mongoose.Types.ObjectId(req.params.categoryId)
            },
        },
        {
            $lookup:{
                from: 'courses',
                localField: '_id',
                foreignField: 'category',
                as: 'courses'
            }
        },
        {    $lookup:{
            from: 'users',
                localField: 'courses.user',
                foreignField: '_id',
                as: 'userData'
        }
        }
        ]
    ).
    then(categories => {
        if (!categories[0]) {
            res.status(404).json({
                error: "user not found"
            })
        } else {
            res.status(200)
                .json(categories[0]);
        }
    })
        .catch(err => next(err));
})


module.exports = router;