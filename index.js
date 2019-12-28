var express = require('express');
var path = require('path');
var hbs = require('hbs');

var app = express();
var PORT = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    console.log("post");
    res.render('login');
});

app.get('/register', function (req, res) {
    res.send("Register");
});

app.listen(PORT, function () {
    console.log(`Server Starts on ${PORT}`);
});