/*global expect, assert*/
var command = require('../../lib/command');

describe('command prototype tests',function(){

  it('should have the following functions: ',function(){
    assert.isFunction(command().attach," - attach()");
  });
});
