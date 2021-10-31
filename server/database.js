const mysql = require('mysql');

exports.connect =  function (){
  const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'product-catalog'
  });

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected...');
  });

  return db;
}
