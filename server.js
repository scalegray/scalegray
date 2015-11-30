var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var _ = require('lodash');

var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var cors   = require('cors');


var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config');



var Account = require('./models/account');


var app = express();

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('secretKey', config.secretKey);


mongoose.connect('mongodb://localhost/scalegray-test');

/*
 * Basic APIs - TODO: move them out
 */

app.get('/tour', function(req, res) {

  var johnny = new Account({
    email: 'marr@thesmiths.com',
    password: '123',
    admin: true
  });

  johnny.save(function(err) {
    if (err) throw err;

    console.log("Account created");
    res.json({
      success: true
    });
  });
});

/*
 * Server side helper methods
 */

 function getUserScheme(req) {

   var email;
   var type;
   var userSearch = {};

    email = req.body.email;
     type = 'email';
     userSearch = { email: email };


   return {
     email: email,
     type: type,
     userSearch: userSearch
   }
 }



var apiRoutes = express.Router();

apiRoutes.post('/user', function(req, res) {
//  var Account = require("./models/account")
  var userScheme = getUserScheme(req);

  if (!userScheme.email || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(Account, userScheme.userSearch)) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(Account, 'id').id + 1;

  Account.push(profile);

  res.status(201).send({
    token: jwt.sign(profile, app.get('secretKey'))

  });
});

apiRoutes.post('/auth', function(req, res) {
  console.log("inside auth===>");
  Account.findOne({
    email: req.body.email
  }, function(err, account) {
    if (err) throw err;

    if (!account) {
      res.json({
        success: false,
        message: "Authentication failed. User not found."
      });
    } else if (account) {
      if (account.password != req.body.password) {
        res.json({
          success: false,
          message: "Authentication failed. Wrong password"
        });
      } else {
        var token = jwt.sign(account, app.get('secretKey'));
        console.log(token);
        res.json({
          success: true,
          message: "JoT token created",
          token: token
        });
      }
    }
  });

});






/*
 * Middleware for token verification on every request except for /auth
 */

apiRoutes.use(function(req, res, next) {

  var token = req.headers['x-access-token'] || req.body.token || req.query.token

  if (token) {
    jwt.verify(token, app.get('secretKey'), function(err, decoded) {

      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token"
        })
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "No token! give token pliz!"
    });
  }
});

/*
 * server side routes
 */

apiRoutes.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});


apiRoutes.get('/users', function(req, res) {
  Account.find({}, function(err, accounts) {
    res.json(accounts);
  });
});


/*
 * Middleware setup
 */



//app.use('/api', apiRoutes);

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', {
      html: html
    });
    res.send(page);
  });

}); 



var server = http.createServer(app);
var io = require('socket.io').listen(server);




server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
