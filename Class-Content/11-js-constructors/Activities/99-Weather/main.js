"use strict";
(function(){
    var Location = require("./location");
    var Admin = require("./admin");
    var stdin = process.openStdin();
    var isAdmin = process.argv[2] === "admin";

    if(isAdmin){
        Admin.getStats(function(stats){
            console.log(stats)
            stats.forEach(function(stat){
                
            });
            process.exit();
        });
    }
    else{
        console.log("where would you like to see weather for?");
        stdin.addListener("data", function(input){
            var locationTerm = input.toString().trim();
            var location = new Location(locationTerm);
            location.getWeather(function(weather){
                console.log(JSON.stringify(weather, null, 2));
                process.exit();
            });
        });
    }
})();