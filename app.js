

var allowCrossDomain = function (req, res, next) {
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
bodyParser = require('body-parser');
var fs = require('fs');
global.path = require("path");
global.objectID = require('mongodb').ObjectID;
app.use(bodyParser.json());
app.use(allowCrossDomain);
var multipart = require("connect-multiparty");

var lowercase = require('lower-case');
app.use(multipart({
	uploadDir: path.join(__dirname, './src/assets/uploads')
}));

global.MongoClient = require('mongodb').MongoClient
	, assert = require('assert');
// Connection URL using npm mongo n
global.url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server
// global.upload=multer({dest:'public/'});
MongoClient.connect(url, function (err, db) {

	assert.equal(null, err);
	console.log("Connected correctly to server");
	global.db = db.db("mongoNode");
});

app.get('/check', function (req, res) {
	url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDo74DJNZN4YKthmD5h-AJo6jESFJoeA7o"
	axios.get(url, { json: true }).then(function (response) {
		// res.send(response);
		var path = response.data.results[0].geometry.location;
		// lng ,lat in location
		console.log(path);
		console.log(path.lng);
		console.log(path.lat);
		var latitude1 = path.lat;
		var longitude1 = path.lng;
		console.log(latitude1);

		url = "https://api.darksky.net/forecast/47d2c14d5f765e08c3cef24b0cea30a9/" + latitude1 + "," + longitude1;
		axios.get(url, { json: true }).then(function (response) {
			console.log(response);
			var temp = response.data.currently.temperature;
			var time = response.data.currently.time;
			var date = new Date(time);
			console.log(date);
			var celsius = (temp - 32) * (5 / 9);
			console.log(celsius);
			res.status(200).send({ lat: latitude1, lon: longitude1, temp: temp, celc: celsius });
		}, function () {
			console.log(error);
		});
	}, function (error) {
		console.log(error);
	});
});

app.post('/upload', function (req, res) {
	console.log(req.files);
	console.log("path:" + req.files.imageFile.path);
	var location = req.files.imageFile.path;
	console.log("path variable" + location);
	var temp = new Array();
	temp = location.split("/");
	console.log(temp);
	var image = new Array();
	image = temp.reverse();
	console.log(image);
	console.log("ImagePath:" + image[0]);
	global.imagePath = image[0];
	res.send({ status: true });
})

app.post('/adduser', function (req, res) {

	insertdata = {
		fullname: lowercase(req.body.fullname),
		email: lowercase(req.body.email),
		hobbies: lowercase(req.body.hobbies),
		dateofBirth: req.body.dateofBirth,
		file: imagePath,
		status: true

	}

	db.collection('user').insertOne(insertdata, function (error, data) {
		if (error) {
			res.send({ status: false });
		} else {
			res.send({ status: true, messages: "login ." });
		}
	});
})



app.get('/getUser', function (req, res) {
	db.collection('user').find({ status: true }).toArray(function (err, result) {
		if (err) {
			res.send({ status: false });
		} else {
			res.send(result)
		}

		// console.log(res);
	})
})
app.get('/home/:id', function (req, res) {
	var id = req.param('id');
	// console.log(id);
	db.collection('user').findOne({ '_id': objectID(id) }, function (err, result) {
		if (err) {
			res.send({ status: false });
		}
		else {
			res.send(result);
		}
	})

})
app.put('/home/:id', function (req, res) {
	var updatedata = {
		fullname: lowercase(req.body.fullname),
		email: lowercase(req.body.email),
		hobbies: lowercase(req.body.hobbies),
		dateofBirth: req.body.dateofBirth
	}
	var id = req.params.id;
	// console.log(id);
	db.collection('user').updateOne({ '_id': objectID(id) }, { $set: updatedata }, {}, function (err, result) {
		if (err) {
			res.send({ status: false });
		}
		else {
			res.send(result);
		}


	})
})
app.delete('/deleteUser/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.collection('user').deleteOne({ '_id': objectID(id) }, function (err, result) {
		if (err) {
			res.send({ status: false });
		} else {
			res.send(result);
		}

	})
})


app.listen(3000)