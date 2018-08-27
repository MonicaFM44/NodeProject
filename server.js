const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const cors = require("cors");

const app = express();

const port = 8000;
const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);
app.use(cors(corsOptions));

app.listen(port, () => console.log(`Listening on port ${port}`));
