// express server
require("dotenv").config();
const http = require("http");
const app = require("./config/app");

const db = require("./models/index");

// initialize db connection, if it fails then don't listen to any requests!
db();

// initialize express server
// console.log(+process.env.PORT);
const port = +process.env.PORT || 8000;

app.get("/", (req, res, next) => {
    res.json({
        expressServer: "Hello World!",
    });
});

//create server with the created express configurations
const server = http.createServer(app);
server.listen(port, () => {
    // msg to know express server is running
    console.log(`Express server listening on port ${port}`);
});
