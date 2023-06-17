let express = require('express');
let app = express();


app.get('/', function(req, res){
   res.send("Hello world!");
});


module.exports = app;
