const { Router } = require("express");
const auth = require("../middlewares/authorization");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

const routers = Router();

routers.get("/get", auth, getUser);

routers.post("/register", createUser);

routers.put("/:id", updateUser);

routers.delete("/:id", deleteUser);

module.exports = routers;
