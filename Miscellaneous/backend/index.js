const express = require("express");
const app = express();

const port = 8080;
app.use(express.urlencoded({ extended: true }));
 // middleware to parse form data
 app.use(express.json()); // middleware to parse json data

app.get("/register", (req, res) => {
    let { user, password } = req.query;
  res.send(`Standard Get respose. welcome ${user}!`);
});
app.post("/register", (req, res) => {   // POST request to the same route   
    let { user, password } = req.body;
    res.send(`Standard Post response. welcome ${user}!`);
    });
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});