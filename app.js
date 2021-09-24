"use strict";
require("dotenv").config();
const express = require("express");

const app = express();
// This will be useful while deploying the app
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Aliens!");
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));