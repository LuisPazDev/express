// require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { message, messagError, resApi } = require("../helpers/helpers");
const Users = require("../models/UserScheme");

const getUser = async (req, res) => {
  try {
    message("User loaded");
    const user = await Users.find({});
    resApi(res, "ok", user);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    message("User Created");
    const newUser = await Users.create({
      username,
      email,
      password: hashPassword,
    });
    const payload = {
      user: {
        id: newUser._id,
      },
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );

    // resApi(res, "ok", newUser);
  } catch {
    messagError("Error creating user");
  }
};

const updateUser = async (req, res) => {
  try {
    message("User updated");
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resApi(res, "ok", user);
  } catch {
    messagError("Error updating user");
  }
};

const deleteUser = async (req, res) => {
  try {
    message("User deleted");
    const user = await Users.findByIdAndRemove(req.params.id);
    resApi(res, "ok", user);
  } catch {
    messagError("Error deleting User");
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
