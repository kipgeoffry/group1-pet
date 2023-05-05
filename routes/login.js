/*
 * login.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");

const router = express.Router();

var isGetMethod; //Alert EJS if the Method is POST or GET - To use SAME EJS file for both POST and Get Requests

router.get("/login", (req, res) => {

/*
  EJS SIGN UP GET METHOD
 */
  res.render("login", { title: "Login Up",  heading:"Our Pet", isGetMethod:true});
  console.log("Login page");

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