require('dotenv').config();
const mysql = require('mysql');

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB = process.env.DB_NAME;

exports.connect =  function (){
  const db = mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASS,
      database: DB
  });

  function createNewConnection(){
    db.connect((err) => {
      if (err) {
        
      }
      console.log('MySQL Connected...');
    });
  };

  createNewConnection();

  db.on('error', (err) => {
    createNewConnection();
  });

  return db;
}
