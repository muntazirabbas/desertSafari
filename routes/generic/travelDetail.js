var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('generic/travelDetail', { title: 'Desert Safari' });
});

module.exports = router;
