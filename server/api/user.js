const router = require("express").Router();
const { User } = require("../db/models");
const doorman = require("../../utils/doorman");

// GET api/users
router.get("/", doorman.confirmAdmin, (req, res, next) => {
  console.log("req.user at /api/users route: ", req.user);
  console.log("checking out the api/users general route");
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

// GET api/users/:userId
router.get("/:userId", doorman.confirmSelf, (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

module.exports = router;
