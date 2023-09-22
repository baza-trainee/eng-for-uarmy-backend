const app = require("./app");
require('dotenv').config();

const { PORT = 3000 } = process.env;

const start = async () => {
  try {
    app.listen(PORT);
  } catch (err) {
    console.error(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  }
}

start();