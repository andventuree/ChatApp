const router = require("express").Router();
const { Message, User } = require("../db/models");

// GET /api/messages
router.get("/", (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

// POST /api/messages
router.post("/", (req, res, next) => {
  User.findOrCreate({
    where: {
      name: req.body.name || "Default Name: Finn"
    }
  })
    .spread(user => {
      const message = Message.build(req.body);
      message.setUser(user, { save: false });

      return message.save().then(message => {
        message = message.toJSON();
        message.user = user;
        return message;
      });
    })
    .then(message => {
      res.json(message);
    })
    .catch(next);
});

// PUT /api/messages
router.put("/:messageId", (req, res, next) => {
  Message.findById(req.params.messageId)
    .then(message => message.update(req.body))
    .catch(next);
});

router.delete("/:messageId", (req, res, next) => {
  const id = req.params.messageId;

  Message.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
