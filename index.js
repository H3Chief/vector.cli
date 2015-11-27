var Rx = require("rx");
var program = Rx.Observable.from(process.argv.slice(2));
var Command = require("./lib/command");

// return a constructed command as the root command of a program
var rootCommand = new Command();

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

module.exports = program;
