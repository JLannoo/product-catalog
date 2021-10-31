const express = require('express');
const controller = require('./controller/Product.controller.js');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(3001);

server.on('listening', () => {
  console.log('listening on port 3001');
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



// function parseData(data) {
//   const parsedData = [];
//   for(let row of data){
//     let str = "";

//     str += "Name:" + row.name + "\n";
//     str += "Price:" + row.price_dollar + "." + row.price_cents + "\n";
//     str += "Description:" + row.description + "\n";
//     str += "Image:" + row.image + "\n";

//     parsedData.push(str);
//   }

//   return parsedData;
// }

