#!/usr/bin/env node

var express = require('express'),
    app = express();

app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.listen(8888);
console.log('listening on port 8000');
