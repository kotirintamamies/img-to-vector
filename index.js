var gm = require('gm');
var fs = require('fs');
var request = require('request');

start();
function start()
{

        gm('image.png')
          .whiteThreshold(160,160,160)
          .blackThreshold(160,160,160)
          .write(fs.createWriteStream('image.jpg'), function(err){console.log(err);})





}
