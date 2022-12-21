const { Router } = require("express");
const {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/books.controllers");

const routers = Router();

routers.get("/", getBooks);

routers.post("/", createBooks);

routers.put("/:id", updateBooks);

routers.delete("/:id", deleteBooks);

module.exports = routers;
