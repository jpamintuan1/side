"use strict";
(function(){
    var fs = require("fs");

    module.exports = {
        getStats:function(callback){
            function mapStringToObject(str){
                var line = str.split(", ");
                return {"location":line[0],"time":new Date(parseInt(line[1]))};
            }
            function handleFileStringToObject(err, data){
                if (err) return console.log(err);
                var results = data.split(/\r?\n/)
                    .map(mapStringToObject);
                if(callback && callback.call) callback(results);
            }
            fs.readFile("stats.txt", "utf8", handleFileStringToObject);
        },
        writeStats:function(locationTerm){
            var timeStamp = new Date();
            console.log(`writing ${locationTerm} to the logs at ${timeStamp}`);
            fs.appendFile("stats.txt", `${locationTerm}, ${timeStamp.valueOf()}`);
        }
    };
})();