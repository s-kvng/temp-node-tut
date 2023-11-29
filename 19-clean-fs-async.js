//CLEANING THE FS-ASYNC CODE

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME RIGHT:\n${first} \n${second}`,
      { flag: "a" }
    );
    console.log("Done with the task");
  } catch (error) {
    console.log(`error : ${error}`);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// writeFile(
//   "./content/result-async2.txt",
//   `Here is the result of the clean fs-async code base :\n ${first}\n ${second}`,
//   (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("done with this task");
//   }
// );
