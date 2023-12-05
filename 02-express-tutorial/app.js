const express = require("express");
const logger = require("./logger");
const app = express();

//  req => middleware => res
//we can also specifically define the routes to use the middleware on
app.use("/api", logger); // if you want to apply the middleware to all , it must be at the top most level

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
