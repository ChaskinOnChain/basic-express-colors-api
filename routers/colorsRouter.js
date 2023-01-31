const express = require("express");
const router = express.Router();

const {
  getColors,
  addColor,
  updateColor,
  removeColor,
} = require("../controllers/colorControllers");

router.route("/").get(getColors).post(addColor);
router.route("/:color").put(updateColor).delete(removeColor);

module.exports = router;
