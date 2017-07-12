'use strict';

var mongoose = require('mongoose'),
	Navigation = mongoose.model('Navigations');


exports.list_all_Navigations = function (req, res) {
	Navigation.find(
		{},
		function (err, Navigation) {
			if (err)
				res.send(err);
			res.json(Navigation);
		}
	);
};

exports.create_a_Navigation = function (req, res) {
	var new_Navigation = new Navigation(req.body);
	new_Navigation.save(
		function (err, Navigation) {
			if (err)
				res.send(err);
			res.json(Navigation);
		}
	);
};

exports.read_a_Navigation = function (req, res) {
	Navigation.findById(
		req.params.NavigationId,
		function (err, Navigation) {
			if (err)
				res.send(err);
			res.json(Navigation);
		}
	);
};

exports.update_a_Navigation = function (req, res) {
	Navigation.findOneAndUpdate(
		{ _id: req.params.NavigationId },
		req.body,
		{ new: true },
		function (err, Navigation) {
			if (err)
				res.send(err);
			res.json(Navigation);
		}
	);
};

exports.delete_a_Navigation = function (req, res) {
	Navigation.remove(
		{ _id: req.params.NavigationId },
		function (err, Navigation) {
			if (err)
				res.send(err);
			res.json({ message: 'Navigation successfully deleted' });
		}
	);
};