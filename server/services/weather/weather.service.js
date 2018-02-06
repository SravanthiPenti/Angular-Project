'use strict';
function getWeatherDetails(){
 return new Promise(function(resolve,reject){
  url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key="+weatherKeyId
	axios.get(url, { json: true }).then(function (response) {
		var path = response.data.results[0].geometry.location;
		console.log(path);
		console.log(path.lng);
		console.log(path.lat);
		var latitude1 = path.lat;
		var longitude1 = path.lng;
		console.log(latitude1);

		url = "https://api.darksky.net/forecast/"+weatherKey+"/" + latitude1 + "," + longitude1;
		axios.get(url, { json: true }).then(function (response) {
			console.log(response);
			var temp = response.data.currently.temperature;
			var time = response.data.currently.time;
			var date = new Date(time);
			console.log(date);
			var celsius = (temp - 32) * (5 / 9);
			console.log(celsius);
			resolve({ latitude: latitude1, longitude: longitude1, Temperature: temp, Celsius: celsius });
		}, function () {
			console.log(error);
		});
	}, function (error) {
		console.log(error);
	});
 }) 
}
module.exports={
  getWeatherDetails
}