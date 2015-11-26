var Rx = require("rx");
var program = Rx.Observable.from(process.argv.slice(2));

var program = function(args = process.argv.slice(2)){
  return Rx.Observable.from(args);
};

program
  .subscribe(function(x){
    console.log(x);
  },
  function(err){
      console.log(err);
  },
  function(){});

module.exports = program;
