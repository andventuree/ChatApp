const router = require("express").Router();

// router.use("/user", require("./user")); //has issues
router.use("/messages", require("./message"));
router.use("/channels", require("./channel"));

module.exports = router;
