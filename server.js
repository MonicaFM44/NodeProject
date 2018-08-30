const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const cors = require("cors");

const port = 8000;

const app = express();

init();

function middlewares() {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}

function routes() {
  app.use("/api", api);
}

function init() {
  middlewares();
  routes();
  app.listen(port, () => console.log(`Listening on port ${port}`));
}
