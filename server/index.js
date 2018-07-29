const path = require("path");
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`Server up and running on port ${PORT}`)
);

const io = require("socket.io")(server);
require("./socket")(io); // Takes in server and handle socket events

app.use(
  session({
    secret: "chat-app-secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }),
  (req, res, next) => {
    console.log("req.session: ", req.session);
    next();
  }
);

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
