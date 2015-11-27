var Rx = require("rx");
var program = Rx.Observable.from(process.argv.slice(2));
var command = require("./lib/command");

/**
*@Description feeds cli arguments into the parser
*@return Observable
*/
var program = function(args){
  // turn the program into an observable stream
  if (typeof args === "undefined"){
      args = process.argv.slice(2);
  }
  return Rx.Observable.from(args);
};

module.exports.program = program;
module.exports.command = command;
