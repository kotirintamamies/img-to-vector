var gm = require('gm');
var fs = require('fs');
var Potrace = require('potrace');
var program = require('commander')

//configure these [red, green, blue] for your photo before running
var colorThreshholds = [180, 180, 180]

program
  .arguments('<inputfile> <outputfile> <r> <g> <b>')
  .action(function(inputfile, outputfile, r, g, b){
  colorThreshholds = [r, g, b];
  console.log(inputfile);
  start(inputfile, outputfile);
  })

program.parse(process.argv);


function start(input, output)
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
