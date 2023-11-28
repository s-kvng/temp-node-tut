//Modules
//CommonJS, every file is a module (by default)
//Modules - Encapsulated code (only share minimal)
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(data);
sayHi(john);
sayHi(peter);
