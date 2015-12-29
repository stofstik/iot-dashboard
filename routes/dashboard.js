var express = require('express');
var router = express.Router();

var doorLog = ['some', 'data', 'yay!'];

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', {
	 title: 'Dashboard!',
	 doorLog: doorLog
  });
});

module.exports = router;
