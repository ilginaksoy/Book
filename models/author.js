const mongoose = require("mongoose"); //mongodb için veritabı işlemilerini sağlayan kütüphane
const Schema = mongoose.Schema;

const author = new Schema({
  name: String,
  surname: String,
  bio: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('author', author); 
