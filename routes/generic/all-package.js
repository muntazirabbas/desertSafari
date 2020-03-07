var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('generic/all-package', { title: 'Desert Safari' });
});

module.exports = router;
