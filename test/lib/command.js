/*global expect, assert*/
var Command = require('../../lib/command');
var assert = require("chai").assert;

var command = new Command();


describe('command prototype',function(){

  it('should have the following functions: ',function(){
    expect(command.attach).to.be.a('function');
    expect(command.append).to.be.a('function');
    expect(command.appendFromPath).to.be.a('function');
  });
});
