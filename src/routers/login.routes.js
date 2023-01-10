const { Router } = require("express");
const { createUser } = require("../controllers/login.controllers");

const routers = Router();

routers.post("/", createUser);

module.exports = routers;
