var express = require('express');
app = express();

var port = "8080";
app.set('port', port);

module.exports = app;

app.get('/', function(req,res){
    res.send('Hello World b1 !\n')  ;  
});

app.listen(port,function(){
    console.log('ejemplo app puerto 8080')
})