const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { user: "john", id: 3 };
    next();
  } else if (req.user) {
    if (req.user.name === "john") {
      next();
    }
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
