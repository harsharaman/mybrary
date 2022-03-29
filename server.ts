if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import * as express from "express";
import * as expressLayouts from "express-ejs-layouts";
//import { router as indexRouter } from ".\\routes\\index";
import * as mongoose from "mongoose";

const indexRouter = require(".\\routes\\index");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "\\views");
app.set("layout", "layouts\\layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose!"));
app.listen(process.env.PORT || 3000);
