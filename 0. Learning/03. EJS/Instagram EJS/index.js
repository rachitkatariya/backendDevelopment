const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

   
// app.get("/ig/:username", (req, res) => {
//     const followers = ["virat kohli", "Rohit Sharma", "Shikhar Dhawan"];
//     let { username } = req.params;
//     res.render("instagram.ejs", {username, followers});
// });


app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    if(data){
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }    
});