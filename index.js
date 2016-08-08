var gm = require('gm');
var fs = require('fs');
var Potrace = require('potrace');
var program = require('commander')

//configure these [red, green, blue] for your photo before running
var colorThreshholds = [180, 180, 180]

start(tr);

program
  .arguments('<inputfile>, [outputfile]')
  .action(function(inputfile, outputfile)
  {
    start(thresh)
  }
)

function start(thresh, input, output)
{

        gm(input)
          .whiteThreshold(colorThreshholds[0],colorThreshholds[1],colorThreshholds[2], 1)
          .blackThreshold(colorThreshholds[0]+1,colorThreshholds[1]+1,colorThreshholds[2]+1, 0)
          .write('image2.jpg', function(err){
            if(!err)
            {
              Potrace.loadImage('image2.jpg', function(err)
              {
                Potrace.process(function()
                {
                  fs.writeFile(output, Potrace.getSVG(1), function(err){
                    fs.unlink('image2.jpg');
                  })
                })
              })
            }
          })
}
