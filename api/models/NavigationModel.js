'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NavSchema = new Schema(
	{
		name: {
			type: String,
			Required: 'Enter Name of Link'
		},
		url: {
			type: String,
			Required: 'Enter Link URL'
		}
	}
);
var Nav = mongoose.model('Navs', NavSchema);

var NavigationSchema = new Schema(
	{
		name: {
			type: String,
			default: "NewNavigation"
		},
		list: [Nav]
	}
);

module.exports = mongoose.model('Navigations', NavigationSchema);