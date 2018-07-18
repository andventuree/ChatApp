const router = require("express").Router();
const { User } = require("../db/models");

//local sign up and login
router.post("/login", async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (!user) {
    console.log("User not found: ", req.body.username);
    res.status(401).send("User not found, consider signing up");
  } else {
    res.json(user);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", async (req, res, next) => {
  let currentDate = new Date();

  await User.update(
    { lastLogin: currentDate },
    { where: { username: req.body.username } }
  )
    .then(() => console.log("User's lastLogin updated"))
    .catch(next);

  res.redirect("/login");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

module.exports = router;
