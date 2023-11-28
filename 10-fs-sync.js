//with this the code/task moves line by line ,
//so until the file is read or written no other task be started

const { log } = require("console");
const { readFileSync, writeFileSync, write } = require("fs");
log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result : ${first}, ${second}`,
  { flag: "a" }
);

log("done with this task");
log("starting the next one ");
