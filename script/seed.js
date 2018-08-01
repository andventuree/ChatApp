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
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 1,
    userId: 2
  },
  {
    content: "Stooooooop",
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 1,
    userId: 2
  },
  {
    content: "Not bad",
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 1,
    userId: 1
  },
  {
    content: "JavaScript is where its at!",
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 1,
    userId: 2
  },
  {
    content: "Aint no body got time",
    createdAt: new Date("2018-07-19 03:00:52.938+00"),
    channelId: 1,
    userId: 3
  },
  {
    content: "Litt Litt ",
    createdAt: new Date("2018-07-19 03:00:52.938+00"),
    channelId: 1,
    userId: 3
  },
  {
    content: "Litt Litt Litt Litt ",
    createdAt: new Date("2018-07-19 03:00:52.939+00"),
    channelId: 1,
    userId: 1
  },
  {
    content: "Corgis are the best",
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 2,
    userId: 2
  },
  {
    content: "Shihtzu are my favorite",
    createdAt: new Date("2018-07-19 03:00:52.939+00"),
    channelId: 2,
    userId: 2
  },
  {
    content: "Frenchie? you mean cutie :P",
    createdAt: new Date("2018-07-19 03:00:52.939+00"),
    channelId: 2,
    userId: 2
  },
  {
    content: "Everyone sees but not everyone notices",
    createdAt: new Date("2018-07-15 18:28:35.161+00"),
    channelId: 3,
    userId: 1
  },
  {
    content: "oh hayy",
    createdAt: new Date("2018-07-19 03:13:16.813+00"),
    channelId: 1,
    userId: 4
  },
  {
    content: "Good Morning",
    createdAt: new Date("2018-07-19 03:22:25.437+00"),
    channelId: 1,
    userId: 5
  },
  {
    content: "🔥 ",
    createdAt: new Date("2018-07-19 03:23:54.744+00"),
    channelId: 1,
    userId: 6
  },
  {
    content: "👋 ",
    createdAt: new Date("2018-07-19 03:39:33.578+00"),
    channelId: 1,
    userId: 7
  },
  {
    content: "shiba inus!!!",
    createdAt: new Date("2018-07-19 03:40:12.488+00"),
    channelId: 2,
    userId: 8
  },
  {
    content: "andrew is my fave",
    createdAt: new Date("2018-07-19 03:40:14.06+00"),
    channelId: 1,
    userId: 9
  },
  {
    content: "Pitbulls are rad!",
    createdAt: new Date("2018-07-19 06:02:27.655+00"),
    channelId: 2,
    userId: 10
  },
  {
    content: "Pugs pugs pugs",
    createdAt: new Date("2018-07-19 06:02:54.092+00"),
    channelId: 2,
    userId: 11
  },
  {
    content: "Eat your vegetables",
    createdAt: new Date("2018-07-19 06:03:52.213+00"),
    channelId: 3,
    userId: 12
  },
  {
    content: "I'm here for memes",
    createdAt: new Date("2018-07-19 06:06:44.718+00"),
    channelId: 1,
    userId: 13
  },
  {
    content: "Hallllooo",
    createdAt: new Date("2018-07-19 16:04:09.635+00"),
    channelId: 1,
    userId: 14
  },
  {
    content: "Wow I love this site ",
    createdAt: new Date("2018-07-19 16:04:31.577+00"),
    channelId: 1,
    userId: 14
  },
  {
    content: "Looks great on mobile devices ",
    createdAt: new Date("2018-07-19 16:04:41.183+00"),
    channelId: 1,
    userId: 14
  },
  {
    content: "SAMOYEDSDDD",
    createdAt: new Date("2018-07-19 16:05:04.159+00"),
    channelId: 2,
    userId: 14
  },
  {
    content: "Boop",
    createdAt: new Date("2018-07-19 16:06:07.341+00"),
    channelId: 1,
    userId: 15
  },
  {
    content: "Food is life",
    createdAt: new Date("2018-07-19 16:07:04.734+00"),
    channelId: 4,
    userId: 15
  },
  {
    content: "Hi yo ",
    createdAt: new Date("2018-07-31 21:22:53.368+00"),
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
