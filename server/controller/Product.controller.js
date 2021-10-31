// const Product = require('../model/Product.model.js');
const db = require('../database.js');
const connection = db.connect()

exports.getAll = (req, res) => {
    connection.query("SELECT * FROM products", (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {  
          res.status(200).send(result);
        }
      });
}

exports.getByID = (req, res) => {
    const id = req.params.id;

    if(id === "all"){
      res.redirect('/products');
    } else {
      connection.query("SELECT * FROM products WHERE id = ?", [id], (err, result) => {
          if (err) {
            res.status(500).send(err.sqlMessage);
          } else {  
            res.status(200).send(result);
          }
        });
    }
}

exports.addProduct = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price_cents = req.body.price_cents;
    const price_dollar = req.body.price_dollar;
    const image = req.body.image;

    // const product = new Product(req.body);  

    connection.query("INSERT INTO products SET name=?, description=?, price_cents=?, price_dollar=?, image=?", [name,description, price_cents, price_dollar, image], (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {  
          res.status(200).send(result);
        }
      });
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {  
          res.status(200).send(result);
        }
      });
}

exports.modifyProduct = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const price_cents = req.body.price_cents;
    const price_dollar = req.body.price_dollar;
    const image = req.body.image;

    connection.query("UPDATE products SET name=?, description=?, price_cents=?, price_dollar=?, image=? WHERE id=?", [name,description, price_cents, price_dollar, image, id], (err, result) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {  
          res.status(200).send(result);
        }
      });
}