var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   console.log(req),
//    res.render( { name: 'sidhartha bhardwaj' });
    json({name:"sanju"});
});

module.exports = router;
