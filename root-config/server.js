/* eslint-disable no-undef,no-console */
const path = require("path");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 9000);

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist" });
});

app.listen(app.get("port"), function () {
  console.log("listening on port ", app.get("port"));
});
