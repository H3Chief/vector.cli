# Example command structure

```
var npmProgram = {
  "npm":{
    commands:[{config}],
    options:[],
  };
};

var commandN = {
  "config":{
    commands:[],
    options:[{description}, {help}]
  }
}


// bootstrap.js
module.exports = function(){
  return npmProgram;

}
```
