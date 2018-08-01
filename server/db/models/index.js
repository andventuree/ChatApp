const Message = require("./message");
const Channel = require("./channel");
const User = require("./user");

User.hasMany(Message);

Message.belongsTo(Channel);
Message.belongsTo(User);

module.exports = {
  Channel,
  Message,
  User
};
