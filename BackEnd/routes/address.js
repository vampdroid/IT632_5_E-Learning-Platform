const router = require('express').Router();
let City = require('../models/city.model');
let State = require('../models/state.model');

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