const express = require("express");
const routerApi = require("./routes");

const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello my server in express`);
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Hello my server in express in the port ${port}`);
});
