// const mysql = require('mysql');
// const config = require('../configs');

// async function query(sql, params) {
//   const connection = await mysql.createConnection(config.db);
//   const [results, ] = await connection.execute(sql, params);

//   return results;
// }

// module.exports = {
//   query
// }

var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'simulator' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;