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
  lastLogin: {
    type: Sequelize.DATE,
    defaultValue: function() {
      return new Date();
    }
  }
});

module.exports = User;
