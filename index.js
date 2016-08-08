var gm = require('gm');
var fs = require('fs');
var Potrace = require('potrace');

var tr = 145;
start(tr);
function start(thresh)
{

        gm('image.jpg')
          .whiteThreshold(thresh,thresh,thresh, 1)
          .blackThreshold(thresh+1,thresh+1,thresh+1, 0)
          .write('image2.jpg', function(err){
            if(!err)
            {
              Potrace.loadImage('image2.jpg', function(err)
              {
                Potrace.process(function()
                {
                  fs.writeFile("valmis.svg", Potrace.getSVG(1), function(err){}) 
                })
              })
            }
          })
}
