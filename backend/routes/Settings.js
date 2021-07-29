const express = require("express");
const Router = express.Router();
const db = require("../config/db");

Router.get("/getabout", (req, res) => {
  db.query("SELECT * FROM aboutpage", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});


Router.get("/getcontact", (req, res) => {
  db.query("SELECT * FROM contactpage", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});



module.exports = Router;
