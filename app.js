/*
 * App.js
 * Copyright(c) 2023 Moringa School Group 1 - Eliud, Geofrey, Hellen & Kelvin
 * MIT Licensed
 */
const express = require("express");
const PORT = 5500;
const app = express();
const homeRouter = require("./routes/home");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(homeRouter);
app.listen(PORT, () => {
  console.log("Server listening on port: " +PORT);
});