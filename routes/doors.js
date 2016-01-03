var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var doorData = {
        date: Date.now(),
        doors: []
    };
    //for all doors doordata.push doors summin'
    res.send(doorData);
});

module.exports = router;

