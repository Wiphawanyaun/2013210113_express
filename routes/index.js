var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "RESTFUL API FINAL CLASS",
  });
});

module.exports = router;
