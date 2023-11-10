require("dotenv").config();
// import express server
const express = require("express");

// initialize express server
const app = express();

const port = 8001;

app.get("/", (req, res, next) => {
    res.json({
        expressServer: "Hello World!",
    });
});

app.listen(port, () => {
    // msg to know express server is running
    console.log(`Express server listening on port ${port}`);
});
