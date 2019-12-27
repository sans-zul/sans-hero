var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/sanjari', function (req, res) {
    res.send("Sanjari");
});

app.listen(PORT, function () {
    console.log(`Server Starts on ${PORT}`);
});