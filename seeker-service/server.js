/* eslint-disable no-undef,no-console */
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "dist/seeker-service")));
app.set("port", process.env.PORT || 9001);

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
