const { log } = require("console");
//manual approach (create package)
// log("Hello world");
// log("Hello people");

//Js is a single threaded and sync language,
//meaning it runs everything line by line ,
//doesnt matter how time consuming a line of code may be

log("FIrst task");
console.time();
for (let i = 0; i < 10000; i++) {
  log(i);
}
console.timeEnd();
log("next task");
