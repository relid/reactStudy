//get access to express api
var express = require('express');

//create new app
var app = express();

//which folder to serve
app.use(express.static('public'));

//start server //two arguments(port, function to be called when server is up)
app.listen( 3000, function(){
	console.log('express on port 3000');
});