"use strict";
(function(){
    var weather = require("weather-js");
    var stats = require("./stats");
    var Location = function(locationTerm){
        stats.writeStats(locationTerm);
        return {
            getWeather:function(callback){
                console.log(`getting weather for ${locationTerm}`);
                weather.find({ search: locationTerm, degreeType: "F" }, function(err, result) {
                    if (err) return console.log(err);
                    if(callback && callback.call) callback(result[0].current);
                });
            }
        };
    }
    module.exports = Location;
})();