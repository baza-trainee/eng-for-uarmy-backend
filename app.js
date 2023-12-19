const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mailingRouter = require("./src/routes/api/mailingRouter");
const authRouter = require("./src/routes/api/authRouter");
const reviewRouter = require("./src/routes/api/reviewRouter");
const mediaRouter = require("./src/routes/api/mediaRouter");
const contactsRouter = require("./src/routes/api/contactsRouter");
const errorHandler = require("./src/helpers/errorHandler");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.set("trust proxy", 1);

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contact-us", mailingRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", reviewRouter);
app.use("/api/admin", mediaRouter);
app.use("/api/admin", contactsRouter);

app.use(errorHandler);

module.exports = app;
