const mongoose = require("mongoose");

const bookScheme = mongoose.Schema({
  bookName: {
    type: String,
    require: true,
  },
  published: {
    type: Date,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("book", bookScheme);

module.exports = Book;
