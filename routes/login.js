/*
 * login.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {

 /*
To be updated when the EJS Files are ready 
 res.render("login", { title: "Login Page" });
 */
 console.log("Login page");
 res.send("Please provide login details <strong>Login Page!</strong>" + "<p><a href =/>Home</a></p>" + "<p><a href =/signup>Sign Up</a></p>");
 res.end();
});

router.post("/login", (req, res) => {
  /*
   To be updated when the EJS Files are ready - to proces submitted data
    var data = {
      name: req.body.name,
      password: req.body.password,
    };
    console.log(res);
    res.render("output", { title: "Display Output", data: data});

 */
 
});

module.exports = router;