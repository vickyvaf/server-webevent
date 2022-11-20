const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// routers
const v1 = "/api/v1/cms";
const categoriesRoute = require("./app/api/v1/categories/router");
const imagesRoute = require("./app/api/v1/images/router");
const talentsRoute = require("./app/api/v1/talents/router");
const eventsRoute = require("./app/api/v1/events/router");
const organizersRoute = require("./app/api/v1/organizers/router");
const authRoute = require("./app/api/v1/auth/router");

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.status(200).json({
    message: "api webevent ready...",
  });
});

app.use(v1, categoriesRoute);
app.use(v1, imagesRoute);
app.use(v1, talentsRoute);
app.use(v1, eventsRoute);
app.use(v1, organizersRoute);
app.use(v1, authRoute);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
