const db = require("./server/db");
const User = require("./server/db/models/user");
const Message = require("./server/db/models/message");
const Channel = require("./server/db/models/channel");

Channel.hasMany(Message, {
  onDelete: "cascade",
  hooks: true
});

User.hasMany(Message);

Message.belongsTo(Channel);
Message.belongsTo(User);

const cartoonProfiles = [
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/2.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/99.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/50.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/64.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/102.png",
  "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/21.png"
];

const users = [
  {
    username: "andrew",
    image: cartoonProfiles[2]
  },
  {
    username: "zhuling",
    image: cartoonProfiles[0]
  },
  {
    username: "charlie",
    image: cartoonProfiles[3]
  }
];

const channels = [
  { name: "random" },
  { name: "lit_chat" },
  { name: "memes_galore" },
  { name: "doggo_appreciation" }
];

const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  { userId: id(), content: "panda_panda", channelId: 0 },
  { userId: id(), content: "EDM", channelId: 1 },
  { userId: id(), content: "xyz comment", channelId: 1 },
  { userId: id(), content: "Web Apps R Us!", channelId: 2 },
  { userId: id(), content: "JavaScript!", channelId: 2 },
  { userId: id(), content: "Gah Gah", channelId: 2 },
  { userId: id(), content: "Not bad", channelId: 3 },
  { userId: id(), content: "Stoooop", channelId: 3 },
  { userId: id(), content: "Aint no body got time", channelId: 3 },
  { userId: id(), content: "Corgis", channelId: 4 },
  { userId: id(), content: "Shizhu", channelId: 4 },
  { userId: id(), content: "Frenchie", channelId: 4 }
];

const seed = () => {
  Promise.all(users.map(user => User.create(user)));
  Promise.all(channels.map(channel => Channel.create(channel)));
  Promise.all(messages.map(message => Message.create(message)));
};

const main = () => {
  console.log("Syncing database... to seed");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error during seeding");
      console.log(err.stack);
    });
  // .then(() => {
  //   db.close();
  //   return null;
  // });
};

main();
