let express = require('express');
let app = express();

console.log("\"Hello World\" should be in the console")

app.get('/', function(req, res){
   res.send("\"Hello World\"");
});


module.exports = app;
