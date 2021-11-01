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

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected...');
  });

  return db;
}
