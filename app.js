var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var useragent = require("express-useragent");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var url = "/api/whoami";

app.get(url, function(req, res){
	var lang = req.acceptsLanguages();
	var soft = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
	var ip = req.ip;

	res.json(
		{
			'ipaddress': ip,
			'language': lang[0],
			'software': soft
		});

});


app.listen(3000, function(){
	console.log("Server is listening...!");
});