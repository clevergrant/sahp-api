var express = require('express'),
	app = express(),
	port = process.env.PORT || 3001,
	mongoose = require('mongoose'),
	Navigation = require('./api/models/NavigationModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Navigationdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/NavigationRoutes');
routes(app);

app.listen(port);

console.log('sahp-api server started on: ' + port);