const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "",
  password: "",
  database: "",
  port: "5000",
  multipleStatements: true,
});

module.exports.connection = connection;
