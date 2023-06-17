let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', function(request, response) {
  response.end("Hello Express")
})

module.exports = app;
