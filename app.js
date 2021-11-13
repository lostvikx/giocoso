"use strict";
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
// This will be useful while deploying the app
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
// Specify the views dir
app.set("views", path.join(__dirname, "views"));

// The public dir
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {"title": "Home"});
});

app.get("/about", (req, res) => {
  res.render("about", {"title": "About"});
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

app.get((req, res) => {
  res.render("404", {"title": "Page Not Found!"});
})