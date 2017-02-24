var express = require('express')
var cors = require('cors')
var app = express()
var md5 = require('md5');
var fetch = require('node-fetch');

app.use(cors())

app.get('/marvel/', function (req, res, next) {

    let ts = '1';
    
    let pub_key = 'd16f65a18b67e96a5e7bd55de1c675c4';
    let pri_key = 'b128578135ff747b60902c97bb100a9c43185337';
	 
    let hashed_data = md5(ts + pri_key + pub_key);
    
    console.log(hashed_data);
    let url_end_point = "http://gateway.marvel.com/v1/public/characters?name=Spider-Man&ts="+ts+"&apikey="+ pub_key + "&hash="+hashed_data;
     
    console.log(url_end_point);
    fetch(url_end_point).then(function(response) {
         console.log(response.statusText);          
    });

  
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 80')
})