const mongoose = require("mongoose"); //the library which ensure the mongodb processes
const Schema = mongoose.Schema;

//book informations - for db
const book = new Schema({
  book_name: String,
  author_id: Schema.Types.ObjectId,
  publish_year: {
    type: Date,
    default: Date.now
  },
  category: String
});

module.exports = mongoose.model('Book', book); //db name: Book
