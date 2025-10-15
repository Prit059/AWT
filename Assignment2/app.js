// app.js
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
}));

// Temporary User Storage (In-Memory)
let users = [];

// Home Route
app.get("/", (req, res) => {
    res.redirect("/login");
});

// Registration Page
app.get("/register", (req, res) => {
    res.render("register");
});

// Registration POST
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    console.log(users);
    res.redirect("/login");
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// Login POST
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        req.session.user = user;
        res.cookie("username", username);
        res.redirect("/dashboard");
    } else {
        res.send("Invalid Username or Password");
    }
});

// Dashboard (Protected Route)
app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user });
    } else {
        res.send("You must login first!");
    }
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.clearCookie("username");
    res.redirect("/login");
});

// Start Server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
