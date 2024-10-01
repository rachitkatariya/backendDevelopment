const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/help", (req, res) => {
    res.send("help me!!");
});


// dynamically data updating
// app.get("/rolldice", (req, res) => {
//     res.render("rolldice.ejs");
// });

// another method assuming DB

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 + 1);
    res.render("rolldice.ejs", { diceVal });
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

   