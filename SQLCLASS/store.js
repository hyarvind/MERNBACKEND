const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "first",
    password: "Arvind@#",
});

// Define the query
let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let values = [1, "arvind", "arvindkr@gmail.com", 1234];
connection.query(q, values, (err, results) => {
    if (err) {
        console.error("Error executing query: ", err);
    } else {
        console.log("Record inserted successfully:", results);
    }
});
// connection.end();
