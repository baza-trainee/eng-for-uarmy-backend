const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const apiRoutes = require("./src/routes/api");
const { errorHandler } = require("./src/helpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.set("trust proxy", 1);

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/admin", apiRoutes.aboutUsRouter);
app.use("/api/admin", apiRoutes.mediaRouter);
app.use("/api/admin", apiRoutes.contactsRouter);
app.use("/api/contact-us", apiRoutes.mailingRouter);
app.use("/api/auth", apiRoutes.authRouter);
app.use("/api/admin", apiRoutes.reviewRouter);
app.use("/api/admin", apiRoutes.partnerRouter);
app.use("/api/admin", apiRoutes.projectsRouter);

app.use(errorHandler);

module.exports = app;
