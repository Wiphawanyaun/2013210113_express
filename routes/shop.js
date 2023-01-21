var express = require("express");
var router = express.Router();
const shopController = require("../controllers/shopController");
const { body } = require("express-validator");

router.get("/", shopController.index);

router.get("/menu", shopController.menu);

router.get("/:id", shopController.show);

router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body("location.lat")
      .not()
      .isEmpty()
      .withMessage("กรุณาป้อนที่อยู่ด้วย")
      .isNumeric()
      .withMessage("รูปแบบที่อยู่ไม่ถูกต้อง"),
    body("location.lgn")
      .not()
      .isEmpty()
      .withMessage("กรุณาป้อนที่อยู่ด้วย")
      .isNumeric()
      .withMessage("รูปแบบที่อยู่ไม่ถูกต้อง"),
  ],
  shopController.insert
);

module.exports = router;
