const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "Arvind@#",
});

faker.locale = 'en_IN';

// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// Prepare an array to hold the generated users
// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser()); // Generate 100 fake users
// }

// This is a home route
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in the database");
        }
        let count = result[0].count;
        res.render("home.ejs", { count });
    });
});

// This is the user route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    connection.query(q, (err, users) => {
        if (err) {
            console.log(err);
            return res.send("Some error in the database");
        }
        res.render("showusers.ejs", { users });
    });
});

// Edit user route
app.get("/edit/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in the database");
        }
        if (result.length === 0) {
            return res.send("User not found");
        }

        // Assuming result[0] contains the user data
        let user = result[0];
        res.render("edit.ejs", { user });
    });
});
/// UPDATE ROUTE
app.patch("/edit/:id", (req, res) => {
    let { id } = req.params;
    let { username: newusername , password : formpassword } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q, (err, result) => {
        if (err) throw err; 
            let user = result[0];
            //// authentications 
            if (formpassword !== user.password) {
                return res.send("Password is incorrect");    
            }else {
                let q2 = `UPDATE user SET username = '${newusername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
     } catch (error) {
            console.log(err);
            res.send("some error in database");
     }
    });
// DELETE ROUTE
// Show delete confirmation (GET route)
app.get("/delete/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in the database");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        // Render delete confirmation page with the user data
        let user = result[0];
        res.render("delete.ejs", { user });
    });
});

// Process DELETE request (POST route)
app.post("/delete/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPassword } = req.body;

    // First, check if the user exists by the provided ID
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in the database");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        // Authenticate the password
        if (formPassword !== user.password) {
            return res.send("Password is incorrect");
        }

        // If password matches, proceed with deleting the user by id
        let q2 = `DELETE FROM user WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
            if (err) {
                console.log(err);
                return res.send("Some error in the database while deleting");
            }

            // Redirecting to the user list page after successful deletion
            res.redirect("/user");
        });
    });
});


// Listen on port 8080
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
