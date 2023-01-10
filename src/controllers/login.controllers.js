// require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { message, messagError, resApi } = require("../helpers/helpers");
const Users = require("../models/UserScheme");

const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let findUser = await Users.findOne({ email: email });
    if (!findUser) {
      return res.status(400).json({ msg: "User does not exists" });
    }
    const correctPassword = await bcrypt.compare(password, findUser.password);
    if (!correctPassword) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    const payload = {
      user: {
        id: findUser._id,
      },
    };
    if (email && password) {
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } else {
      res.status(400).json({ msg: "Email or password incorrect" });
    }
    // resApi(res, "ok", newUser);
  } catch {
    messagError("Error loging user");
  }
};

module.exports = {
  createUser,
};
