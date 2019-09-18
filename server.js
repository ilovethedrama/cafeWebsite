const port = process.env.port || 3000,
    // bodyparser = require("body-parser"),
    // mongoose = require("mongoose"),
    path = require("path");

(express = require("express")), (app = express());

// no necessary to set view engine to html, and not using ejs for now
// app.set("view engine", "ejs");

// this allows data to be sucked out from a form when combined with req.body  
// app.use(
//     bodyparser.urlencoded({
//         extended: true
//     })
// );

//this is a way of using, requiring and running at the same time.
//It needs 3 options, the secret can be literally anything, it is used to code and decode web sessions
// app.use(
//     require("express-session")({
//         secret: "Eat my shorts",
//         resave: false,
//         saveUninitialized: false
//     })
// );


app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/lignumv", {
//     useNewUrlParser: true
// });
// const mongCon = mongoose.connection;
// mongCon.on("connected", function () {
//     console.log("beep boop \ndatabase mainframe syncroniiiiiiized");
// });

// mongCon.on("disconnected", function () {
//     console.log("you're off the database now");
// });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/HTML/lignumIndex.html"));
});

// app.get("*", (req, res) => {
//     res.render("404", {
//         root: __dirname
//     });
// });

// app.get("*", (req, res) => {
//   res.send("404");
// });

app.listen(port, function () {
    console.log("You rockin now on port " + port);
    console.log(__dirname + "/HTML/lignumIndex.html");
});

