const express = require("express"); 
const app = express();
// console.dir(app);

/*
Port are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.
*/

let port = 8080; // 3000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
// app.use((req, res) => {
//     console.log(req);
//     console.log("request received");
//     res.send("this is a basic request");
//     res.send({
//         name : "apple",
//         color : "red",
//     });
// });


// Routing 

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("/banana", (req, res) => {
    res.send("you contacted banana path");
});

// default path for all route servers
app.get("*", (req, res) => {
    res.send("this path does not exist");
});


// Nodemon : to automatically restart server with code exchanges 
 




// Path parameteres

// app.get("/", (req, res) => {
//     console.log('app is listening on port ${port}');
// });

// app.get("/", (req, res) => {
//     res.send("hello, i am root");
// });

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     // console.log(req.params);
//     res.send(`welcome to the page of @${username}.`);
// });

