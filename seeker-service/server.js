/* eslint-disable no-undef,no-console */
const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors')

const allowedOrigins = ['https://joblesschool-root-config.herokuapp.com'];
const corsOptions = {
  origin: allowedOrigins
}
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, "dist/seeker-service")));
app.set("port", process.env.PORT || 9001);

app.listen(app.get("port"), function () {
  console.log("listening on port ", app.get("port"));
});
