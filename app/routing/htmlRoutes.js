// Dependencies
var path = require("path");

//Exporting routes to our html to server.js
module.exports = function(app){
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname,"/../public/html", "home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname,"/../public/html", "survey.html"));
	});
};
