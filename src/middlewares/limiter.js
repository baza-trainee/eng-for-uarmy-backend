const rateLimit = require("express-rate-limit"); 

const limit = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: "Too many requests from this IP, please try again later.",
});

module.exports = limit;