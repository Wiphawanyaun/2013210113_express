var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);

router.get('/bio',userController.bio);


module.exports = router;
