var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
    console.log('server started at '+ PORT +'...');
});

app.get('/about', function(req, res){
   console.log('About...');    res.sendFile(__dirname+'/public/index.html');
});
