const route = require("express").Router();

// API versioning
route.use("/v1", require("./v1"));

module.exports = route;
