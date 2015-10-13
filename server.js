var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');

var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');



var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//mongoose.connect('mongodb://localhost/scalegray-test');



app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});


var server = http.createServer(app);
var io = require('socket.io').listen(server);




server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
