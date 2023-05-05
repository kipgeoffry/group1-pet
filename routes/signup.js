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
  EJS SIGN UP POST METHOD
 */
  
  console.log(req.body);
  var details = {
  name: req.body.name,
  email: req.body.email,
  phone:  req.body.phone,
  date: req.body.date,
  gender: req.body.gender,
 }

 res.render("signup", { title: "Sign UP", heading:"Our Pet",isGetMethod:false, data: details});
 res.end();
});

module.exports = router;