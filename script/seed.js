const db = require("../server/db");
const { User, Message, Channel } = require("../server/db/models");

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
    username: "guest",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/2.png",
    lastLogin: new Date("2018-07-16 18:28:35.161+00")
  },
  {
    username: "andrew",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/50.png",
    lastLogin: new Date("2018-07-27 16:45:05.146+00"),
    isAdmin: true
  },
  {
    username: "admin",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/64.png",
    lastLogin: new Date("2018-07-19 03:00:52.896+00"),
    isAdmin: true
  },
  {
    username: "HarroDere",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/14.png",
    lastLogin: new Date("2018-07-19 03:13:02.885+00")
  },
  {
    username: "Philip",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/102.png",
    lastLogin: new Date("2018-07-19 03:22:07.715+00")
  },
  {
    username: "Buena",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png",
    lastLogin: new Date("2018-07-19 03:24:20.513+00")
  },
  {
    username: "zhuzhu",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/46.png",
    lastLogin: new Date("2018-07-19 03:39:46.044+00")
  },
  {
    username: "mokaymokay",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/89.png",
    lastLogin: new Date("2018-07-19 03:39:32.637+00")
  },
  {
    username: "aww",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/21.png",
    lastLogin: new Date("2018-07-19 03:40:00.284+00")
  },
  {
    username: "william",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/2.png",
    lastLogin: new Date("2018-07-19 06:02:36.197+00")
  },
  {
    username: "kate",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/42.png",
    lastLogin: new Date("2018-07-19 06:02:57.088+00")
  },
  {
    username: "mom",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/22.png",
    lastLogin: new Date("2018-07-19 06:04:16.477+00")
  },
  {
    username: "Llamaboy",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/72.png",
    lastLogin: new Date("2018-07-19 06:06:33.915+00")
  },
  {
    username: "Henry",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/83.png",
    lastLogin: new Date("2018-07-19 16:03:46.734+00")
  },
  {
    username: "Kim",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/64.png",
    lastLogin: new Date("2018-07-19 16:05:57.512+00")
  },
  {
    username: "meowmix",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/64.png",
    lastLogin: new Date("2018-07-25 15:46:01.489+00")
  },
  {
    username: "wayne",
    image:
      "https://raw.githubusercontent.com/Ashwivalento/cartoon-avatar/master/lib/images/male/22.png",
    lastLogin: new Date("2018-07-27 16:58:49.191+00")
  },
  {
    username: "namez",
    image:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/83.png",
    lastLogin: new Date("2018-07-30 20:21:29.119+00")
  }
];

const channels = [
  { name: "Litt Web Dev" },
  { name: "Doggo Appreciation" },
  { name: "Quotes" },
  { name: "Noms" }
];

const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  {
    content: "I've a great web site name, Web Apps R Us!",
    channelId: 1,
    userId: 2
  },
  {
    content: "Stooooooop",
    channelId: 1,
    userId: 2
  },
  {
    content: "Not bad",
    channelId: 1,
    userId: 1
  },
  {
    content: "JavaScript is where its at!",
    channelId: 1,
    userId: 2
  },
  {
    content: "Aint no body got time",
    channelId: 1,
    userId: 3
  },
  {
    content: "Litt Litt ",
    channelId: 1,
    userId: 3
  },
  {
    content: "Litt Litt Litt Litt ",
    channelId: 1,
    userId: 1
  },
  {
    content: "Corgis are the best",
    channelId: 2,
    userId: 2
  },
  {
    content: "Shihtzu are my favorite",
    channelId: 2,
    userId: 2
  },
  {
    content: "Frenchie? you mean cutie :P",
    channelId: 2,
    userId: 2
  },
  {
    content: "Everyone sees but not everyone notices",
    channelId: 3,
    userId: 1
  },
  {
    content: "oh hayy",
    channelId: 1,
    userId: 4
  },
  {
    content: "Good Morning",
    channelId: 1,
    userId: 5
  },
  {
    content: "🔥 ",
    channelId: 1,
    userId: 6
  },
  {
    content: "👋 ",
    channelId: 1,
    userId: 7
  },
  {
    content: "shiba inus!!!",
    channelId: 2,
    userId: 8
  },
  {
    content: "andrew is my fave",
    channelId: 1,
    userId: 9
  },
  {
    content: "Pitbulls are rad!",
    channelId: 2,
    userId: 10
  },
  {
    content: "Pugs pugs pugs",
    channelId: 2,
    userId: 11
  },
  {
    content: "Eat your vegetables",
    channelId: 3,
    userId: 12
  },
  {
    content: "I'm here for memes",
    channelId: 1,
    userId: 13
  },
  {
    content: "Hallllooo",
    channelId: 1,
    userId: 14
  },
  {
    content: "Wow I love this site ",
    channelId: 1,
    userId: 14
  },
  {
    content: "Looks great on mobile devices ",
    channelId: 1,
    userId: 14
  },
  {
    content: "SAMOYEDSDDD",
    channelId: 2,
    userId: 14
  },
  {
    content: "Boop",
    channelId: 1,
    userId: 15
  },
  {
    content: "Food is life",
    channelId: 4,
    userId: 15
  },
  {
    content: "Hi yo ",
    channelId: 2,
    userId: 12
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
    .then(() => {
      console.log("Success");
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
