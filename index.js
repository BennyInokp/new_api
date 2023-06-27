const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Welcome to my homepage</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Reach me via 07038284412</h1>");
});
app.listen(5000, function () {
  console.log("server running on port 5000");
});
