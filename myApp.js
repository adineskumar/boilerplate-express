let express = require('express');
let app = express();
app.use(express.static(__dirname + '/'));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
})

app.get('/json', function (request, response) {
  response.json({"message": "Hello json"})
})



module.exports = app;
