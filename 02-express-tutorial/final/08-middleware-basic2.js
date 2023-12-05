const express = require("express");
const logger = require("./logger");
const app = express();

//  req => middleware => res
app.use(logger); // if you want to apply the middleware to all , it must be at the top most level

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
