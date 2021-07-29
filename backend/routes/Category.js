const express = require("express");
const Router = express.Router();
const db = require("../config/db");

Router.post("/categoryadd", (req, res) => {
  const categoryName = req.body.categoryName;
  if (categoryName === "") {
    res.json({ message: "Kategori İsmi Bos Olamaz" });
  } else {
    db.query(
      "INSERT INTO category (categoryName) VALUES (?)",
      [categoryName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ message: "Kategori Basarı İle Eklendi" });
        }
      }
    );
  }
});

Router.get("/getcategory", (req, res) => {
  db.query("SELECT * FROM category", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

Router.get("/getsize", (req, res) => {
  db.query("SELECT * FROM size", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

Router.get("/getsize/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM size INNER JOIN product ON product.sizeId = size_Id  WHERE size_Id =?",
    id,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

Router.get("/getcategory/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM category INNER JOIN product ON product.categoryId = category_Id  WHERE category_Id =?",
    id,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

Router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM category WHERE category_Id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = Router;
