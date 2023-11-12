const route = require("express").Router();

route.use("/", require("./modules"));

module.exports = route;
