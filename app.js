var express = require('express');
var app = express();
var user1 = {
    "name" : "Andres",
    "lastName" : "Torres"
} 
var user2 = {
    "name" : "Camila",
    "lastName" : "Garcia"
}
var user3 = {
    "name" : "Hollman",
    "lastName" : "Ortiz"
}  

var users = [ user1, user2, user3 ]



app.get('/', function (req, res) {
  res.send('Hello World!');
}); 

app.get('/users', function (req, res) {
    res.send(users);
}); 
app.get('/users/:index', function (req, res) {
    let index= req.params.index
    res.send(users[index]);
}); 

app.get('/bills', function (req, res) {
res.send('AQUI ESTAN TODaS LaS facturas');
}); 



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
