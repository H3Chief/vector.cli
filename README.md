# vector.cli

**Note:** Functionality described below is not yet implemented, unless indicated otherwise.

Vector.cli is a library to help you build command line applications and configuration
tools with node.js. Vector is designed to support hightly advanced/nested cli
operations, heirarchical command management and mutation, and heirarchical configuration
management built-in (via [`nconf`][nconf])

## Usage


vector.cli will load all files in given directory, and add a sub-command for each
matched filename. Each sub-directory of given path will be nested underneath
the named sub-command, unless an ignore is set.


The following file paths:

```js
var vcli = require("vcli");

var program = vcli({
  match: 'glob',
  ignore: 'glob'
});

program.appendFromPath('/path/to/command/dir');

});

//someCommand.js
var {command} = reequire("vcli");

command.on(function(){
    // do something whenever command is called
});
module.exports = command;

```

[//]: # Links
[nconf]: npmjs.org/nconf
