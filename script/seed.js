const db = require("../server/db");
const { User, Message, Channel } = require("../server/db/models");

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
// "2018-07-16T18:28:35.161Z"
const users = [
  {
    username: "andrew",
    image: cartoonProfiles[2],
    lastLogin: new Date("2018-07-16T18:28:35.161Z")
  },
  {
    username: "zhuling",
    image: cartoonProfiles[0],
    lastLogin: new Date()
  },
  {
    username: "charlie",
    image: cartoonProfiles[3]
  }
];

const channels = [
  { name: "Litt Web Dev" },
  { name: "Doggo Appreciation" },
  { name: "Quotes" }
];

const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  {
    userId: id(),
    content: "I've a great web site name, Web Apps R Us!",
    channelId: 1,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  },
  {
    userId: id(),
    content: "Stooooooop",
    channelId: 1,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  },
  {
    userId: id(),
    content: "Not bad",
    channelId: 1,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  },
  {
    userId: id(),
    content: "JavaScript is where its at!",
    channelId: 1,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  },
  { userId: id(), content: "Aint no body got time", channelId: 1 },
  { userId: id(), content: "Litt Litt ", channelId: 1 },
  { userId: id(), content: "Litt Litt Litt Litt ", channelId: 1 },
  {
    userId: id(),
    content: "Corgis are the best",
    channelId: 2,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  },
  { userId: id(), content: "Shizhu are my favorite", channelId: 2 },
  { userId: id(), content: "Frenchie? you mean cutie :P", channelId: 2 },
  {
    userId: id(),
    content: "Everyone sees but not everyone notices",
    channelId: 3,
    createdAt: new Date("2018-07-15T18:28:35.161Z")
  }
];

const seed = async () => {
  await Promise.all(users.map(user => User.create(user)));
  await Promise.all(channels.map(channel => Channel.create(channel)));
  await Promise.all(messages.map(message => Message.create(message)));
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
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
