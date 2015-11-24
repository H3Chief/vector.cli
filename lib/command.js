var command;

/**
*@description adds new command object as child to this command
*/
command.prototype.append = function appendCommand(command){
    this.commands.push(command);
}

command.prototype.command = function newCommandNode(){

    this.commands.push(command);
}

module.exports = command;
