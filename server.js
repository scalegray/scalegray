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

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config');



var Account = require('./models/account');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('secretKey', config.secretKey);


mongoose.connect('mongodb://localhost/scalegray-test');

/*
 * Basic APIs - TODO: move them out
 */

app.get('/tour', function(req, res) {

  var johnny = new Account({
  name: 'Johnny Marr',
  email: 'marr@thesmiths.com',
  password: 'iamcool',
  admin: true
  });

  johnny.save(function(err){
    if (err) throw err;

    console.log("Account created");
    res.json({success: true});
  });
});

var apiRoutes = express.Router();

apiRoutes.get('/', function(req, res){

  res.json({ message: 'Welcome to the coolest API on earth!' });
});


apiRoutes.get('/users', function(req, res) {
  Account.find({}, function(err, accounts){
    res.json(accounts);
  });
});


apiRoutes.post('/authenticate', function(req, res){

 Account.findOne({email: req.body.email}, function(err, account){
   if (err) throw err;

   if(!account) {
     res.json({success: false, message: "Authentication failed. User not found."});
   } else if (account) {

    if(account.password != req.body.password) {
      res.json({success: false, message: "Authentication failed. Wrong password"});
    } else {
    var token = jwt.sign(account, app.get('secretKey'));
    res.json({
      success: true,
      message: "JoT token created",
      token: token
    });
  }
   }
 });

});

app.use('/api', apiRoutes);



 /*
  * Middleware setup
  */

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
