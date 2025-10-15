const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("form", { errors: [] });
});

app.post(
    "/submit",
    [
        body("facultyId")
            .notEmpty().withMessage("Faculty ID is required")
            .isInt({ min: 1 }).withMessage("Faculty ID must be positive integer")
            .isLength({ min: 2, max: 4 }).withMessage("Faculty ID must be 2 to 4 digits"),
        body("facultyName").notEmpty().withMessage("Faculty Name is required"),
        body("mobile")
            .notEmpty().withMessage("Mobile number is required")
            .isNumeric().withMessage("Mobile must be number")
            .isLength({ min: 9 }).withMessage("Mobile must be at least 9 digits"),
        body("age")
            .notEmpty().withMessage("Age is required")
            .isInt({ min: 18, max: 100 }).withMessage("Age must be 18 to 100"),
        body("birthYear")
            .notEmpty().withMessage("Birth year is required")
            .isInt({ min: 1920, max: 2022 }).withMessage("Birthyear must be 1920 to 2022"),
        body("address").notEmpty().withMessage("Address is required"),
        body("email")
            .notEmpty().withMessage("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage("Invalid Email format")
            .matches(/\.(com|in|org|ai)$/).withMessage("Email must end with .com, .in, .org, .ai"),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("form", { errors: errors.array() });
        }
        res.send("Form Submitted Successfully");
    }
);

app.listen(3000, () => {
    console.log("Server running on 3000");
});
