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
  EJS login GET METHOD
 */
  res.render("login", { title: "Login",  heading:"Our Pet", isGetMethod:true});
 res.end();
});

router.post("/login", (req, res) => {
 /*
  EJS Login POST METHOD
 */
  console.log(req.body);
  var details = {
  username: req.body.username,
  password: req.body.password,

 };
    res.render("login", { title: "Login", heading:"Our Pet",isGetMethod:false, data: details});
 
});

module.exports = router;