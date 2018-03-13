var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({name:'aaa',pwd:'123'});
});

router.post('/', function(req, res, next) {
  res.json({name:'aaa',pwd:'123'});
});

module.exports = router;
