var express = require('express');
var router = express.Router();

var doorData = [];

// get door data
router.get('/getData', function(req, res, next) {
    res.send(doorData);
});

// post door data
router.post('/postData/:date/:value', function(req, res, next) {
    var data = {
        date: req.params.date,
        value: req.params.value
    };
    doorData.push(data);
    if(doorData.length > 10) { // keep array small :)
        doorData.shift();
    }
    res.send("thanks for the data! :)");
});

module.exports = router;

