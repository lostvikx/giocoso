"use strict";
require("dotenv").config();
const express = require("express");

const app = express();
// This will be useful while deploying the app
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {"title": "Home"});
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));