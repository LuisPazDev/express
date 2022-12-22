require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("");
    console.log(`\x1b[34m **************************** \x1b[0m`);
    console.log(`\x1b[34m **   Connected to Mongo   ** \x1b[0m`);
    console.log(`\x1b[34m **************************** \x1b[0m`);
  } catch (e) {
    console.log("");
    console.log(`\x1b[31m **************************** \x1b[0m`);
    console.log(`\x1b[31m **    Error Connecting    ** \x1b[0m`);
    console.log(`\x1b[31m **************************** \x1b[0m`);
  }
};

module.exports = { dbConnection };
