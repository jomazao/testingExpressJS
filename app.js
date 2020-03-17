var express = require('express');
const cors = require('cors');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var user1 = {
    "name" : "Andres",
    "lastname" : "Torres"
} 
var user2 = {
    "name" : "Camila",
    "lastname" : "Garcia"
}
var user3 = {
    "name" : "Hollman",
    "lastname" : "Ortiz"
}  
var user4 = {
    "name" : "Alexandra",
    "lastname" : "Galindo"
}  

var users = [ user1, user2, user3,user4 ]



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
app.get('/vehicules', function (req, res) {
    res.send("all the vehicules");
}); 


app.post('/users', function (req, res) {
    users.push(req.body)
    res.redirect('back');
}); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
