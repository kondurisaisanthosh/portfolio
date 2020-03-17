var express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var path = require('path');
var bodyParserJson = require('body-parser').json();
var request = require('request');
var session = require('express-session');


var port = 3300;
var app = express();
app.use(express.static(path.join(__dirname, '/client/dist/client')));


app.listen(port, function () {
  console.log(` portal running on ${port}!`);
});


