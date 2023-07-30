const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  genre: String,
  age: String,
});

module.exports = mongoose.model("Author", AuthorSchema);
