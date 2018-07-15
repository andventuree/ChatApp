const router = require("express").Router();
const { User } = require("../db/models");

// GET api/users
router.get("/", (req, res, next) => {
  console.log("checking out the api/users general rute");
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

// GET api/users/:userId
router.get("/:userId", (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

module.exports = router;
