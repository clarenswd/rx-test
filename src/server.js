var express = require('express')
var cors = require('cors')
var app = express()
var md5 = require('md5');
var request = require('request');

app.use(cors())

function buildEndpoint (jx_param){
    let ts = '1';    
    let pub_key = 'd16f65a18b67e96a5e7bd55de1c675c4';
    let pri_key = 'b128578135ff747b60902c97bb100a9c43185337';
   
    let hashed_data = md5(ts + pri_key + pub_key);
    // characters?name=Spider-Man
    // comics
    return  "http://gateway.marvel.com/v1/public/"+jx_param+"&ts="+ts+"&apikey="+ pub_key + "&hash="+hashed_data;

}
app.get('/marvel/:endpoint/', function (req, res, next) {
  
    let ts = '1';    
    let pub_key = 'd16f65a18b67e96a5e7bd55de1c675c4';
    let pri_key = 'b128578135ff747b60902c97bb100a9c43185337';
   
    let hashed_data = md5(ts + pri_key + pub_key);
    // characters
    // comics
     
    url_end_point = "http://gateway.marvel.com/v1/public/"+req.params.endpoint+"?ts="+ts+"&apikey="+ pub_key + "&hash="+hashed_data;
     
    request.get({ url: url_end_point },
           function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.json(body); 
              } 
    }); 
      
  
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})