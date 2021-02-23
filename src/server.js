const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("61070351");
});

module.exports = app;
