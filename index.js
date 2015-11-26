var Rx = require("rx");
var command = require("./lib/command");
var program = Rx.Observable.from(process.argv.slice(2));

var program = function(args = process.argv.slice(2)){
  return Rx.Observable.from(args);
};

program
  .subscribe(function(x){
    // append option or function
  },
  function(err){
    // display errors
  },
  function(){});

module.exports = program;
