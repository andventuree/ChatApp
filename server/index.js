const path = require("path");
const express = require("express");
const app = express();
const db = require("./db");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`Server up and running on port ${PORT}`)
);

const io = require("socket.io")(server);
require("./socket")(io); // Takes in server and handle socket events

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "node_modules")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || "Internal server error.")
);

db.sync().then(() => console.log("Database is synced"));

module.exports = app;
