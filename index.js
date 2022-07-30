const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hello my server in express`);
});

app.listen(port, () => {
  console.log(`Hello my server in express in the port ${port}`);
});
