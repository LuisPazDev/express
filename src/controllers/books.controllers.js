const Book = require("../models/BookScheme");
const { message, messagError, resApi } = require("../helpers/helpers");

const getBooks = async (req, res) => {
  try {
    message("Books loaded");
    const books = await Book.find({});
    // console.log("test");
    resApi(res, "ok", books);
  } catch {
    messagError("Error loading books");
  }
};

const createBooks = async (req, res) => {
  try {
    message("Book Created");
    const books = await Book.create(req.body);
    resApi(res, "ok", books);
  } catch {
    messagError("Error creating books");
  }
};

const updateBooks = async (req, res) => {
  try {
    message("Book updated");
    const books = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resApi(res, "ok", books);
  } catch {
    messagError("Error updating books");
  }
};

const deleteBooks = async (req, res) => {
  try {
    message("Book deleted");
    const books = await Book.findByIdAndRemove(req.params.id);
    resApi(res, "ok", books);
  } catch {
    messagError("Error deleting books");
  }
};

module.exports = {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
};
