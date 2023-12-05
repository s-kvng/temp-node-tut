const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  console.log(typeof req.params.productID);
  const { productID } = req.params;
  console.log(req.route.path);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("<h1>Product does not exist </h1>");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.splice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    res.status(200).send("No products matched the search");
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server listening to port: 5000....");
});
