

global.allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Authorization');

	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
}

global.axios = require('axios');

global.express = require('express')
global.app = express()
global.bodyParser = require('body-parser');
var fs = require('fs');
global.path = require("path");
global.objectID = require('mongodb').ObjectID;
var api = require('./server/api/api');

app.use(bodyParser.json());
app.use(allowCrossDomain);

app.use("/", api);


var multipart = require("connect-multiparty");

global.lowercase = require('lower-case');
app.use(multipart({
	uploadDir: path.join(__dirname, './src/assets/uploads')
}));
global.weatherKey="47d2c14d5f765e08c3cef24b0cea30a9";
global.weatherKeyId="AIzaSyDo74DJNZN4YKthmD5h-AJo6jESFJoeA7o";
global.MongoClient = require('mongodb').MongoClient
	, assert = require('assert');
// Connection URL using npm mongo n
global.url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function (err, db) {

	assert.equal(null, err);
	console.log("Connected correctly to server");
	global.db = db.db("mongoNode");
});


app.post('/upload', function (req, res) {
	var location = req.files.imageFile.path;
	var temp = new Array();
	temp = location.split("/");
	var image = new Array();
	image = temp.reverse();
	global.imagePath = image[0];
	res.send({ status: true });
})
app.listen(3000)