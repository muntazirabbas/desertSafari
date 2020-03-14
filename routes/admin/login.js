var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    console.log('req.body ', req.body);
    res.render('admin/login', { title: 'Desert Safari' });
});

router.post('/', function (req, res, next) {
    console.log('body ', req.body);
    // if (req.body.first_name1) {
    //     res.render('admin/login', { title: 'Desert Safari' });
    // }
});


module.exports = router;
