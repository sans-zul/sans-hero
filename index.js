var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/sanjari', function (req, res) {
    res.send("Sanjari");
});

app.post('/sanjari', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.listen(PORT, function () {
    console.log(`Server Starts on ${PORT}`);
});