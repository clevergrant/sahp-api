'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NavSchema = new Schema(
	{
		innerText: {
			type: String,
			required: "Please specify text to show."
		},
		linkHref: {
			type: String,
			required: "Please specify the link."
		},
		newWindow: {
			type: Boolean,
			default: false
		}
	}
);

var NavigationSchema = new Schema(
	{
		key: {
			type: String,
			required: "Please define a key."
		},
		values: {
			type: [NavSchema],
			default: []
		}
	}
);

module.exports = mongoose.model('Navigations', NavigationSchema);