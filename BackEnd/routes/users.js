var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  res.send('respond with a resource '+req.params.userId);
});

module.exports = router;
