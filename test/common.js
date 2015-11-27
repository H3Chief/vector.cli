var chai = require("chai");
global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = require("sinon");

var sinonChai = require("sinon-chai");
chai.use(sinonChai);
