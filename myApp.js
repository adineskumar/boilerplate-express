let express = require('express');
let app = express();

console.log("Hello Express");

app.get('/', function(request, response) {
  response.end("Hello Express")
})

module.exports = app;
