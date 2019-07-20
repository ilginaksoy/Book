const mongoose = require("mongoose"); //mongodb için veritabı işlemilerini sağlayan kütüphane
const Schema = mongoose.Schema;

const book = new Schema({
  book_name: String,
  author_id: Schema.Types.ObjectId,
  publish_year: {
    type: Date,
    default: Date.now
  },
  category: String
});

module.exports = mongoose.model('Book', book); //Book adında book şeklinde veritabanı
