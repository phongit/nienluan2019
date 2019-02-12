var express = require('express');
var path = require('path');
var app = express();
// var mysql = require('mysql');

// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     passworld: '',
//     database: 'nienluan'
// })

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => res.render('home'));
app.listen(process.env.PORT ||2009, () => console.log('Server started'));

// var server = require("http").Server(app);
// var io = require("socket.io")(server);
// server.listen(2009, () => console.log('Server  started'));

// io.on('connection', (socket) => {
//     console.log(socket.id);
//     socket.on("user onl", () => {
//         console.log("có người onl")
//     })
// })

// app.get('/', function (req, res) {
//     var sql = 'Insert into nguoidunng(userName, passWord) values("aa", "Bbb")';
//     conn.query(sql, (err, result) => {
//         // if (err) throw err;
//         // res.send(results);
//     });
// })