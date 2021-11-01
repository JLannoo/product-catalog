require('dotenv').config();
const mysql = require('mysql');

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB = process.env.DB_NAME;

exports.connect =  function (){
  const db = mysql.createPool({
      host: HOST,
      user: USER,
      password: PASS,
      database: DB
  });

  db.getConnection(function(err, connection) {
      if (err) {
          console.log(err);
          return;
      }
      if (connection) {
          connection.release();
          console.log("Database is connected");
      }
  });

  return db;
}
