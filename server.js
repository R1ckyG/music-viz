#!/usr/bin/env node

var express = require('express'),
    app = express(),
    PORT = 8888;

app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.listen(PORT);
console.log('listening on port ' + PORT);
