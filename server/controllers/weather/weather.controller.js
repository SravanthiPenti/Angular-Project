'use strict';
var getWeatherService=require('../../services/weather/weather.service');
function getWeather(req,res){
  getWeatherService.getWeatherDetails().then(function(response){
    res.status(200).send(response);
  },function(error){
    res.status(400).send(error);

  })
}
module.exports={getWeather}