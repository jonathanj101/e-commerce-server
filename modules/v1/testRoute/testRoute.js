const testRoute = require("express").Router();
const testController = require("./testController");

// express validators
const { validationResult } = require("express-validator");

const testMiddleware = [
    (req, res, next) => {
        console.log(validationResult(req));
        // validating req
        const errors = validationResult(req);
        console.log(errors, errors.array());
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()[0],
            });
        }
        return next();
    },
    testController.testingMVC,
];

testRoute.get("/testing-mvc", testMiddleware);

module.exports = testRoute;
