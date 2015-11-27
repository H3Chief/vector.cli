var loadCommand = require("./utils/loadCommand");

// initialize base object
function command (){
    return {};
};

// sets the options
command.prototype.options = require('./programOptions');

/**
*@description adds new command object as child to this command
*
*@return the parent object
*/
command.prototype.attach = function appendCommand(command){
    var cmd;
    // if typeof command is string, then interpret as a path to load
    if (typeof command === "string"){
        cmd = loadCommand(command);
    }
    this.commands.push(cmd);
};

/**
*@description adds new command object as child to this command
*
*@return this object
*/
command.prototype.append = function newCommandNode(command){
    // must be an object
    if (typeof command != "object") {
      throw new Error("this function requires a valid command object");
    }

    // add command onto command tree
    this.commands.push(command);

    return command;
};


/**
*@description adds
*/
command.prototype.appendFromPath = function appendFromPath(path, options){

};

module.exports = command;
