var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Navigation = require('./api/models/NavigationModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Navigationdb');
// mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./api/routes/NavigationRoutes');
routes(app);

app.listen(port);

console.log('sahp-api server started on: ' + port);