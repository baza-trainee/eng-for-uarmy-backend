const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { DB_HOST, PORT = 3000 } = process.env;

const start = async () => {
  try {
    await mongoose.connect(DB_HOST);

    app.listen(PORT);
    console.log("Started!");
  } catch (err) {
    console.error(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  }
};

start();
