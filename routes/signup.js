/*
 * signup.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");

const router = express.Router();

router.get("/signup", (req, res) => {
 /*
  To be updated when the EJS Files are ready 
   res.render("signup", { title: "Sign Up Page" });
 */
   console.log("Sign Up page");
  res.send("Please Sign Up here. <strong>Sign Up Page!</strong>" + "<p><a href =/login>Log In</a></p>" + "<p><a href =/>Home</a></p>");
  res.end();
});

router.post("/signup", (req, res) => {
  
/*
   To be updated when the EJS Files are ready 
    var data = {
      name: req.body.name,
      password: req.body.password,
    };
    console.log(res);
    res.render("output", { title: "Display Output", data: data});

 */
});

module.exports = router;