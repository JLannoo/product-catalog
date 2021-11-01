const express = require('express');
require('dotenv').config();
const controller = require('./controller/Product.controller.js');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/products/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  controller.getAll(req, res);
});
app.get('/products/:id', (req, res) => {
  controller.getByID(req, res);  
});

app.post('/products/',  (req, res) => {
  controller.addProduct(req, res);
});

app.delete('/products/:id', (req, res) => {
  controller.deleteProduct(req, res);
});

app.patch('/products/:id', (req, res) => {
  controller.modifyProduct(req, res);
});

