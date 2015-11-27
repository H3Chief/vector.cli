var loadCommand = require("./utils/loadCommand");
var programOptions = require("./programOptions");

function Command(){
  this.name = "rootCommand";
  this.commands = [];

}
  /**
  *@description adds new command object as child to this command
  *
  *@return the parent object
  */
  Command.prototype.attach = function attach(command){
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
Command.prototype.append = function append(command){
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
Command.prototype.appendFromPath = function appendFromPath(path, options){

};

module.exports = Command;
