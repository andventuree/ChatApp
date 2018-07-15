const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("testing");
});

module.exports = router;
