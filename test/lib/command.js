/*global expect, assert*/
var Command = require('../../lib/command');
var command = new Command();

describe('command prototype',function(){

  it('should have the following functions: ',function(){
    expect(command.attach).to.be.a('function');
    expect(command.append).to.be.a('function');
    expect(command.appendFromPath).to.be.a('function');
  });

  it('should have the following properties:', function(){
    expect(command.commands).to.be.an('array');
    expect(command.cliOptions).to.be.an('array');
  });

});

describe('command usage', function(){
  it('should allow children commands to be added',function(){

  });

  it('should allow grandchildren to be chained to children', function(){

  });
});
