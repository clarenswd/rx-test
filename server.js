var express = require('express')
var cors = require('cors')
var app = express()
var md5 = require('md5');
var request = require('request');

app.use(cors());


//Show React index page
app.use('/', express.static('build'));
app.get('/', (req, res, next) => {
    res.send();
});


function buildEndpoint (jx_endpoint ){
    let ts = '1';    
    let pub_key = 'd16f65a18b67e96a5e7bd55de1c675c4';
    let pri_key = 'b128578135ff747b60902c97bb100a9c43185337';
   
    let hashed_data = md5(ts + pri_key + pub_key);
    // characters?name=Spider-Man
    // comics
    //jx_endpoint ==> /comics/

    return  "http://gateway.marvel.com/v1/public/"+ jx_endpoint+ "?ts=" + ts + "&apikey=" + pub_key + "&hash=" + hashed_data;
}


app.get('/marvel/:endpoint/', function (req, res, next) {
  
    url_end_point = buildEndpoint(req.params.endpoint);     
    request.get({ url: url_end_point },
           function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
            
                res.json(body); 
              } 
    }); 
});

app.get('/marvel/comic/:comicid', function (req, res, next) {
    let  single_comic_url = "comics/"+req.params.comicid;
    url_end_point = buildEndpoint(single_comic_url);
    console.log(url_end_point); 
    request.get({ url: url_end_point },
           function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                res.json(body); 
              } 
    }); 
});



var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('CORS-enabled web server listening on port '+port)
})