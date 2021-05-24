/* eslint-disable no-undef,no-console */
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 9002);

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
