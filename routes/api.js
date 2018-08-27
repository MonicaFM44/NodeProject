const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://newsapi:newsapi1234@ds125422.mlab.com:25422/newsapi";

MongoClient.connect(
  url,
  function(err, db) {
    console.log("Connected to mongodb");

    router.get("/favorites", function(req, res) {
      db.collection("news")
        .find()
        .toArray(function(err, news) {
          res.json(news);
        });
    });

    router.get("/", (req, res) => res.send("api works"));
  }
);

module.exports = router;
