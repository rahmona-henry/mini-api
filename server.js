var express = require('express')
var app = express()

app.use(express.static('client'))

app.get('/', function (req,res) {
  res.send('index.html')
})

app.listen(3000, function () {
  console.log('Google Mapping on Port 3000')
})
