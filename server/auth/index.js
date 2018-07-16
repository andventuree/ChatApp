const router = require("express").Router();
const { User } = require("../db/models");

//local sign up and login
router.post("/login", async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user) {
    console.log("User not found: ", req.body.username);
    res.status(401).send("Wrong username and/or password");
  } else {
    console.log("found user: ", user.username);
    res.json(user);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    // req.login(user, err => (err ? next(err) : res.json(user)));
    res.json(user);
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
