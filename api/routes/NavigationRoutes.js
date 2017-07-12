'use strict';
module.exports = function (app) {
	var Navigation = require('../controllers/NavigationController');

	// todoList Routes
	app.route('/Navigations')
		.get(Navigation.list_all_Navigations)
		.post(Navigation.create_a_Navigation);


	app.route('/Navigations/:NavigationKey')
		.get(Navigation.read_a_Navigation)
		.put(Navigation.update_a_Navigation)
		.delete(Navigation.delete_a_Navigation);
};