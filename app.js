const express = require("express");
const bodyParser = require("body-parser");
const { currency, mycallback, replacech, mycallback1 } = require("./file.js");

// New app using express module
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const stringi = String(req.body.str);
  console.log(stringi);
  //   const a = currency(stringi, /£?[0-9][0-9]?/g, mycallback);
  var result1 =
    currency(stringi, /£+[0-9][0-9]?/g, mycallback) +
    "<br>" +
    currency(stringi, /(bread|cost)/g, mycallback) +
    "<br>" +
    currency(
      stringi,
      /[0-9.]+[0-9.]+[0-9.]+[0-9.]+[0-9.]+[0-9.]+/i,
      mycallback
    ) +
    "<br>" +
    replacech(stringi, /£/g, "$", mycallback1);

  // console.log(result1);
  res.send(result1);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
