/*
 * home.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  
//  To be updated on the EJS File is Ready
 res.render("home", { title: "Our Pet" });

//  console.log("Home page");
//   res.send("Welcome to Pet Website <strong>Home Page!</strong>" + "<p><a href =/signup>Sign Up</a></p>" + "<p><a href =/login>Login</a></p>");
//   res.end();
});

module.exports = router;