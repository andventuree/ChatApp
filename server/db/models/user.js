const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const cartoonProfiles = [
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/2.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/99.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/50.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/64.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/102.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/21.png"
];

const getRandomImg = () =>
  cartoonProfiles[Math.floor(Math.random() * cartoonProfiles.length)];

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: function() {
      return getRandomImg();
    }
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("password");
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("salt");
    }
  },
  lastLogin: {
    type: Sequelize.DATE
  }
});

User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

User.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

const setSaltAndPassword = user => {
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

module.exports = User;
