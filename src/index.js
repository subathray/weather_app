const express = require('express');
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views",viewPath);
app.use(express.static(publicDirPath));

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/help', function (req, res) {
    res.render('help');
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.get('/reg', function (req, res) {
    res.send('Registration Page');
})

app.get('/', function (req, res) {
    res.send('Login Page');
})

app.listen(3000, function () {
    console.log("The sever is up on port 3000");
})