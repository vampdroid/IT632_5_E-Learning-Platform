const router = require('express').Router();
let Address = require('../models/address.model');
let City = require('../models/city.model');
let State = require('../models/state.model');

router.route('/add').post((req,res) => {
    const user = req.body.user;
    const city = req.body.city;

    const newAddress = new Address({user,city});
    newAddress.save()
        .then(() => res.json("Address added"))
        .catch(err => res.status(400).json("error:"+err));
});



router.route('/add-state').post((req,res) => {
    const name = req.body.name;
    const newState = new State({name});
    newState.save()
        .then(() => res.json("State added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route('/display-state').get((req,res)=>{
    const data = State.find({});
    console.log(data);
});

router.route('update-state').post((req,res)=>{
    const data = req.body;
    User.updateOne({name:req.body.name},
        {$set:data}
    );
});

router.route('delete-state').post((req,res)=>{
    const data = req.body;
    User.deleteOne({name:req.body.name}
    );
});

router.route('/add-city').post((req,res) => {
    const name = req.body.name;
    const state = req.body.state;

    const newCity = new City({name,state});
    newCity.save()
        .then(() => res.json("City added"))
        .catch(err => res.status(400).json("error:"+err));
});

router.route('/display-city').get((req,res)=>{
    const data = City.find({});
    console.log(data);
});

router.route('update-city').post((req,res)=>{
    const data = req.body;
    User.updateOne({name:req.body.name},
        {$set:data}
    );
});

router.route('delete-city').post((req,res)=>{
    const data = req.body;
    User.deleteOne({name:req.body.name}
    );
});

// router.route('/display-city').get((req,res)=>{
//     const data = City.find({});
//     console.log(data);
// });





module.exports = router;
// const router = require('express').Router();
// let City = require('../models/city.model');
// let State = require('../models/state.model');
//
// router.route('/add-state').post((req,res) => {
//     const name = req.body.name;
//     const newState = new State({name});
//     newState.save()
//         .then(() => res.json("State added"))
//         .catch(err => res.status(400).json("error:"+err));
// });
//
// router.route('/add-city').post((req,res) => {
//     const name = req.body.name;
//     const state = req.body.state;
//
//     const newCity = new City({name,state});
//     newCity.save()
//         .then(() => res.json("City added"))
//         .catch(err => res.status(400).json("error:"+err));
// });
//
// module.exports = router;