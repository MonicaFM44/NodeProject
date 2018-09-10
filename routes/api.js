const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://newsapi:newsapi1234@ds125422.mlab.com:25422/newsapi";

MongoClient.connect(
  url,
  (err, db) => {
    console.log("Connected to mongodb");

    router.get("/favorites", (req, res) => {
      db.collection("news")
        .find()
        .toArray((err, news) => res.json(news));
    });

    router.post("/favorites", (req, res) => {
      db.collection("news").insertOne(req.body, (err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

    router.get("/favorites/:title", (req, res) => {
      const query = { title: req.params.title };
      db.collection("news")
        .find(query)
        .toArray((err, article) => res.json(article));
    });

    router.get("/", (req, res) => res.send("api works"));
  }
);

module.exports = router;
