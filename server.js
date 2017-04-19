var http = require('http'); //require = Get A module in Data.js
var rando = require('./rando'); //=sendData exp function bottom of data.js
// var output = require('./output'); //exporting OBJ after output.js
//

http.createServer(function (req, res) { //node http method lib has createServer function callback req res
// console.log(data());
res.writeHead(200); // got this request, going to send a 200 code as response

res.write('Random Numbers converted \n ', ); //print text

res.write('$' + rando.random(100,1000000));//exp param Movie obj//call data
//when calling the Random #
//need to call from above var "rando" as prefix
//all functions live within this file
// random is the function that lives within "rando"
//rando.random(parameters or nothing)
res.end();

}).listen(3512);
