let express = require('express');
let app = express();
const port = process.env.PORT || 6000

app.listen(port)

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
})

module.exports = app;
