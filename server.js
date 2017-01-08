// grab the packages we need
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 8080;
var searchFor = '';

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/myaction', function(req, res) {
//    console.log(req.body);
    searchFor = req.body.name;
    res.send('You sent the name "' + req.body.name + '".');
    
    var search = require('./search.js');
    var result = new search(searchFor);
});

