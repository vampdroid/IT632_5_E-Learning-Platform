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

router.route('/add-city').post((req,res) => {
    const name = req.body.name;
    const state = req.body.state;

    const newCity = new City({name,state});
    newCity.save()
        .then(() => res.json("City added"))
        .catch(err => res.status(400).json("error:"+err));
});

module.exports = router;