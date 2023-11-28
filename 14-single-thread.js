const { log } = require("console");

//manual approach (create package)

// log("Hello world");
// log("Hello people");

log("FIrst task");
console.time();
for (let i = 0; i < 10000; i++) {
  log(i);
}
console.timeEnd();
log("next task");
