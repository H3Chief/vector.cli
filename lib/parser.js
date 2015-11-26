var Rx = require("rx");
var program = Rx.Observable.from(process.argv.slice(2));

program
  .subscribe(function(x){
    console.log(x);
  },
  function(err){
      console.log(err);
  },
  function(){});

  module.exports = program;
