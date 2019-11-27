const port = process.env.PORT || 3000,
    path = require("path");

(express = require("express")), (app = express());




app.use(express.static("public"));



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/HTML/lignumIndex.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/HTML/error.html"));
});


app.listen(port, function () {
    console.log("You rockin now on port " + port);
});