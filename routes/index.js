var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('Index');
   // console.log(req)
   // res.render( { name: 'sidhartha bhardwaj' });

});
router.get('/sid', function(req, res, next) {
   res.json({name:req.query.name,age:req.query.contact});
 });
 router.post('/data', function(req, res, next) {
   res.json({name:req.body.name,age:req.body.contact});
 });

module.exports = router;
