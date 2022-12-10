var express = require("express");
var router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", userController.company);

module.exports = router;
