//CLEANING THE FS-ASYNC CODE

const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((reject, resolve) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
