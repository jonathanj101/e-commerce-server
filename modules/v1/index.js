const v1Route = require("express").Router();

v1Route.use("/test", require("./testRoute/testRoute"));

module.exports = v1Route;
