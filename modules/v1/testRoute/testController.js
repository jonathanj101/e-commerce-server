const testService = require("./testService");

const testController = {};

// testing controller

testController.testingMVC = async (req, res) => {
    console.log("testController.test()");
    try {
        return res.status(200).json({
            msg: "Success!",
            status: true,
        });
    } catch (error) {
        console.log(testController.test(), error.message);
        return res.status(400).json({
            error: { msg: "Something went wrong!" },
            status: false,
        });
    }
};

module.exports = testController;
