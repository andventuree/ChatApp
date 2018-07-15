const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/messages", require("./message"));
router.use("/channels", require("./channel"));

router.use((req, res, next) => {
  res.status(404).send("Not found");
});

module.exports = router;
