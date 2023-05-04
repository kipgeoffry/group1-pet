/*
 * signup.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");

const router = express.Router();

var isGetMethod; //Alert EJS if the Method is POST or GET - To use SAME EJS file for both POST and Get Requests
router.get("/signup", (req, res) => {
 /*
  EJS SIGN UP GET METHOD
 */
  res.render("signup", { title: "Sign Up",  heading:"Our Pet", isGetMethod:true});
   console.log("Sign Up page");
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