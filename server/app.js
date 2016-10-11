var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT||3000;

app.listen(port, function(){
  console.log('listening on 3000');
});
app.get('/',function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});//app.get

app.use('/styles', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.use(express.static('public'));
