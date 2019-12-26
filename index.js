var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/sanjari', function (req, res) {
    res.send("Sanjari");
});

app.listen(PORT, function () {
    console.log(`Server Starts on ${PORT}`);
});