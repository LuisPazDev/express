const mongoose = require("mongoose");

const bookScheme = mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  published: {
    type: Date,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookScheme);

module.exports = Book;
