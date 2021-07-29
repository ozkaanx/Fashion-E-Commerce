const express = require("express");
const Router = express.Router();
const db = require("../config/db");

Router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE username  =? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send({ result: result, loggedIn : true });
        } else {
          res.send({ message: "Kullanıcı veye şifre hatalı"  , loggedIn : false});
        }
      }
    } 
  );
});
module.exports = Router;
