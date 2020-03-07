var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.send(' sending text response ')
  res.render('generic/index', { title: 'Desert Safari' });
});

module.exports = router;
