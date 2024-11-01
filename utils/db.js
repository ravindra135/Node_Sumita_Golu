const mysql = require('mysql2');
const config = require('../config.js');

const pool = mysql.createPool({
  host: config.db.hostname,
  user: config.db.username,
  password: config.db.password,
  database: config.db.database,
});

/* module.exports = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
}; */

pool.getConnection(function (err, connection) {
  if (err instanceof Error) {
    console.log(err);
    return;
  }

  // Important Connection should be released (close) after use.
  connection.release();
});

module.exports = pool;