var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello kitty')
  res.status(200).json({
    fullname:'Wiphawan Piapramong'
  })
});

router.get('/bio', function(req, res, next) {
  // res.send('Hello kitty')
  res.status(200).json({
    fullname:'Wiphawan Piapramong',
    nickname : 'Yaun',
    hobby:'playing game',
    gitusername:'Wiphawanyaun'
  })
});


module.exports = router;
