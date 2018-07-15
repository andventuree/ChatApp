const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "..", "node_modules")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/landing", (req, res) => {
  res.send("/ page");
});

app.use("/api", require("./api"));

app.use("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || "Internal server error.")
);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

module.exports = app;
