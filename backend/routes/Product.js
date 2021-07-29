const express = require("express");
const Router = express.Router();
const db = require("../config/db");

Router.post("/add", (req, res) => {
  const productName = req.body.productName;
  const sizeId = req.body.sizeId;
  const description = req.body.description;
  const productStock = req.body.productStock;
  const productPrice = req.body.productPrice;
  const categoryId = req.body.categoryId;
  const image = req.body.image;
  db.query(
    "INSERT INTO product (productName,sizeId,description,productStock,productPrice,categoryId,image) VALUES (?,?,?,?,?,?,?)",
    [
      productName,
      sizeId,
      description,
      productStock,
      productPrice,
      categoryId,
      image,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Ürün Ekleme Başarılı" });
      }
    }
  );
});

Router.get("/upload", (req, res) => {
  db.query(
    "SELECT * FROM product INNER JOIN category ON category_Id=product.categoryId",
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
  db.query("DELETE FROM product WHERE productId = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


Router.get("/upload/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM product INNER JOIN category ON category_Id=product.categoryId WHERE productId =?",
    id,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

Router.get("/top-upload", (req, res) => {
  db.query(
    "SELECT * FROM product INNER JOIN category ON category_Id =product.categoryId ORDER BY productId DESC LIMIT 8  ",
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

Router.get("/random-upload", (req, res) => {
  db.query(
    "SELECT * FROM product INNER JOIN category ON category_Id=product.categoryId ORDER BY RAND() LIMIT 4 ",
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

module.exports = Router;
