const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "yourPasswordHere",
  database: "employee_db",
});

module.exports = connection;
