const Message = require("./message");
const Channel = require("./channel");
const User = require("./user");

Channel.hasMany(Message, {
  onDelete: "cascade",
  hooks: true
});

User.hasMany(Message);

Message.belongsTo(Channel);
Message.belongsTo(User);

module.exports = {
  Channel,
  Message,
  User
};
