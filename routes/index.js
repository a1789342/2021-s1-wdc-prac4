var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/


router.get('/', function(req, res, next) {

    date = new Date().toString();
    res.send(date);
});



var date;


router.get('/last.txt', function(req, res) {
    res.send(date);
    date = new Date().toString();
});



module.exports = router;

