#!/usr/bin/env node

var express = require('express'),
    app = express(),
    PORT = 8888;

app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


app.post('/api/v1/upload', function(req, res){
  console.log(req.files);
  res.send(200, 'track saved');
});
app.listen(PORT);
console.log('listening on port ' + PORT);
