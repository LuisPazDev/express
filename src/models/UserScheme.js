const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("user", userScheme);

module.exports = Users;
