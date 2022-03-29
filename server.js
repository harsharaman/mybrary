"use strict";
exports.__esModule = true;
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
var express = require("express");
var expressLayouts = require("express-ejs-layouts");
//import { router as indexRouter } from ".\\routes\\index";
var mongoose = require("mongoose");
var indexRouter = require(".\\routes\\index");
var app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "\\views");
app.set("layout", "layouts\\layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);
mongoose.connect(process.env.DATABASE_URL);
var db = mongoose.connection;
db.on("error", function (error) { return console.error(error); });
db.once("open", function () { return console.log("Connected to Mongoose!"); });
app.listen(process.env.PORT || 3000);
