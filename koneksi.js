//panggil librarry mysql
var mysql = require("mysql");

//buat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("mysql terkoneksi");
});

module.exports = conn;
