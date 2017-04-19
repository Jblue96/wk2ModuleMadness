var sendRandom = {

//avail via modules.exports
 random: function (min,max) {
   // Can leave parameters blank between parenthesis
   //   OR  can toss in min,max
   // then in server.js you can toss in numbers

   // Random is a Method that lives within rando.js
   // Nav too server.js

  var randomnumber = Math.floor(Math.random() * 1000000 + 100);
return randomnumber;
},
};
//current module were in
module.exports = sendRandom;

// server .js call res.write
//property of moduel, get returnwhne we require this module, gret a
