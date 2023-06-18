let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public/'));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
})



module.exports = app;
