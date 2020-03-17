var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs=require('fs');
var request = require('request');

var app = express();

var port=3300;

app.use(express.static(path.join(__dirname,'/client/dist/portfolio/')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/portfolio/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,function(){
console.log(`portal running on ${port}!`);
});
