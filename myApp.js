let express = require('express');
let app = express();
const json_data = {"message": "Hello json"}
app.use(express.static(__dirname + '/'));



app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
})

app.get('/json', function (request, response) {
  if (process.env.MESSAGE_STYLE === 'uppercase')
  {   
    json_data['message'] = json_data['message'].toUpperCase()
  } 
  
  if (process.env.MESSAGE_STYLE === 'lowercase') {
    json_data['message'] = json_data['message'].toLowerCase()
  }
    console.log(json_data)
    response.json(json_data)
})



module.exports = app;
