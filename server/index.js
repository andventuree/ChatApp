const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const db = require("./db");
const PORT = process.env.PORT || 8000;
const { User } = require("./db/models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db }); //adds Session table to db
const server = app.listen(PORT, () => console.log(`Server on port ${PORT}`));
require("../secrets");

const io = require("socket.io")(server);
require("./socket")(io); // Takes in server and handle socket events

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  //to decrypt cookie
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Must be called in this order: session() -> passport.initialize() -> passport.session()
app.use(
  session({
    secret: process.env.SESSION_SECRET || "Alt exposed session secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }),
  (req, res, next) => {
    next();
  }
);

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "node_modules")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || "Internal server error.")
);

db.sync().then(() => console.log("Database is synced"));

module.exports = app;
