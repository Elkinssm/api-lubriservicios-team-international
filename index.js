const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");

const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ["http://localhost:3001", "https://myapp.co"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
app.use(cors(options));

require("./utils/auth/index");

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
