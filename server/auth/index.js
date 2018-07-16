const router = require("express").Router();
const User = require("../db/models");

router.post("/login", (req, res, next) => {
  const user = User.findOne({ where: { username: req.body.username } });

  if (!user) {
    console.log("User not found: ", req.body.username);
    res.status(401).send("Wrong username and/or password");
  } else if (!user.correctPassword(req.body.password)) {
    console.log("Incorrect password for user: ", req.body.username);
    res.status(401).send("Wrong username and/or password");
  } else {
    req.login(user, err => (err ? next(err) : res.json(user)));
  }
});

router.post("/singup", (req, res, next) => {
  try {
    const user = User.create(req.body);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

module.exports = router;
