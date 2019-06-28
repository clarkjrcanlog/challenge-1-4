var fs = require("fs");

function checkForFile(fileName) {
    fs.exists(fileName, function(exists) {
      if (exists) {
          var challenge = require('./challenge')
          challenge.read();
      } else {
      var data1 = `var read = function(){
          var msg = 'Welcome to TinkerTech Inc.'
          console.log(msg);
      }`;
      var data2= `module.exports = {
          read: read
      };`;
      var data = `${data1} \n ${data2}`
      fs.writeFileSync(fileName, data);
      }
    });
  }
  
  function writeToFile() {
    checkForFile("challenge.js", function() {
      //It is now safe to write/read to file.dat
      fs.readFile("challenge.js", function(err, data) {
          
      });
    });
  }
  
  writeToFile();