var newrelic		= require('newrelic');
var express 		= require('express');
var app 			= express();
var mongoose 		= require('mongoose');
var port 			= process.env.PORT || 5000;
var database		= require('./config/database');
var morgan  		= require('morgan');
var bodyParser		= require('body-parser');
var methodOverride 	= require('method-override');
var moment 			= require('moment');

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ 'extended' : 'true' }));

app.use(bodyParser.json());

app.use(bodyParser.json({ type : 'application/vnd.api+json' }));

app.use(methodOverride());


moment.locale('id');

// Load routes

require('./app/routes.js')(app);

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
