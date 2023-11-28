//event loops
//event loops is the mechanism to help bypass that single threaded nature of JS
//it register's the callback , moves on to the other tasks or lines of code and
//then after it's done come back to excute the callback it registered
//simply moving the call back to the end of the queue
const { readFile } = require("fs");

console.log("Started the first task");

//since "readFile" is async , it is offloaded then the rest of the lines of code is run
readFile("./content/result-async.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed the first task");
});

console.log("starting next task");
console.log("\nstarting another task\n");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`\n${result}`);
  console.log("completed the second task(second file )");
});

console.log("The very last line of code\n ");
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }
