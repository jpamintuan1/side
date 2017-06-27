"use strict";
(function(){
    var fs = require("fs");
    module.exports = {
        getStats:function(callback){
            console.log("get stats...");
                var output = [];
            fs.readFile("stat-log.txt","utf8",function(resp){
                var lines = resp.split(/\r?\n/);
                for(var i = 0; i < lines.length; i++){
                    output.push(JSON.parse(lines[i]))
                }
                callback(output);
            });
        },
        writeStats:function(locationTerm){
            var timeStamp = new Date();
            console.log(`writing ${locationTerm} to the logs at ${timeStamp}`);
            fs.appendFile("stat-log.txt",JSON.stringify({locationTerm:locationTerm, timeStamp:timeStamp}));
        }
    };
})();